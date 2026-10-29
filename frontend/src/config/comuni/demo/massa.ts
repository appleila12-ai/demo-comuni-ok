import type { ComuneConfig, PuntoSupporto } from "../types";
import { INPS_TERZA_FASE } from "../percorso";
import { percorso, USL_MEDLEG_MASSA } from "../percorso";

// Comune di Massa (MS) — VERSIONE DIMOSTRATIVA, SCHEDA SNELLA (14 ottobre 2026).
// Il Comune NON ha aderito a TutelApp: l'app lo segnala ai cittadini con un avviso.
// Pagina dei Servizi Sociali del Comune letta il 14 ottobre 2026: sede centrale, centralino 0585 4901 e sei contatti personali (non inseriti). Il link dell'azienda sanitaria è da verificare.
// Da fare: bonus del Comune, associazioni, sport e tempo libero; controllare l'azienda sanitaria.
export const massa: ComuneConfig = {
  slug: "massa",
  tipo: "comune",
  nome: "Comune di Massa",
  nomeBreve: "Massa",
  delEnte: "del Comune di Massa",
  soggetto: "Il Comune",
  provincia: "MS",
  regione: "Toscana",

  ente: "Servizi Sociali",
  responsabile: "",
  indirizzo: "Via Porta Fabbrica 1, 54100 Massa",
  telefono: "0585 4901",
  email: "",
  pec: "",
  orari: "Chiedi al centralino con quale assistente sociale parlare: orari non pubblicati sulla pagina",
  sitoWeb: "https://www.comune.massa.ms.it/unita-organizzativa/servizi-sociali",

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
      subtitle: "Primo ascolto sociale: recapiti e orari in questa scheda e sul sito del Comune",
      action: { type: "tel", value: "05854901" },
    },
    {
      icon: "medkit-outline",
      title: "Azienda USL Toscana Nord Ovest",
      subtitle: "Esenzione ticket per patologia e invalidità, scelta del medico e servizi sanitari del territorio",
      action: { type: "web", value: "https://www.uslnordovest.toscana.it" },
    },
  ],

  trasporto:
    "Chiedi ai Servizi Sociali del Comune quali servizi di trasporto sociale sono attivi. Puoi rivolgerti anche alle associazioni di volontariato della zona (Croce Rossa, Pubbliche Assistenze, Misericordie) e alle associazioni che trovi nella sezione Associazioni.",

  esenzioneTicket: {
    label: "Azienda USL Toscana Nord Ovest · Esenzioni ticket",
    url: "https://www.uslnordovest.toscana.it",
  },

  daVerificare: true,
  dimostrativo: true,
};

// Passo 2: sede di Massa letta il 28/10/2026. Passo 3 senza voci: il link all'azienda sanitaria è solo la home.
const SERVIZI_SOCIALI_PERCORSO: PuntoSupporto = {
  icon: "people-outline",
  title: "Servizi Sociali del Comune di Massa",
  subtitle: "Primo ascolto sociale · Centralino del Comune 0585 4901: chiedi con quale assistente sociale parlare",
  action: { type: "tel", value: "05854901" },
};
massa.percorsoTerritorio = percorso([SERVIZI_SOCIALI_PERCORSO], [0], [USL_MEDLEG_MASSA]);

// Passo 1: provincia nella terza fase della sperimentazione INPS (dal 1° marzo 2026).
massa.percorsoTerritorio = { ...massa.percorsoTerritorio, 1: [INPS_TERZA_FASE] };
