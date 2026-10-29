import type { ComuneConfig } from "../types";
import { INPS_SPERIMENTAZIONE } from "../percorso";

// Comune di Camogli (GE) — VERSIONE DIMOSTRATIVA, SCHEDA SNELLA (27 ottobre 2026).
// Il Comune NON ha aderito a TutelApp: l'app lo segnala ai cittadini con un avviso.
// Fonte: pagina "Ufficio Servizi Sociali" del Comune (aggiornata il 18/08/2026), recapiti copiati da Ilaria il 27/10/2026. Altri telefoni pubblicati: 0185 729091, 0185 729051.
// Il Comune fa parte dell'ASL3 Genovese; sito del Comune dedotto dal dominio delle email ufficiali.
// Da fare: bonus del Comune, associazioni, sport e tempo libero.
export const camogli: ComuneConfig = {
  slug: "camogli",
  tipo: "comune",
  nome: "Comune di Camogli",
  nomeBreve: "Camogli",
  delEnte: "del Comune di Camogli",
  soggetto: "Il Comune",
  provincia: "GE",
  regione: "Liguria",

  ente: "Ufficio Servizi Sociali",
  responsabile: "",
  indirizzo: "",
  telefono: "0185 729065",
  email: "servizisociali@comune.camogli.ge.it",
  pec: "comune.camogli@halleypec.it",
  orari: "Lunedì–venerdì 9:00–12:00; il mercoledì accesso libero, gli altri giorni su prenotazione",
  sitoWeb: "https://www.comune.camogli.ge.it",

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
      title: "Ufficio Servizi Sociali – Camogli",
      subtitle: "Telefoni 0185 729065, 0185 729091, 0185 729051 · Mercoledì accesso libero, gli altri giorni su prenotazione",
      action: { type: "tel", value: "0185729065" },
    },
    {
      icon: "medkit-outline",
      title: "ASL3 Genovese",
      subtitle: "Esenzione ticket per patologia e invalidità, scelta del medico e servizi sanitari del territorio",
      action: { type: "web", value: "https://www.asl3.liguria.it" },
    },
  ],

  trasporto:
    "Chiedi ai Servizi Sociali del Comune quali servizi di trasporto sociale sono attivi. Puoi rivolgerti anche alle associazioni di volontariato della zona (Croce Rossa, Pubbliche Assistenze, Misericordie) e alle associazioni che trovi nella sezione Associazioni.",

  esenzioneTicket: {
    label: "ASL3 Genovese · Esenzioni ticket",
    url: "https://www.asl3.liguria.it",
  },

  daVerificare: true,
  dimostrativo: true,
};

// Passo 1: provincia in sperimentazione INPS (messaggio INPS n. 2600 del 05/09/2025).
camogli.percorsoTerritorio = { ...camogli.percorsoTerritorio, 1: [INPS_SPERIMENTAZIONE] };
