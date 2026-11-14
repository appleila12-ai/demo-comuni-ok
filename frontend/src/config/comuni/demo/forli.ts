import type { ComuneConfig } from "../types";
import { INPS_PRIMA_FASE } from "../percorso";
import { percorso } from "../percorso";

// Comune di Forlì (FC) — VERSIONE DIMOSTRATIVA, SCHEDA SNELLA (13 ottobre 2026).
// Il Comune NON ha aderito a TutelApp: l'app lo segnala ai cittadini con un avviso.
// È verificato solo l'indirizzo web indicato in sitoWeb.
// Recapiti Servizi Sociali: pagina «Sportello Sociale» del Comune di Forlì (aggiornata il 20/01/2026), letta il 14/11/2026.
// Da fare: sito dell'azienda sanitaria; bonus del Comune, associazioni, sport e tempo libero.
export const forli: ComuneConfig = {
  slug: "forli",
  tipo: "comune",
  nome: "Comune di Forlì",
  nomeBreve: "Forlì",
  delEnte: "del Comune di Forlì",
  soggetto: "Il Comune",
  provincia: "FC",
  regione: "Emilia-Romagna",

  ente: "Servizi Sociali",
  responsabile: "",
  indirizzo: "Palazzina ex Ramilli, Via Guglielmo Oberdan 11",
  telefono: "0543 712888",
  email: "sportellosociale@comune.forli.fc.it",
  pec: "",
  orari: "Telefono: lunedì, mercoledì e venerdì 8:30–13:30; martedì e giovedì 8:30–18. Ricevimento su appuntamento: lunedì, mercoledì e venerdì 8:30–13:30; martedì 14–18; giovedì 8:30–18. Orari indicativi, possono cambiare: conferma all'ufficio prima di andare.",
  sitoWeb: "https://www.comune.forli.fc.it",

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
      subtitle: "Primo ascolto sociale: recapiti e orari sono sul sito del Comune",
      action: { type: "web", value: "https://www.comune.forli.fc.it" },
    },
  ],

  trasporto:
    "Chiedi ai Servizi Sociali del Comune quali servizi di trasporto sociale sono attivi. Puoi rivolgerti anche alle associazioni di volontariato della zona (Croce Rossa, Pubbliche Assistenze, Misericordie) e alle associazioni che trovi nella sezione Associazioni.",

  esenzioneTicket: {
    label: "Esenzioni ticket · chiedi alla tua azienda sanitaria",
    url: "https://www.comune.forli.fc.it",
  },

  daVerificare: true,
  dimostrativo: true,
};

// Passi 4 e 5: voci già in scheda con fonte. Passi 1-3 vuoti: nessun recapito verificato (28/10/2026).
forli.percorsoTerritorio = percorso(forli.puntiSupporto, [0]);
forli.percorsoTerritorio = { ...forli.percorsoTerritorio, 1: [INPS_PRIMA_FASE] };
