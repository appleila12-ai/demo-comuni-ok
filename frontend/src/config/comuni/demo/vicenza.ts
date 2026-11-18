import type { ComuneConfig } from "../types";
import { INPS_SPERIMENTAZIONE } from "../percorso";
import { percorso } from "../percorso";

// Comune di Vicenza (VI) — VERSIONE DIMOSTRATIVA, SCHEDA SNELLA (13 ottobre 2026).
// Il Comune NON ha aderito a TutelApp: l'app lo segnala ai cittadini con un avviso.
// 18/11/2026: sede e recapiti della Segreteria Servizi Sociali verificati sul sito comunale.
// Fonte: https://www.comune.vicenza.it/Vivere-il-Comune/Luoghi/Sede-Servizi-Sociali (orari validi dal 01/03/2024).
// CSST Centro Nord e Sud Est: pagine comunali consultate il 18/11/2026 (URL nei puntiSupporto).
// Da fare: altri CSST, bonus regionali e comunali/Ambito, procedura ULSS locale, destinatario Scrivi al Comune, avviso UI, associazioni.
// Fonte regionale ticket/esenzioni: Regione Veneto, aggiornamento 20/05/2026, consultazione archivio #335 (17/11/2026), riuso 18/11/2026.
// https://salute.regione.veneto.it/organizzazione-sssr/attivit%C3%A0--del-servizio-socio-sanitario-veneto/assistenza-distrettuale/visite-ed-esami-ambulatoriali/ticket-ed-esenzioni
// La procedura e lo sportello fisico specifici dell'ULSS locale restano da verificare; scheda PARZIALE.
export const vicenza: ComuneConfig = {
  slug: "vicenza",
  tipo: "comune",
  nome: "Comune di Vicenza",
  nomeBreve: "Vicenza",
  delEnte: "del Comune di Vicenza",
  soggetto: "Il Comune",
  provincia: "VI",
  regione: "Veneto",

  ente: "Servizi Sociali",
  responsabile: "",
  indirizzo: "Palazzo Negrisolo, Contrà Giovanni Busato 19, Vicenza",
  telefono: "0444 222520",
  email: "segreteriadirezioneservizisociali@comune.vicenza.it",
  pec: "vicenza@cert.comune.vicenza.it",
  orari: "Segreteria Servizi Sociali: lun, mer, ven 10:00–12:30; mar e gio 10:00–12:30 e 16:30–18:00",
  sitoWeb: "https://www.comune.vicenza.it/Vivere-il-Comune/Luoghi/Sede-Servizi-Sociali",

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
      subtitle: "Segreteria · Contrà Giovanni Busato 19 · 0444 222520",
      action: { type: "tel", value: "0444222520" },
    },

    {
      icon: "people-outline",
      title: "Centro servizi sociali territoriali Centro Nord",
      subtitle: "Via Antonio Turra 70 · 0444 222940 · ex circoscrizioni 1, 4, 5",
      action: { type: "web", value: "https://www.comune.vicenza.it/Vivere-il-Comune/Luoghi/Centro-servizi-sociali-territoriali-Centro-Nord" },
    },
    {
      icon: "people-outline",
      title: "Centro servizi sociali territoriali Sud Est",
      subtitle: "Via Adolfo Giuriato 72 · 0444 222930 · ex circoscrizioni 2, 3",
      action: { type: "web", value: "https://www.comune.vicenza.it/Vivere-il-Comune/Luoghi/Centro-servizi-sociali-territoriali-Sud-Est/%28has_related_services%29/4" },
    },  ],

  trasporto:
    "Chiedi ai Servizi Sociali del Comune quali servizi di trasporto sociale sono attivi. Puoi rivolgerti anche alle associazioni di volontariato della zona (Croce Rossa, Pubbliche Assistenze, Misericordie) e alle associazioni che trovi nella sezione Associazioni.",

  esenzioneTicket: {
    label: "Esenzioni ticket · chiedi alla tua azienda sanitaria",
    url: "https://salute.regione.veneto.it/organizzazione-sssr/attivit%C3%A0--del-servizio-socio-sanitario-veneto/assistenza-distrettuale/visite-ed-esami-ambulatoriali/ticket-ed-esenzioni",
  },

  daVerificare: true,
  dimostrativo: true,
};

// Passi 4 e 5: voci già in scheda con fonte. Passi 1-3 vuoti: nessun recapito verificato (28/10/2026).
vicenza.percorsoTerritorio = percorso(vicenza.puntiSupporto, [0]);

// Passo 1: provincia in sperimentazione INPS (messaggio INPS n. 2600 del 05/09/2025).
vicenza.percorsoTerritorio = { ...vicenza.percorsoTerritorio, 1: [INPS_SPERIMENTAZIONE] };
