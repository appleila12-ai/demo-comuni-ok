import type { ComuneConfig } from "../types";
import { INPS_TERZA_FASE } from "../percorso";

// Comune di Settimo Torinese (TO) — VERSIONE DIMOSTRATIVA, SCHEDA SNELLA (18 ottobre 2026).
// Il Comune NON ha aderito a TutelApp: l'app lo segnala ai cittadini con un avviso.
// Dominio del Comune verificato il 18/10/2026 (sito non leggibile in automatico): la pagina dei servizi sociali va cercata e confermata.
// Da fare: telefono, email, indirizzo e orari dei Servizi Sociali; bonus del Comune, associazioni, sport e tempo libero.
export const settimoTorinese: ComuneConfig = {
  slug: "settimo-torinese",
  tipo: "comune",
  nome: "Comune di Settimo Torinese",
  nomeBreve: "Settimo Torinese",
  delEnte: "del Comune di Settimo Torinese",
  soggetto: "Il Comune",
  provincia: "TO",
  regione: "Piemonte",

  ente: "Servizi Sociali",
  responsabile: "",
  indirizzo: "",
  telefono: "",
  email: "",
  pec: "",
  orari: "",
  sitoWeb: "https://www.comune.settimo-torinese.to.it",

  logo: null,

  theme: {
    warm: "#D98A8A",
    warmSoft: "#F6E0E0",
    warmDark: "#8F3B3B",
    cream: "#F8F2F0",
  },

  puntiSupporto: [
    {
      icon: "people-outline",
      title: "Servizi Sociali del Comune",
      subtitle: "Primo ascolto sociale: recapiti e orari sono sul sito del Comune",
      action: { type: "web", value: "https://www.comune.settimo-torinese.to.it" },
    },
    {
      icon: "medkit-outline",
      title: "ASL TO4",
      subtitle: "Esenzione ticket per patologia e invalidità, scelta del medico e servizi sanitari del territorio",
      action: { type: "web", value: "https://www.aslto4.piemonte.it" },
    },
  ],

  trasporto:
    "Chiedi ai Servizi Sociali del Comune quali servizi di trasporto sociale sono attivi. Puoi rivolgerti anche alle associazioni di volontariato della zona (Croce Rossa, Pubbliche Assistenze, Misericordie) e alle associazioni che trovi nella sezione Associazioni.",

  esenzioneTicket: {
    label: "ASL TO4",
    url: "https://www.aslto4.piemonte.it",
  },

  daVerificare: true,
  dimostrativo: true,
};

// Passo 1: provincia nella terza fase della sperimentazione INPS (dal 1° marzo 2026).
settimoTorinese.percorsoTerritorio = { ...settimoTorinese.percorsoTerritorio, 1: [INPS_TERZA_FASE] };
