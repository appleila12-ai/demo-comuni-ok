import type { ComuneConfig } from "../types";
import { percorso } from "../percorso";

// Comune di Carrara (MS) — VERSIONE DIMOSTRATIVA.
// Il Comune NON ha aderito a TutelApp: l'app lo segnala ai cittadini con un avviso.
// Dati presi dal sito ufficiale del Comune/ente (settembre 2026), da verificare.
// Orari: pagina "U.O. 8.2.1 Servizio sociale professionale" (aggiornata il 28/07/2026); recapiti: pagina Settore 8 (aggiornata il 13/11/2025). Testo copiato da Ilaria il 22/10/2026.
// Da verificare: email
export const carrara: ComuneConfig = {
  slug: "carrara",
  tipo: "comune",
  nome: "Comune di Carrara",
  nomeBreve: "Carrara",
  delEnte: "del Comune di Carrara",
  soggetto: "Il Comune",
  provincia: "MS",
  regione: "Toscana",

  ente: "Servizi Sociali",
  responsabile: "Settore 8 – Supporto organi istituzionali / Servizi sociali e politiche abitative",
  indirizzo: "Piazza 2 Giugno 1, 54033 Carrara (MS)",
  telefono: "0585 641732",
  email: "",
  pec: "comune.carrara@postecert.it",
  orari: "Lunedì–venerdì 9:00–13:00; martedì e giovedì anche 15:30–17:00",
  sitoWeb: "https://www.comune.carrara.ms.it/it/unita_organizzative/settore-8-supporto-organi-istituzionali-servizi-sociali-e-politiche-abitative",

  logo: null,

  theme: {
    warm: "#8BA2CF",
    warmSoft: "#DDE4F2",
    warmDark: "#2A416E",
    cream: "#F2F4F6",
  },

  puntiSupporto: [
    {
      icon: "people-outline",
      title: "Servizi Sociali – Carrara",
      subtitle: "Settore 8 – Supporto organi istituzionali / Servizi sociali e politiche abitative · Piazza 2 Giugno 1, 54033 Carrara (MS) · Tel. 0585 641732 · Centralino 0585 6411",
      action: { type: "tel", value: "0585641732" },
    },
    {
      icon: "business-outline",
      title: "Zona Distretto Apuane",
      subtitle: "Zona distretto sociosanitaria dell'Azienda USL Toscana Nord Ovest per Carrara e Massa",
      action: { type: "web", value: "https://www.uslnordovest.toscana.it/sedi-territoriali/zona-apuane" },
    },
    {
      icon: "medkit-outline",
      title: "Azienda USL Toscana Nord Ovest",
      subtitle: "Esenzione ticket per patologia e invalidità, prenotazioni e distretti sanitari",
      action: { type: "web", value: "https://www.uslnordovest.toscana.it" },
    },
  ],

  trasporto: "Chiedi ai Servizi Sociali di Carrara (0585 641732) quali servizi di trasporto sociale sono attivi. Puoi rivolgerti anche alle associazioni di volontariato della zona (Croce Rossa, Pubbliche Assistenze, Misericordie).",

  esenzioneTicket: {
    label: "Azienda USL Toscana Nord Ovest · Esenzioni ticket",
    url: "https://www.uslnordovest.toscana.it",
  },

  daVerificare: true,
  dimostrativo: true,
};

// Passo 2 senza voci: la pagina Medicina legale di Carrara non è leggibile (da verificare). Passo 3 senza voci: link solo alla home.
carrara.percorsoTerritorio = percorso(carrara.puntiSupporto, [0, 1]);
