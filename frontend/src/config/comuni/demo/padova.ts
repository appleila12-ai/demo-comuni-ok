import type { ComuneConfig } from "../types";
import { percorso } from "../percorso";

// Comune di Padova (PD) — VERSIONE DIMOSTRATIVA, SCHEDA SNELLA (13 ottobre 2026).
// Il Comune NON ha aderito a TutelApp: l'app lo segnala ai cittadini con un avviso.
// Sono verificati solo il sito del Comune e il sito dell'azienda sanitaria. Home del sito del Comune, controllata il 13 ottobre 2026; la pagina dei servizi sociali va cercata e confermata.
// 16 ottobre 2026: indirizzo e telefono del Settore Servizi Sociali letti sulla scheda del Comune (aggiornata il 13/02/2026). Email non leggibile, PEC e orari del Settore non indicati.
// 18/11/2026: link ticket sostituito con pagina istituzionale Regione Veneto, aggiornata 20/05/2026.
// Fonte: https://salute.regione.veneto.it/organizzazione-sssr/attivit%C3%A0--del-servizio-socio-sanitario-veneto/assistenza-distrettuale/visite-ed-esami-ambulatoriali/ticket-ed-esenzioni
// Sportello ULSS 6 online: https://www.aulss6.veneto.it/index.cfm?action=mys.apridoc&iddoc=5659
// Da fare: email, PEC e orari dei Servizi Sociali; bonus regionali e comunali/Ambito, destinatario, associazioni e verifica avviso UI.
export const padova: ComuneConfig = {
  slug: "padova",
  tipo: "comune",
  nome: "Comune di Padova",
  nomeBreve: "Padova",
  delEnte: "del Comune di Padova",
  soggetto: "Il Comune",
  provincia: "PD",
  regione: "Veneto",

  ente: "Servizi Sociali",
  responsabile: "",
  indirizzo: "Via del Carmine 13, Padova",
  telefono: "049 8205933",
  email: "",
  pec: "",
  orari: "",
  sitoWeb: "https://padovaper.comune.padova.it/strutture/ente-pubblico/comune-di-padova-settore-servizi-sociali",

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
      subtitle: "Ufficio informazioni: 049 8205933 · Via del Carmine 13",
      action: { type: "tel", value: "0498205933" },
    },
    {
      icon: "medkit-outline",
      title: "ULSS 6 Euganea",
      subtitle: "Sportello online per richieste amministrative ed esenzioni previste dalla ULSS",
      action: { type: "web", value: "https://www.aulss6.veneto.it/index.cfm?action=mys.apridoc&iddoc=5659" },
    },
  ],

  trasporto:
    "Chiedi ai Servizi Sociali del Comune quali servizi di trasporto sociale sono attivi. Puoi rivolgerti anche alle associazioni di volontariato della zona (Croce Rossa, Pubbliche Assistenze, Misericordie) e alle associazioni che trovi nella sezione Associazioni.",

  esenzioneTicket: {
    label: "ULSS 6 Euganea · Esenzioni ticket",
    url: "https://salute.regione.veneto.it/organizzazione-sssr/attivit%C3%A0--del-servizio-socio-sanitario-veneto/assistenza-distrettuale/visite-ed-esami-ambulatoriali/ticket-ed-esenzioni",
  },

  daVerificare: true,
  dimostrativo: true,
};

// Passi 4 e 5: voci già in scheda con fonte. Passi 1-3 vuoti: nessun recapito verificato (28/10/2026).
padova.percorsoTerritorio = percorso(padova.puntiSupporto, [0]);
