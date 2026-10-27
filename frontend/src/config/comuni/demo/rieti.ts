import type { ComuneConfig } from "../types";

// Comune di Rieti (RI) — VERSIONE DIMOSTRATIVA, SCHEDA SNELLA (14 ottobre 2026).
// Il Comune NON ha aderito a TutelApp: l'app lo segnala ai cittadini con un avviso.
// Telefoni: pagina "Assistenza sociale" del Comune (recapiti incollati da Ilaria il 27/10/2026, concordi in due controlli). Orari non inseriti: la pagina li riporta con un riferimento alle regole Covid, da riconfermare. PEC: IndicePA. Il link dell'azienda sanitaria è da verificare.
// Da fare: telefono, email, indirizzo e orari dei Servizi Sociali; bonus del Comune, associazioni, sport e tempo libero.
export const rieti: ComuneConfig = {
  slug: "rieti",
  tipo: "comune",
  nome: "Comune di Rieti",
  nomeBreve: "Rieti",
  delEnte: "del Comune di Rieti",
  soggetto: "Il Comune",
  provincia: "RI",
  regione: "Lazio",

  ente: "Servizi Sociali",
  responsabile: "",
  indirizzo: "",
  telefono: "0746 287874",
  email: "",
  pec: "protocollo@pec.comune.rieti.it",
  orari: "",
  sitoWeb: "https://www.comune.rieti.it",

  logo: null,

  theme: {
    warm: "#E6A07C",
    warmSoft: "#F8E4D8",
    warmDark: "#9A4A25",
    cream: "#F8F3EC",
  },

  puntiSupporto: [
    {
      icon: "people-outline",
      title: "Assistenza sociale – Rieti",
      subtitle: "Area adulti 0746 287874 · Area minori 0746 287881 / 0746 489990 · Chiarimenti 0746 287868 · Gli orari si chiedono per telefono",
      action: { type: "tel", value: "0746287874" },
    },
    {
      icon: "medkit-outline",
      title: "ASL Rieti",
      subtitle: "Esenzione ticket per patologia e invalidità, scelta del medico e servizi sanitari del territorio",
      action: { type: "web", value: "https://www.asl.rieti.it" },
    },
  ],

  trasporto:
    "Chiedi ai Servizi Sociali del Comune quali servizi di trasporto sociale sono attivi. Puoi rivolgerti anche alle associazioni di volontariato della zona (Croce Rossa, Pubbliche Assistenze, Misericordie) e alle associazioni che trovi nella sezione Associazioni.",

  esenzioneTicket: {
    label: "ASL Rieti · Esenzioni ticket",
    url: "https://www.asl.rieti.it",
  },

  daVerificare: true,
  dimostrativo: true,
};
