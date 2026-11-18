import type { ComuneConfig } from "../types";
import { INPS_TERZA_FASE } from "../percorso";
import { percorso } from "../percorso";

// Comune di Treviso (TV) — VERSIONE DIMOSTRATIVA.
// Il Comune NON ha aderito a TutelApp: l'app lo segnala ai cittadini con un avviso.
// Dati presi dal sito ufficiale del Comune/ente (settembre 2026), da verificare.
// Da verificare: indirizzo, telefono, email, orari, responsabile
// Fonte regionale ticket/esenzioni: Regione Veneto, aggiornamento 20/05/2026, consultazione archivio #335 (17/11/2026), riuso 18/11/2026.
// https://salute.regione.veneto.it/organizzazione-sssr/attivit%C3%A0--del-servizio-socio-sanitario-veneto/assistenza-distrettuale/visite-ed-esami-ambulatoriali/ticket-ed-esenzioni
// La procedura e lo sportello fisico specifici dell'ULSS locale restano da verificare; scheda PARZIALE.
export const treviso: ComuneConfig = {
  slug: "treviso",
  tipo: "comune",
  nome: "Comune di Treviso",
  nomeBreve: "Treviso",
  delEnte: "del Comune di Treviso",
  soggetto: "Il Comune",
  provincia: "TV",
  regione: "Veneto",

  ente: "Servizi Sociali",
  responsabile: "Servizi Sociali – Comune di Treviso",
  indirizzo: "Viale Vittorio Veneto 27, 31100 Treviso (TV)",
  telefono: "0422 658362",
  email: "sociale@comune.treviso.it",
  pec: "postacertificata@cert.comune.treviso.it",
  orari: "Lun–Ven 9:00–10:00 (contatto telefonico)",
  sitoWeb: "https://www.comune.treviso.it/home/dettaglio/amministrazione-info/servizi-sociali",

  logo: null,

  theme: {
    warm: "#CF8BAA",
    warmSoft: "#F2DDE7",
    warmDark: "#6E2A49",
    cream: "#F6F2F4",
  },

  puntiSupporto: [
    {
      icon: "people-outline",
      title: "Servizi Sociali – Treviso",
      subtitle: "Servizi Sociali – Comune di Treviso · Viale Vittorio Veneto 27, 31100 Treviso (TV) · Tel. 0422 658362",
      action: { type: "tel", value: "0422658362" },
    },
    {
      icon: "business-outline",
      title: "Sportello Famiglia Treviso",
      subtitle: "Portale informativo con servizi sociali, sostegni e contatti per le famiglie del territorio trevigiano",
      action: { type: "web", value: "https://www.sportellofamiglia.tv.it/" },
    },
    {
      icon: "medkit-outline",
      title: "ULSS 2 Marca Trevigiana",
      subtitle: "Esenzione ticket per patologia e invalidità, prenotazioni e distretti sanitari",
      action: { type: "web", value: "https://www.aulss2.veneto.it" },
    },
  ],

  trasporto: "Chiedi ai Servizi Sociali di Treviso (0422 658362) quali servizi di trasporto sociale sono attivi. Puoi rivolgerti anche alle associazioni di volontariato della zona (Croce Rossa, Pubbliche Assistenze, Misericordie).",

  esenzioneTicket: {
    label: "ULSS 2 Marca Trevigiana · Esenzioni ticket",
    url: "https://salute.regione.veneto.it/organizzazione-sssr/attivit%C3%A0--del-servizio-socio-sanitario-veneto/assistenza-distrettuale/visite-ed-esami-ambulatoriali/ticket-ed-esenzioni",
  },

  daVerificare: true,
  dimostrativo: true,
};

// Passi 4 e 5: voci già in scheda con fonte. Passi 1-3 vuoti: nessun recapito verificato (29/10/2026).
treviso.percorsoTerritorio = percorso(treviso.puntiSupporto, [0, 1]);

// Passo 1: provincia nella terza fase della sperimentazione INPS (dal 1° marzo 2026).
treviso.percorsoTerritorio = { ...treviso.percorsoTerritorio, 1: [INPS_TERZA_FASE] };
