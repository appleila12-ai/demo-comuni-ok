import type { ComuneConfig } from "../types";
import { percorso } from "../percorso";

// Comune di Borgo Val di Taro (PR) — VERSIONE DIMOSTRATIVA, SCHEDA SNELLA (9 novembre 2026).
// Il Comune NON ha aderito a TutelApp: l'app lo segnala ai cittadini con un avviso.
// Segnalato come interessato da chi promuove TutelApp in provincia di Parma (8/11/2026): non è un'adesione.
// Sito del Comune: dominio istituzionale trovato nelle pagine ufficiali (9/11/2026).
// Da fare: telefono, email, indirizzo e orari dei Servizi Sociali; coordinate; bonus del Comune, associazioni, sport e tempo libero.
export const borgoValDiTaro: ComuneConfig = {
  slug: "borgo-val-di-taro",
  tipo: "comune",
  nome: "Comune di Borgo Val di Taro",
  nomeBreve: "Borgo Val di Taro",
  delEnte: "del Comune di Borgo Val di Taro",
  soggetto: "Il Comune",
  provincia: "PR",
  regione: "Emilia-Romagna",

  ente: "Servizi Sociali",
  responsabile: "",
  indirizzo: "",
  telefono: "",
  email: "",
  pec: "",
  orari: "",
  sitoWeb: "https://www.comune.borgo-val-di-taro.pr.it",

  logo: null,

  theme: {
    warm: "#E2C25A",
    warmSoft: "#F7EFCF",
    warmDark: "#3B4A7A",
    cream: "#FAF7EC",
  },

  puntiSupporto: [
    {
      icon: "people-outline",
      title: "Servizi Sociali del Comune",
      subtitle: "Primo ascolto sociale: recapiti e orari sono sul sito del Comune",
      action: { type: "web", value: "https://www.comune.borgo-val-di-taro.pr.it" },
    },
    {
      icon: "medkit-outline",
      title: "AUSL di Parma",
      subtitle: "Esenzione ticket per patologia e invalidità, prenotazioni e distretti sanitari",
      action: { type: "web", value: "https://www.ausl.pr.it/come_fare/ticket/esenzione-patologia.aspx" },
    },
  ],

  trasporto:
    "Chiedi ai Servizi Sociali del Comune quali servizi di trasporto sociale sono attivi. Puoi rivolgerti anche alle associazioni di volontariato della zona (Croce Rossa, Pubbliche Assistenze, Misericordie) e alle associazioni che trovi nella sezione Associazioni.",

  esenzioneTicket: {
    label: "AUSL di Parma · Esenzione per patologia",
    url: "https://www.ausl.pr.it/come_fare/ticket/esenzione-patologia.aspx",
  },

  daVerificare: true,
  dimostrativo: true,
};

// Passi 4 e 5: voci già in scheda con fonte. Passi 1-3 vuoti: nessun recapito verificato (9/11/2026).
borgoValDiTaro.percorsoTerritorio = percorso(borgoValDiTaro.puntiSupporto, [0]);
