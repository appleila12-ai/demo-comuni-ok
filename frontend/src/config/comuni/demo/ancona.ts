import type { ComuneConfig } from "../types";
import { INPS_TERZA_FASE } from "../percorso";
import { percorso } from "../percorso";

// Comune di Ancona (AN) — VERSIONE DIMOSTRATIVA.
// Il Comune NON ha aderito a TutelApp: l'app lo segnala ai cittadini con un avviso.
// Dati presi dal sito ufficiale del Comune/ente (settembre 2026), da verificare.
// Aggiornata il 20 ottobre 2026: 2 misure del Comune in bonus.ts (contributi autismo 2026 e disabilità gravissima 2025, entrambe chiuse), da pagine del sito del Comune.
// Da confermare con l'ente: nuovi avvisi, importi e requisiti.
export const ancona: ComuneConfig = {
  slug: "ancona",
  tipo: "comune",
  nome: "Comune di Ancona",
  nomeBreve: "Ancona",
  delEnte: "del Comune di Ancona",
  soggetto: "Il Comune",
  provincia: "AN",
  regione: "Marche",

  ente: "Servizi Sociali",
  responsabile: "Politiche sociali – Ufficio di Promozione Sociale",
  indirizzo: "Viale della Vittoria 37, 60123 Ancona (AN)",
  telefono: "071 2225136",
  email: "ufficiopromozionesociale@comune.ancona.it",
  pec: "comune.ancona@emarche.it",
  orari: "Lun, Mer, Ven 9:00–13:00; Mar 15:00–17:00; Gio 10:00–16:00",
  sitoWeb: "https://www.comune.ancona.it/it/unita_organizzative/politiche-sociali-uffici-di-promozione-sociale",

  logo: null,

  theme: {
    warm: "#B6CF8B",
    warmSoft: "#EAF2DD",
    warmDark: "#556E2A",
    cream: "#F5F6F2",
  },

  puntiSupporto: [
    {
      icon: "people-outline",
      title: "Servizi Sociali – Ancona",
      subtitle: "Politiche sociali – Ufficio di Promozione Sociale · Viale della Vittoria 37, 60123 Ancona (AN) · Tel. 071 2225136",
      action: { type: "tel", value: "0712225136" },
    },
    {
      icon: "business-outline",
      title: "Ufficio Promozione Sociale – sede Via Ascoli Piceno",
      subtitle: "Seconda sede in Via Ascoli Piceno 10 per accoglienza e informazioni sociali",
      action: { type: "tel", value: "0712225142" },
    },
    {
      icon: "medkit-outline",
      title: "AST Ancona",
      subtitle: "Esenzione ticket per patologia e invalidità, prenotazioni e distretti sanitari",
      action: { type: "web", value: "https://www.ast-ancona.marche.it" },
    },
  ],

  trasporto: "Chiedi ai Servizi Sociali di Ancona (071 2225136) quali servizi di trasporto sociale sono attivi. Puoi rivolgerti anche alle associazioni di volontariato della zona (Croce Rossa, Pubbliche Assistenze, Misericordie).",

  esenzioneTicket: {
    label: "AST Ancona · Esenzioni ticket",
    url: "https://www.astancona.marche.it/it/ast-comunica/notizie/richiesta-esenzioni-per-patologia-nuova-modalita-telematica",
  },

  daVerificare: true,
  dimostrativo: true,
};

// Passi 4 e 5: voci già in scheda con fonte. Passi 1-3 vuoti: nessun recapito verificato (28/10/2026).
ancona.percorsoTerritorio = percorso(ancona.puntiSupporto, [0, 1]);

// Passo 1: provincia nella terza fase della sperimentazione INPS (dal 1° marzo 2026).
ancona.percorsoTerritorio = { ...ancona.percorsoTerritorio, 1: [INPS_TERZA_FASE] };
