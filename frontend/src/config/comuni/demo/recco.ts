import type { ComuneConfig } from "../types";

// Comune di Recco (GE) — VERSIONE DIMOSTRATIVA, SCHEDA SNELLA (27 ottobre 2026).
// Il Comune NON ha aderito a TutelApp: l'app lo segnala ai cittadini con un avviso.
// Fonte: pagina "Ufficio Assistenza" del Comune (orario dal 23/06/2025), recapiti copiati da Ilaria il 27/10/2026. L'unica email della pagina è personale: non pubblicata. Nessun destinatario per la mail "Scrivi al tuo Comune" (PEC da trovare).
// Il Comune fa parte dell'ASL3 Genovese; sito del Comune dedotto dal dominio delle email ufficiali.
// Da fare: bonus del Comune, associazioni, sport e tempo libero.
export const recco: ComuneConfig = {
  slug: "recco",
  tipo: "comune",
  nome: "Comune di Recco",
  nomeBreve: "Recco",
  delEnte: "del Comune di Recco",
  soggetto: "Il Comune",
  provincia: "GE",
  regione: "Liguria",

  ente: "Ufficio Assistenza",
  responsabile: "",
  indirizzo: "",
  telefono: "0185 7291209",
  email: "",
  pec: "protocollo@pec.comune.recco.ge.it",
  orari: "Giovedì 9:00–12:00, su prenotazione",
  sitoWeb: "https://www.comune.recco.ge.it",

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
      title: "Ufficio Assistenza – Recco",
      subtitle: "Telefono 0185 7291209 · Giovedì 9:00–12:00, su prenotazione",
      action: { type: "tel", value: "01857291209" },
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
