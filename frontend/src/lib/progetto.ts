// Pilastro 2 — Costruttore di Desideri / Progetto di Vita (Riforma 2027).
// Aree di vita semplici, suggerimenti pronti + testo libero, salvataggio solo
// sul dispositivo e riepilogo PDF da mostrare al Comune / UVM.

import type { IoniconsIconName } from "@react-native-vector-icons/ionicons";

import { comune } from "@/src/config/comune";
import { getPaeseCorrente } from "@/src/lib/paese";
import { topics } from "@/src/theme";
import { storage } from "@/src/utils/storage";

export const PROGETTO_KEY = "tutelapp:progetto";

export type AreaId =
  | "casa"
  | "salute"
  | "relazioni"
  | "lavoro"
  | "tempo"
  | "autonomia";

export type Area = {
  id: AreaId;
  icon: IoniconsIconName;
  title: string;
  hint: string;
  color: { main: string; soft: string; dark: string };
  suggestions: string[];
};

export const AREE: Area[] = [
  {
    id: "casa",
    icon: "home-outline",
    title: "Casa e vita di ogni giorno",
    hint: "Dove e come vorresti vivere.",
    color: topics.percorso,
    suggestions: [
      "Vivere nella mia casa con il giusto sostegno",
      "Avere un aiuto per le faccende quotidiane",
      "Adattare la casa alle mie esigenze",
      "Sperimentare una vita più indipendente",
    ],
  },
  {
    id: "salute",
    icon: "heart-outline",
    title: "Salute e benessere",
    hint: "Le cure e l'attenzione di cui hai bisogno.",
    color: topics.salute,
    suggestions: [
      "Avere un punto di riferimento sanitario unico",
      "Fare fisioterapia o riabilitazione vicino a casa",
      "Ricevere cure a domicilio quando serve",
      "Prendermi cura del mio benessere psicologico",
    ],
  },
  {
    id: "relazioni",
    icon: "people-outline",
    title: "Relazioni e affetti",
    hint: "Le persone che contano per te.",
    color: topics.patronato,
    suggestions: [
      "Passare più tempo con la mia famiglia",
      "Incontrare nuove persone e fare amicizia",
      "Dare sollievo a chi si prende cura di me",
      "Sentirmi parte della mia comunità",
    ],
  },
  {
    id: "lavoro",
    icon: "briefcase-outline",
    title: "Lavoro, scuola e formazione",
    hint: "Cosa vorresti imparare o fare.",
    color: topics.lavoro,
    suggestions: [
      "Trovare o mantenere un lavoro adatto a me",
      "Continuare a studiare o imparare cose nuove",
      "Avere orari e strumenti di lavoro su misura",
      "Scoprire le mie capacità con un tirocinio",
    ],
  },
  {
    id: "tempo",
    icon: "color-palette-outline",
    title: "Tempo libero e comunità",
    hint: "Passioni, sport e vita sociale.",
    color: topics.esenzioni,
    suggestions: [
      "Fare sport o attività fisica",
      "Coltivare una passione (musica, arte, lettura…)",
      "Partecipare a eventi e associazioni del territorio",
      "Andare in vacanza o fare una gita",
    ],
  },
  {
    id: "autonomia",
    icon: "walk-outline",
    title: "Autonomia e spostamenti",
    hint: "Muoverti e gestirti da solo/a.",
    color: topics.invalidita,
    suggestions: [
      "Muovermi in autonomia in città",
      "Avere un trasporto per visite e appuntamenti",
      "Usare ausili e tecnologie che mi aiutano",
      "Gestire da solo/a soldi e pratiche",
    ],
  },
];

export type AreaEntry = { scelte: string[]; libero: string };
export type Progetto = {
  nome: string;
  aree: Record<AreaId, AreaEntry>;
};

export const EMPTY_PROGETTO: Progetto = {
  nome: "",
  aree: {
    casa: { scelte: [], libero: "" },
    salute: { scelte: [], libero: "" },
    relazioni: { scelte: [], libero: "" },
    lavoro: { scelte: [], libero: "" },
    tempo: { scelte: [], libero: "" },
    autonomia: { scelte: [], libero: "" },
  },
};

export async function loadProgetto(): Promise<Progetto> {
  const raw = await storage.getItem<string>(PROGETTO_KEY, "");
  if (!raw) return EMPTY_PROGETTO;
  try {
    const saved = JSON.parse(raw) as Partial<Progetto>;
    return {
      nome: saved.nome ?? "",
      aree: { ...EMPTY_PROGETTO.aree, ...(saved.aree ?? {}) },
    };
  } catch {
    return EMPTY_PROGETTO;
  }
}

export function saveProgetto(p: Progetto) {
  return storage.setItem(PROGETTO_KEY, JSON.stringify(p));
}

/** Voci espresse per un'area: suggerimenti scelti + testo libero (se presente). */
export function areaItems(e: AreaEntry): string[] {
  const libero = e.libero.trim();
  return libero ? [...e.scelte, libero] : e.scelte;
}

export function countProgetto(p: Progetto) {
  let desideri = 0;
  let aree = 0;
  (Object.keys(p.aree) as AreaId[]).forEach((id) => {
    const n = areaItems(p.aree[id]).length;
    if (n > 0) aree += 1;
    desideri += n;
  });
  return { desideri, aree };
}

function escapeHtml(s: string) {
  return s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

export function buildProgettoHtml(p: Progetto): string {
  const oggi = new Date().toLocaleDateString("it-IT", {
    day: "2-digit",
    month: "long",
    year: "numeric",
  });
  const nome = p.nome.trim();
  const paese = getPaeseCorrente();
  const areeHtml = AREE.map((a) => {
    const items = areaItems(p.aree[a.id]);
    if (items.length === 0) return "";
    return `
      <div class="area">
        <div class="area-title" style="color:${a.color.dark}">${escapeHtml(a.title)}</div>
        <ul>${items.map((i) => `<li>${escapeHtml(i)}</li>`).join("")}</ul>
      </div>`;
  }).join("");

  return `<!DOCTYPE html>
<html lang="it">
<head>
<meta charset="utf-8" />
<title>Il mio Progetto di Vita — TutelApp</title>
<style>
  * { box-sizing: border-box; }
  body { font-family: -apple-system, "Helvetica Neue", Arial, sans-serif; color: #332F26; background: #FFFFFF; padding: 40px; margin: 0; }
  .brand { color: #C1602F; font-weight: 800; font-size: 12px; letter-spacing: 1.2px; text-transform: uppercase; }
  h1 { font-family: Georgia, "Times New Roman", serif; font-size: 26px; margin: 8px 0 4px 0; letter-spacing: -0.3px; }
  .meta { color: #79746A; font-size: 12px; margin-bottom: 20px; }
  .intro { background: #F8ECE1; border-left: 4px solid #C1602F; border-radius: 8px; padding: 14px 16px; color: #5A3416; font-size: 13px; line-height: 1.55; margin-bottom: 24px; }
  .area { border: 1px solid #E9E1D2; border-radius: 12px; padding: 16px 18px; margin-bottom: 12px; background: #FFFDF9; }
  .area-title { font-family: Georgia, "Times New Roman", serif; font-size: 16px; font-weight: 700; margin-bottom: 8px; }
  ul { margin: 0; padding-left: 20px; }
  li { font-size: 13px; line-height: 1.55; margin-bottom: 4px; }
  .comune { margin-top: 24px; background: #F5EFE3; border-radius: 12px; padding: 14px 16px; font-size: 12px; line-height: 1.55; color: #4A463C; }
  .disclaimer { margin-top: 20px; padding-top: 12px; border-top: 1px solid #E9E1D2; color: #79746A; font-size: 11px; line-height: 1.5; }
</style>
</head>
<body>
  <div class="brand">TutelApp · Progetto di Vita</div>
  <h1>Il mio Progetto di Vita${nome ? ` — ${escapeHtml(nome)}` : ""}</h1>
  <div class="meta">Desideri e obiettivi raccolti il ${oggi}</div>
  <div class="intro">
    Questo documento raccoglie i miei desideri, le mie aspettative e come vorrei vivere.
    È il punto di partenza per costruire insieme il Progetto di Vita previsto dalla
    Riforma della disabilità (D.Lgs. 62/2024), nel colloquio con l'Unità di Valutazione
    Multidimensionale e con i Servizi Sociali del Comune.
  </div>
  ${areeHtml}
  <div class="comune">
    <b>Da consegnare a:</b> ${escapeHtml(comune.nome)} — ${escapeHtml(comune.ente)}<br/>
    ${escapeHtml(comune.indirizzo)} · Tel. ${escapeHtml(comune.telefono)} · ${escapeHtml(comune.email)}${
      paese ? `<br/><b>Comune di residenza:</b> ${escapeHtml(paese.nome)}` : ""
    }
  </div>
  <div class="disclaimer">
    Documento preparato con TutelApp, strumento informativo gratuito. Non ha valore legale e non
    sostituisce la valutazione dell'équipe UVM: serve a farti arrivare al colloquio con le idee chiare.
  </div>
</body>
</html>`;
}
