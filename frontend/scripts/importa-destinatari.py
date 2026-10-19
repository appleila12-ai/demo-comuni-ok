#!/usr/bin/env python3
"""
Elenco dei destinatari della mail "Scrivi al tuo Comune".

Legge i due file Excel con gli indirizzi dei Comuni e scrive
public/destinatari-comuni.json: per ogni Comune UN solo indirizzo, scelto tra
quelli generici adatti a una lettera al Sindaco e ai Servizi Sociali.
Gli indirizzi di singole persone o di uffici non pertinenti (ragioneria,
tributi, anagrafe, ufficio tecnico, polizia, CED, RTD...) vengono scartati.

Uso:
  python3 scripts/importa-destinatari.py \
      --comuni-email comuni_email.xlsx \
      --lista-regioni lista-completa-comuni-per-regione.xlsx \
      --out public/destinatari-comuni.json

Formato del file prodotto:
  { "<PROVINCIA>|<nome normalizzato>": ["indirizzo", "o" | "p"], ... }
  "o" = email ordinaria, "p" = PEC (può non accettare email da non-PEC).
La chiave si calcola come in src/lib/destinatari.ts (stessa normalizzazione).
"""
import argparse
import collections
import json
import re
import sys
import unicodedata

import openpyxl


def norm(s: str) -> str:
    """Minuscolo, senza accenti né punteggiatura (stessa regola dell'app)."""
    s = unicodedata.normalize("NFD", str(s).lower())
    s = "".join(c for c in s if unicodedata.category(c) != "Mn")
    s = re.sub(r"['’`.\-]", " ", s)
    return re.sub(r"\s+", " ", s).strip()


def nome_comune(s: str) -> str:
    s = re.sub(r"^\s*comune\s+(di|del|dell'|della)\s*", "", str(s), flags=re.I)
    return norm(s)


EMAIL = re.compile(r"^[a-z0-9._%+\-]+@[a-z0-9.\-]+\.[a-z]{2,}$")

# Parti locali adatte, dalla più alla meno indicata (punteggio più alto = meglio)
ADATTE = [
    (100, re.compile(r"(servizi?\.?soc|politiche\.?soc|assistenz\w*\.?soc|^sociale|\.sociale$|^welfare)")),
    (90, re.compile(r"^protocollo(\.generale|generale)?$")),
    (85, re.compile(r"^segreteria(\.?generale)?$|^segreteria\.?sindaco$|^segreteriasindaco$")),
    (80, re.compile(r"^sindaco$|^ufficio\.?sindaco$")),
    (75, re.compile(r"^info$")),
    (70, re.compile(r"^urp$")),
    (65, re.compile(r"^(comune|municipio|affari\.?generali|amministrazione)$")),
    (60, re.compile(r"^segretari[oa](\.?comunale)?$|^segretariocomunale$")),
    (50, re.compile(r"^rtd$|^transizione\.?digitale$")),  # ufficio per i servizi digitali (non una persona)
]
ESTRAI_PROV = re.compile(r"\.([a-z]{2})\.it$")


def punteggio(email: str):
    """(punteggio, tipo) oppure None se l'indirizzo non è adatto."""
    e = str(email).strip().lower()
    if not EMAIL.match(e):
        return None
    locale, dominio = e.split("@")
    pec = "pec" in dominio.split(".") or locale.startswith("pec") or dominio.startswith("pec")
    base = locale.replace("pec.", "").replace(".pec", "")
    for p, rx in ADATTE:
        if rx.search(base):
            return (p - (10 if pec else 0), "p" if pec else "o")
    return None


def righe(path):
    ws = openpyxl.load_workbook(path, read_only=True, data_only=True).worksheets[0]
    it = ws.iter_rows(values_only=True)
    next(it)
    return [r for r in it if r and r[0]]


def main():
    ap = argparse.ArgumentParser()
    ap.add_argument("--comuni-email", required=True)
    ap.add_argument("--lista-regioni", required=True)
    ap.add_argument("--out", required=True)
    a = ap.parse_args()

    candidati = collections.defaultdict(list)  # chiave -> [(punti, tipo, email)]
    per_nome = collections.defaultdict(set)    # nome -> province in cui compare (None = non nota)
    visti, scartati = 0, 0

    def aggiungi(nome, prov, email):
        nonlocal visti, scartati
        visti += 1
        n = nome_comune(nome)
        sc = punteggio(email)
        e = str(email).strip().lower()
        m = ESTRAI_PROV.search(e)
        prov = (str(prov).strip().upper() if prov else None) or (m.group(1).upper() if m else None)
        per_nome[n].add(prov)
        if sc is None:
            scartati += 1
            return
        candidati[f"{prov or '*'}|{n}"].append((sc[0], sc[1], e))

    for r in righe(a.lista_regioni):
        nome, prov, _reg, email = (list(r) + [None] * 4)[:4]
        if nome and email:
            aggiungi(nome, prov, email)

    for r in righe(a.comuni_email):
        nome, email = (list(r) + [None] * 2)[:2]
        if not (nome and email) or not re.match(r"^\s*comune\s+d", str(nome), re.I):
            continue  # consorzi, aziende, associazioni: non sono Comuni
        aggiungi(nome, None, email)

    # Chiave solo-nome ("*|nome") valida solo se il nome è unico in tutta Italia
    for k in [k for k in candidati if k.startswith("*|")]:
        n = k[2:]
        if len(per_nome[n] - {None}) > 0:
            # Esiste con provincia nota: unisco al ramo con provincia, se unica
            provs = per_nome[n] - {None}
            if len(provs) == 1:
                candidati[f"{next(iter(provs))}|{n}"].extend(candidati.pop(k))
            else:
                del candidati[k]  # ambiguo: non si può assegnare
        elif len(per_nome[n]) > 1:
            del candidati[k]

    out = {}
    for k, lst in candidati.items():
        punti, tipo, email = sorted(lst, key=lambda x: (-x[0], x[2]))[0]
        out[k] = [email, tipo]

    with open(a.out, "w", encoding="utf-8") as f:
        json.dump(out, f, ensure_ascii=False, separators=(",", ":"), sort_keys=True)

    print(f"indirizzi letti: {visti} · scartati perché non adatti: {scartati}", file=sys.stderr)
    print(f"Comuni con un destinatario adatto: {len(out)} ({sum(1 for v in out.values() if v[1]=='p')} PEC)", file=sys.stderr)


if __name__ == "__main__":
    main()
