import type { ComuneConfig } from "../types";

// Comune di Palermo (PA) — VERSIONE DIMOSTRATIVA.
// Il Comune NON ha aderito a TutelApp: l'app lo segnala ai cittadini con un avviso.
// Dati presi da siti ufficiali (Comune di Palermo, ASP Palermo), ottobre 2026.
// Da verificare con l'ente: indirizzo e orari dello sportello dei Servizi Sociali
// (sul sito non li abbiamo trovati: si usano centralino unico e PEC del settore),
// email ordinaria dei Servizi Sociali.
export const palermo: ComuneConfig = {
  slug: "palermo",
  tipo: "comune",
  nome: "Comune di Palermo",
  nomeBreve: "Palermo",
  delEnte: "del Comune di Palermo",
  soggetto: "Il Comune",
  provincia: "PA",
  regione: "Sicilia",

  ente: "Servizi Sociali",
  responsabile: "Area delle Politiche Socio-Sanitarie · Settore Servizi Socio-Assistenziali",
  indirizzo: "Piazza Pretoria 1, 90133 Palermo (PA)",
  telefono: "091 7401111",
  email: "",
  pec: "settoreservizisocioassistenziali@cert.comune.palermo.it",
  orari: "Orari: telefona al centralino o vedi il sito del Comune",
  sitoWeb: "https://www.comune.palermo.it",

  logo: null,

  theme: {
    warm: "#E0A36B",
    warmSoft: "#F8E8D5",
    warmDark: "#8A4B1C",
    cream: "#F9F4EE",
  },

  puntiSupporto: [
    {
      icon: "people-outline",
      title: "Servizi Sociali – Palermo",
      subtitle: "Centralino unico del Comune · Piazza Pretoria 1, 90133 Palermo (PA) · Tel. 091 7401111",
      action: { type: "tel", value: "0917401111" },
    },
    {
      icon: "business-outline",
      title: "Servizi di cittadinanza sociale",
      subtitle: "Scheda del Comune: contributi e supporto per persone in difficoltà, punto di partenza per i servizi sociali",
      action: { type: "web", value: "https://www.comune.palermo.it/servizio/servizi-di-cittadinanza-sociale/" },
    },
    {
      icon: "medkit-outline",
      title: "Disabilità gravissima – ASP Palermo, Distretto 42",
      subtitle: "Via Lancia di Brolo 10/bis, Padiglione Gatto, 2° piano · Tel. 091 7035490 · Mar 9–12 e 15–17, Mer 9–12",
      action: { type: "tel", value: "0917035490" },
    },
    {
      icon: "home-outline",
      title: "PUA Distretto 42 · Cure domiciliari (ADI)",
      subtitle: "Punto Unico di Accesso · Via G. Turrisi Colonna 43 · Tel. 091 7032750",
      action: { type: "tel", value: "0917032750" },
    },
  ],

  trasporto:
    "Per il trasporto sociale chiedi ai Servizi Sociali del Comune di Palermo (centralino 091 7401111). Per i mezzi pubblici AMAT ci sono agevolazioni per le persone con disabilità (vedi la pagina Bonus). Puoi rivolgerti anche alle associazioni di volontariato della zona (Croce Rossa, Pubbliche Assistenze, Misericordie).",

  esenzioneTicket: {
    label: "ASP Palermo · Esenzioni ticket",
    url: "https://www.asppalermo.org",
  },

  daVerificare: true,
  dimostrativo: true,
};
