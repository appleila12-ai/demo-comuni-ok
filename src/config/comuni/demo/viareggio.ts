import type { ComuneConfig } from "../types";

// Comune di Viareggio (LU) — VERSIONE DIMOSTRATIVA.
// Il Comune NON ha aderito a TutelApp: l'app lo segnala ai cittadini con un avviso.
// Dati presi dal sito ufficiale del Comune/ente (settembre 2026), da verificare.
// Da verificare: indirizzo, telefono, email, orari, responsabile
export const viareggio: ComuneConfig = {
  slug: "viareggio",
  tipo: "comune",
  nome: "Comune di Viareggio",
  nomeBreve: "Viareggio",
  delEnte: "del Comune di Viareggio",
  soggetto: "Il Comune",
  provincia: "LU",
  regione: "Toscana",

  ente: "Servizi Sociali",
  responsabile: "iCARE (società in house del Comune di Viareggio per i servizi sociali) – Area 2 Servizi alla Persona",
  indirizzo: "Viareggio (LU)",
  telefono: "0584 9661",
  email: "comune.viareggio@postacert.toscana.it",
  pec: "comune.viareggio@postacert.toscana.it",
  orari: "Orari: vedi il sito del Comune o telefona",
  sitoWeb: "https://www.comune.viareggio.lu.it/home/amministrazione/uffici/Ufficio-20.html",

  logo: null,

  theme: {
    warm: "#CF8B8E",
    warmSoft: "#F2DDDE",
    warmDark: "#6E2A2D",
    cream: "#F6F2F2",
  },

  puntiSupporto: [
    {
      icon: "people-outline",
      title: "Servizi Sociali – Viareggio",
      subtitle: "iCARE (società in house del Comune di Viareggio per i servizi sociali) – Area 2 Servizi alla Persona · Viareggio (LU) · Tel. 0584 9661",
      action: { type: "tel", value: "05849661" },
    },
    {
      icon: "business-outline",
      title: "iCARE – Servizi Sociali",
      subtitle: "Ente che gestisce per il Comune i servizi sociali (segretariato sociale, assistenza domiciliare, carta dei servizi).",
      action: { type: "web", value: "https://www.icareviareggio.it/servizi-sociali/" },
    },
    {
      icon: "medkit-outline",
      title: "Azienda USL Toscana Nord Ovest",
      subtitle: "Esenzione ticket per patologia e invalidità, prenotazioni e distretti sanitari",
      action: { type: "web", value: "https://www.uslnordovest.toscana.it" },
    },
  ],

  trasporto: "Chiedi ai Servizi Sociali di Viareggio (0584 9661) quali servizi di trasporto sociale sono attivi. Puoi rivolgerti anche alle associazioni di volontariato della zona (Croce Rossa, Pubbliche Assistenze, Misericordie).",

  esenzioneTicket: {
    label: "Azienda USL Toscana Nord Ovest · Esenzioni ticket",
    url: "https://www.uslnordovest.toscana.it",
  },

  daVerificare: true,
  dimostrativo: true,
};
