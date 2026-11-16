#!/usr/bin/env python3
"""Aggrega l'elenco installazioni inviato da SCEN (LETIsmart) in
frontend/src/content/letismart-installazioni.json: per Comune, numero di radiofari per categoria.
Non si pubblicano i nomi dei clienti. Uso: python3 -I importa-installazioni-letismart.py file.xlsx [data AAAA-MM-GG]"""
import json, sys, re, unicodedata, collections, openpyxl

def norm(s):
    s = unicodedata.normalize("NFD", str(s or "").lower())
    return re.sub(r"[^a-z0-9]", "", "".join(c for c in s if unicodedata.category(c) != "Mn"))

wb = openpyxl.load_workbook(sys.argv[1], data_only=False)
ws = wb.active
rows = list(ws.iter_rows(values_only=True))
cat = [re.sub(r"\s+", " ", str(h)).strip() for h in rows[0][6:26]]
per = collections.OrderedDict()
for r in rows[1:]:
    if not r[2] or str(r[2]).strip().upper() == "TOTALE":
        continue
    nome = str(r[2]).strip()
    d = per.setdefault(norm(nome), {"comune": nome, "provincia": (r[3] or "").strip() if isinstance(r[3], str) else "", "regione": r[4] or "", "categorie": collections.Counter()})
    for i, v in enumerate(r[6:26]):
        if isinstance(v, (int, float)) and v:
            d["categorie"][cat[i]] += int(v)
ETICHETTE = {
    "Trasporto Pubblico Strada Linea&Dir": "trasporto pubblico su strada (linea e direzione)",
    "Trasporto Pubblico Strada Prox Fer": "trasporto pubblico su strada (prossimità fermata)",
    "Trasporto Pubblico Rotaia": "trasporto pubblico su rotaia",
    "Trasporto Pubblico Marittimo": "trasporto pubblico marittimo",
    "Trasporto Pubblico Aereopi": "aeroporti",
    "Semafori sonori": "semafori sonori",
    "Centrali Semafori ctrl": "centrali di controllo dei semafori",
    "Comuni SmartCity": "punti di interesse del Comune (smart city)",
    "Università Scuole": "università e scuole",
    "Teatri Eventi": "teatri ed eventi",
    "Attività sportive": "attività sportive",
    "Biblioteche Archivi": "biblioteche e archivi",
    "Musei Parchi": "musei e parchi",
    "Chiese Luoghi di Culto": "chiese e luoghi di culto",
    "Aziende ospedaliere": "aziende ospedaliere",
    "Stabilimenti Balneari": "stabilimenti balneari",
    "Attività Turistiche": "attività turistiche",
    "Attività Commerciali": "attività commerciali",
    "Attività Industriali": "attività industriali",
    "Sezioni UICI": "sezioni UICI",
}
out = []
for k, d in per.items():
    c = {ETICHETTE.get(a, a): n for a, n in d["categorie"].items() if n}
    if not c:
        continue
    out.append({"comune": d["comune"], "totale": sum(c.values()), "categorie": c})
out.sort(key=lambda x: x["comune"].lower())
data = sys.argv[2] if len(sys.argv) > 2 else "2026-11-16"
json.dump({"data": data, "fonte": "Elenco installazioni inviato da SCEN S.r.l. (LETIsmart) il 16 novembre 2026", "comuni": out},
          open("frontend/src/content/letismart-installazioni.json", "w"), ensure_ascii=False, indent=1)
print(len(out), "comuni", sum(x["totale"] for x in out), "radiofari")
