import type { ComuneConfig } from "../types";

// Comune di Rapallo (GE) — VERSIONE DIMOSTRATIVA.
// Il Comune NON ha aderito a TutelApp: l'app lo segnala ai cittadini con un avviso.
// Dati presi dal sito ufficiale del Comune/ente (settembre 2026), da verificare.
// Da verificare: asl
export const rapallo: ComuneConfig = {
  slug: "rapallo",
  tipo: "comune",
  nome: "Comune di Rapallo",
  nomeBreve: "Rapallo",
  delEnte: "del Comune di Rapallo",
  soggetto: "Il Comune",
  provincia: "GE",
  regione: "Liguria",

  ente: "Servizi Sociali",
  responsabile: "Ambito Territoriale Sociale n. 53 (Rapallo e Zoagli)",
  indirizzo: "Piazza Molfino 10, 16035 Rapallo (GE)",
  telefono: "0185 680402",
  email: "ambitosociale@comune.rapallo.ge.it",
  pec: "protocollo@pec.comune.rapallo.ge.it",
  orari: "Lun–Ven 9:00–12:00 (su appuntamento)",
  sitoWeb: "https://comune.rapallo.ge.it/area_letturaStruttura/6172/pagsistema.html",

  logo: null,

  theme: {
    warm: "#CF8BC1",
    warmSoft: "#F2DDEE",
    warmDark: "#6E2A60",
    cream: "#F6F2F6",
  },

  puntiSupporto: [
    {
      icon: "people-outline",
      title: "Servizi Sociali – Rapallo",
      subtitle: "Ambito Territoriale Sociale n. 53 (Rapallo e Zoagli) · Piazza Molfino 10, 16035 Rapallo (GE) · Tel. 0185 680402",
      action: { type: "tel", value: "0185680402" },
    },
    {
      icon: "business-outline",
      title: "Distretto Sociosanitario 14 – Tigullio Occidentale",
      subtitle: "Distretto sociosanitario che integra servizi sociali comunali e servizi sanitari ASL per il Tigullio occidentale",
      action: { type: "web", value: "https://www.comune.rapallo.ge.it/area_letturaStruttura/6218/pagsistema.html/" },
    },
    {
      icon: "medkit-outline",
      title: "ASL 4 Liguria (Chiavarese)",
      subtitle: "Esenzione ticket per patologia e invalidità, prenotazioni e distretti sanitari",
      action: { type: "web", value: "https://www.asl4.liguria.it" },
    },
  ],

  trasporto: "Chiedi ai Servizi Sociali di Rapallo (0185 680402) quali servizi di trasporto sociale sono attivi. Puoi rivolgerti anche alle associazioni di volontariato della zona (Croce Rossa, Pubbliche Assistenze, Misericordie).",

  esenzioneTicket: {
    label: "ASL 4 Liguria (Chiavarese) · Esenzioni ticket",
    url: "https://www.asl4.liguria.it",
  },

  daVerificare: true,
  dimostrativo: true,
};
