import type { ComuneConfig } from "../types";
import { INPS_TERZA_FASE } from "../percorso";
import { percorso } from "../percorso";

// Comune di Collegno (TO) — VERSIONE DIMOSTRATIVA, SCHEDA SNELLA (18 ottobre 2026).
// Il Comune NON ha aderito a TutelApp: l'app lo segnala ai cittadini con un avviso.
// Dominio del Comune verificato il 18/10/2026 (sito non leggibile in automatico). I servizi socio-assistenziali sono gestiti dal CISAP (Consorzio Intercomunale Servizi Alla Persona di Collegno e Grugliasco): la pagina dedicata va cercata e confermata.
// Da fare: telefono, email, indirizzo e orari dei Servizi Sociali; bonus del Comune, associazioni, sport e tempo libero.
export const collegno: ComuneConfig = {
  slug: "collegno",
  tipo: "comune",
  nome: "Comune di Collegno",
  nomeBreve: "Collegno",
  delEnte: "del Comune di Collegno",
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
  sitoWeb: "https://www.comune.collegno.to.it",

  logo: null,

  theme: {
    warm: "#E59866",
    warmSoft: "#F7E3D2",
    warmDark: "#955327",
    cream: "#F8F3ED",
  },

  puntiSupporto: [
    {
      icon: "people-outline",
      title: "Servizi Sociali del Comune",
      subtitle: "Primo ascolto sociale. A Collegno i servizi socio-assistenziali sono gestiti dal CISAP (Collegno-Grugliasco): recapiti sul sito del Comune.",
      action: { type: "web", value: "https://www.comune.collegno.to.it" },
    },
    {
      icon: "medkit-outline",
      title: "ASL TO3",
      subtitle: "Esenzione ticket per patologia e invalidità, scelta del medico e servizi sanitari del territorio",
      action: { type: "web", value: "https://www.aslto3.piemonte.it" },
    },
  ],

  trasporto:
    "Chiedi ai Servizi Sociali del Comune quali servizi di trasporto sociale sono attivi. Puoi rivolgerti anche alle associazioni di volontariato della zona (Croce Rossa, Pubbliche Assistenze, Misericordie) e alle associazioni che trovi nella sezione Associazioni.",

  esenzioneTicket: {
    label: "ASL TO3",
    url: "https://www.aslto3.piemonte.it",
  },

  daVerificare: true,
  dimostrativo: true,
};

// Passi 4 e 5: voci già in scheda con fonte. Passi 1-3 vuoti: nessun recapito verificato (29/10/2026).
collegno.percorsoTerritorio = percorso(collegno.puntiSupporto, [0]);

// Passo 1: provincia nella terza fase della sperimentazione INPS (dal 1° marzo 2026).
collegno.percorsoTerritorio = { ...collegno.percorsoTerritorio, 1: [INPS_TERZA_FASE] };
