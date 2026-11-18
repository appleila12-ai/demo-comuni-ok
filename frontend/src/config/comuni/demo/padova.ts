import type { ComuneConfig } from "../types";
import { percorso } from "../percorso";

// Comune di Padova (PD) — VERSIONE DIMOSTRATIVA, SCHEDA SNELLA (13 ottobre 2026).
// Il Comune NON ha aderito a TutelApp: l'app lo segnala ai cittadini con un avviso.
// Sono verificati solo il sito del Comune e il sito dell'azienda sanitaria. Home del sito del Comune, controllata il 13 ottobre 2026; la pagina dei servizi sociali va cercata e confermata.
// 16 ottobre 2026: indirizzo e telefono del Settore Servizi Sociali letti sulla scheda del Comune (aggiornata il 13/02/2026). Email non leggibile, PEC e orari del Settore non indicati.
// 18/11/2026: link ticket sostituito con pagina istituzionale Regione Veneto, aggiornata 20/05/2026.
// Fonte: https://salute.regione.veneto.it/organizzazione-sssr/attivit%C3%A0--del-servizio-socio-sanitario-veneto/assistenza-distrettuale/visite-ed-esami-ambulatoriali/ticket-ed-esenzioni
// Sportello ULSS 6 online: https://www.aulss6.veneto.it/index.cfm?action=mys.apridoc&iddoc=5659
// 18/11/2026: CST 1 e 3 da pagine Comune aggiornate 19/02/2026; CST 4 pagina Comune senza data di aggiornamento rilevata.
// Fonti CST: https://padovaper.comune.padova.it/servizi/assistenza-e-protezione/centro-servizi-territoriali-cst-1-centro-del-comune-di-padova
// https://padovaper.comune.padova.it/servizi/assistenza-e-protezione/centro-servizi-territoriali-cst-3-est-del-comune-di-padova
// https://padovaper.comune.padova.it/servizi/assistenza-e-protezione/centro-servizi-territoriali-cst-4-sud-est-del-comune-di-padova
// 18/11/2026: CST 2 (pagina aggiornata 19/02/2026), CST 5 (data aggiornamento non indicata nella lettura), CST 6 (19/02/2026), tutti da Comune di Padova.
// Fonti: https://padovaper.comune.padova.it/servizi/assistenza-e-protezione/centro-servizi-territoriali-cst-2-nord-del-comune-di-padova
// https://padovaper.comune.padova.it/servizi/assistenza-e-protezione/centro-servizi-territoriali-cst-5-sud-ovest-del-comune-di-padova
// https://padovaper.comune.padova.it/servizi/assistenza-e-protezione/centro-servizi-territoriali-cst-6-ovest-del-comune-di-padova
// Da fare: email/PEC generiche e orari del Settore; bonus regionali e comunali/Ambito, destinatario, associazioni e verifica avviso UI.
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
      icon: "people-outline",
      title: "CST 1 Centro · Padova",
      subtitle: "Sede temporanea: Via Boccaccio 80 · 049 8205982 · su appuntamento",
      action: { type: "web", value: "https://padovaper.comune.padova.it/servizi/assistenza-e-protezione/centro-servizi-territoriali-cst-1-centro-del-comune-di-padova" },
    },
    {
      icon: "people-outline",
      title: "CST 3 Est · Padova",
      subtitle: "Via Boccaccio 80 · 049 8204223 · su appuntamento",
      action: { type: "web", value: "https://padovaper.comune.padova.it/servizi/assistenza-e-protezione/centro-servizi-territoriali-cst-3-est-del-comune-di-padova" },
    },
    {
      icon: "people-outline",
      title: "CST 4 Sud Est · Padova",
      subtitle: "Via Piovese 74, ingresso Via Vecchia 3/d · 049 8205061 · su appuntamento",
      action: { type: "web", value: "https://padovaper.comune.padova.it/servizi/assistenza-e-protezione/centro-servizi-territoriali-cst-4-sud-est-del-comune-di-padova" },
    },
    {
      icon: "people-outline",
      title: "CST 2 Nord · Padova",
      subtitle: "Viale dell'Arcella 23 · 049 8206720 · su appuntamento",
      action: { type: "web", value: "https://padovaper.comune.padova.it/servizi/assistenza-e-protezione/centro-servizi-territoriali-cst-2-nord-del-comune-di-padova" },
    },
    {
      icon: "people-outline",
      title: "CST 5 Sud Ovest · Padova",
      subtitle: "Sede temporanea: Via Boccaccio 80 · 049 8205982 · su appuntamento",
      action: { type: "web", value: "https://padovaper.comune.padova.it/servizi/assistenza-e-protezione/centro-servizi-territoriali-cst-5-sud-ovest-del-comune-di-padova" },
    },
    {
      icon: "people-outline",
      title: "CST 6 Ovest · Padova",
      subtitle: "Via Dal Piaz 3 · 049 8205064 · su appuntamento",
      action: { type: "web", value: "https://padovaper.comune.padova.it/servizi/assistenza-e-protezione/centro-servizi-territoriali-cst-6-ovest-del-comune-di-padova" },
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
