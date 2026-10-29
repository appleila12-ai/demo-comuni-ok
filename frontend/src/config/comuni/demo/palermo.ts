import type { ComuneConfig, PuntoSupporto } from "../types";
import { INPS_SPERIMENTAZIONE } from "../percorso";
import { percorso } from "../percorso";

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
    url: "https://www.asppalermo.org/servizio/ticket-esenzione-per-patologia/",
  },

  daVerificare: true,
  dimostrativo: true,
};

// Fonte passo 2: pagina "Invalidità civile" di ASP Palermo (asppalermo.org), letta il 28/10/2026 (la pagina riporta aggiornamento al 20/08/2024).
const MEDICINA_LEGALE_ASP_PALERMO: PuntoSupporto = {
  icon: "medkit-outline",
  title: "ASP Palermo · Medicina Legale e Fiscale",
  subtitle:
    "Via Mariano Stabile 261 · Solo su appuntamento: tel. 091 7032154 e 091 7034926, martedì e venerdì mattina. La visita la fa una commissione dell'ASP con un medico INPS",
  action: { type: "tel", value: "0917032154" },
};
palermo.percorsoTerritorio = percorso(palermo.puntiSupporto, [0, 1], [MEDICINA_LEGALE_ASP_PALERMO]);

// Passo 1: provincia in sperimentazione INPS (messaggio INPS n. 2600 del 05/09/2025).
palermo.percorsoTerritorio = { ...palermo.percorsoTerritorio, 1: [INPS_SPERIMENTAZIONE] };
