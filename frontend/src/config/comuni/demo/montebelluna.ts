import type { ComuneConfig } from "../types";
import { INPS_TERZA_FASE } from "../percorso";

// Comune di Montebelluna (TV) — VERSIONE DIMOSTRATIVA, scheda parziale.
// Servizi Sociali: fonte ufficiale Comune di Montebelluna, orari in vigore dal 02/03/2026,
// https://www.comune.montebelluna.tv.it/c026046/po/mostra_news.php?area=H&id=3625
// Servizio sociale professionale: https://www.comune.montebelluna.tv.it/c026046/zf/index.php/servizi-aggiuntivi/index/index/idtesto/75
// Ticket invalidità civile: ULSS 2, pagina aggiornata il 03/02/2026,
// https://www.aulss2.veneto.it/Richiedere-lesenzione-per-invalidit-civile
// Fonti consultate il 21/11/2026. Restano da verificare bonus comunali/d'Ambito e altri contenuti.
export const montebelluna: ComuneConfig = {
  slug: "montebelluna",
  tipo: "comune",
  nome: "Comune di Montebelluna",
  nomeBreve: "Montebelluna",
  delEnte: "del Comune di Montebelluna",
  soggetto: "Il Comune",
  provincia: "TV",
  regione: "Veneto",

  ente: "Servizi Sociali",
  responsabile: "",
  indirizzo: "Casa Roncato, Largo X Martiri 2",
  telefono: "0423 617589",
  email: "servizisociali@comune.montebelluna.tv.it",
  pec: "",
  orari: "Lunedì, mercoledì e venerdì 8:30–13:00; mercoledì anche 14:30–18:00. Assistenti sociali su appuntamento.",
  sitoWeb: "https://www.comune.montebelluna.tv.it",

  logo: null,

  theme: {
    warm: "#CF8BCF",
    warmSoft: "#F2DDF2",
    warmDark: "#6E2A6E",
    cream: "#F6F2F6",
  },

  puntiSupporto: [
    {
      icon: "people-outline",
      title: "Servizi Sociali del Comune",
      subtitle: "Casa Roncato, Largo X Martiri 2 · 0423 617589 · servizisociali@comune.montebelluna.tv.it",
      action: { type: "web", value: "https://www.comune.montebelluna.tv.it/c026046/zf/index.php/servizi-aggiuntivi/index/index/idtesto/75" },
    },
    {
      icon: "medkit-outline",
      title: "ULSS 2 Marca Trevigiana",
      subtitle: "Esenzione ticket per patologia e invalidità, scelta del medico e servizi sanitari del territorio",
      action: { type: "web", value: "https://www.aulss2.veneto.it" },
    },
  ],

  trasporto:
    "Chiedi ai Servizi Sociali del Comune quali servizi di trasporto sociale sono attivi. Puoi rivolgerti anche alle associazioni di volontariato della zona (Croce Rossa, Pubbliche Assistenze, Misericordie) e alle associazioni che trovi nella sezione Associazioni.",

  esenzioneTicket: {
    label: "ULSS 2 Marca Trevigiana · Esenzioni ticket",
    url: "https://www.aulss2.veneto.it/Richiedere-lesenzione-per-invalidit-civile",
  },

  daVerificare: true,
  dimostrativo: true,
};

// Passo 1: provincia nella terza fase della sperimentazione INPS (dal 1° marzo 2026).
montebelluna.percorsoTerritorio = { ...montebelluna.percorsoTerritorio, 1: [INPS_TERZA_FASE] };
