import type { ComuneConfig } from "../types";
import { percorso } from "../percorso";

// Comune di Novara (NO) — VERSIONE DIMOSTRATIVA, SCHEDA SNELLA (13 ottobre 2026).
// Il Comune NON ha aderito a TutelApp: l'app lo segnala ai cittadini con un avviso.
// Recapiti Sportello sociale verificati su fonte istituzionale il 14/11/2026.
// Da fare: esenzione ticket ASL NO, bonus comunali, associazioni, sport e tempo libero.
export const novara: ComuneConfig = {
  slug: "novara",
  tipo: "comune",
  nome: "Comune di Novara",
  nomeBreve: "Novara",
  delEnte: "del Comune di Novara",
  soggetto: "Il Comune",
  provincia: "NO",
  regione: "Piemonte",

  ente: "Servizi Sociali",
  responsabile: "",
  indirizzo: "Corso Felice Cavallotti 23, 28100 Novara",
  telefono: "0321 3703501",
  email: "sportellosociale@comune.novara.it",
  pec: "",
  orari: "Sportello: lunedì e mercoledì 14:30-16:30; martedì, giovedì e venerdì 09:00-11:00. Accesso al servizio sociale tramite prenotazione.",
  sitoWeb: "https://www.comune.novara.it",

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
      title: "Servizi Sociali del Comune",
      subtitle: "Corso Felice Cavallotti 23 · 0321 3703501 · sportellosociale@comune.novara.it",
      action: { type: "web", value: "https://www.comune.novara.it/amministrazione/sportello-sociale" },
    },
  ],

  trasporto:
    "Chiedi ai Servizi Sociali del Comune quali servizi di trasporto sociale sono attivi. Puoi rivolgerti anche alle associazioni di volontariato della zona (Croce Rossa, Pubbliche Assistenze, Misericordie) e alle associazioni che trovi nella sezione Associazioni.",

  esenzioneTicket: {
    label: "Esenzioni ticket · chiedi alla tua azienda sanitaria",
    url: "https://www.comune.novara.it",
  },

  daVerificare: true,
  dimostrativo: true,
};

// Passi 4 e 5: voci già in scheda con fonte. Passi 1-3 vuoti: nessun recapito verificato (28/10/2026).
novara.percorsoTerritorio = percorso(novara.puntiSupporto, [0]);
