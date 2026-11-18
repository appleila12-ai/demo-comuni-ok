import type { ComuneConfig } from "../types";
import { INPS_TERZA_FASE } from "../percorso";
import { percorso } from "../percorso";

// Comune di Treviso (TV) — VERSIONE DIMOSTRATIVA.
// Il Comune NON ha aderito a TutelApp: l'app lo segnala ai cittadini con un avviso.
// Dati presi dal sito ufficiale del Comune/ente (settembre 2026), da verificare.
// Da verificare: indirizzo, telefono, email, orari, responsabile
// Fonte regionale ticket/esenzioni: Regione Veneto, aggiornamento 20/05/2026, consultazione archivio #335 (17/11/2026), riuso 18/11/2026.
// https://salute.regione.veneto.it/organizzazione-sssr/attivit%C3%A0--del-servizio-socio-sanitario-veneto/assistenza-distrettuale/visite-ed-esami-ambulatoriali/ticket-ed-esenzioni
// 18/11/2026: il PDF comunale «Servizio Sociale Professionale», aggiornato 20/05/2025, specifica
// Segretariato Sociale: Viale Vittorio Veneto 27, 0422 658610, sociale@comune.treviso.it, lun–ven 9–11.
// Fonte: https://www.comune.treviso.it/myportal/C_L407/api/content/download?id=682d69c922c6d2008bfb0e9a
// ULSS 2: richiesta esenzione per patologia online con SPID/CIE o presso sportelli distrettuali;
// fonte aggiornata 28/03/2024: https://www.aulss2.veneto.it/Richiedere-lesenzione-per-patologia
// ULSS 2, esenzione invalidità civile: pagina aggiornata 03/02/2026, consultata 18/11/2026.
// https://www.aulss2.veneto.it/Richiedere-lesenzione-per-invalidit-civile
// Richiesta con verbale tramite SPID/CIE oppure sportelli amministrativi distrettuali;
// distinta dalla procedura per patologia e dalle esenzioni per invalidità sul lavoro.
// Sportello amministrativo Treviso verificato su pagina ULSS 2 aggiornata 27/05/2026, consultata 18/11/2026.\n// https://www.aulss2.veneto.it/Sportelli-Amministrativi-di-Distretto-Treviso-Sud
// Scheda PARZIALE: bonus regionali/comunali/Ambito, destinatario Scrivi al Comune, avviso UI.
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
  telefono: "0422 658610",
  email: "sociale@comune.treviso.it",
  pec: "postacertificata@cert.comune.treviso.it",
  orari: "Lun–Ven 9:00–11:00 (Segretariato Sociale, sportello e telefono)",
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
      subtitle: "Servizi Sociali – Comune di Treviso · Viale Vittorio Veneto 27, 31100 Treviso (TV) · Tel. 0422 658610",
      action: { type: "tel", value: "0422658610" },
    },
    {
      icon: "business-outline",
      title: "Sportello Famiglia Treviso",
      subtitle: "Portale informativo con servizi sociali, sostegni e contatti per le famiglie del territorio trevigiano",
      action: { type: "web", value: "https://www.sportellofamiglia.tv.it/" },
    },
    {
      icon: "medkit-outline",
      title: "ULSS 2 · Sportello amministrativo Treviso",
      subtitle: "Borgo Cavalli 42, piano 0 · Tel. 0422 323328 · Lun–Ven 11:00–13:00 solo su prenotazione. Registra esenzioni per patologia e reddito.",
      action: { type: "tel", value: "0422323328" },
    },
    {
      icon: "medkit-outline",
      title: "ULSS 2 · Esenzione per invalidità civile",
      subtitle: "Richiesta con verbale di invalidità civile, online con SPID/CIE oppure agli sportelli distrettuali",
      action: { type: "web", value: "https://www.aulss2.veneto.it/Richiedere-lesenzione-per-invalidit-civile" },
    },
  ],

  trasporto: "Chiedi al Segretariato Sociale di Treviso (0422 658610) quali servizi di trasporto sociale sono attivi. Puoi rivolgerti anche alle associazioni di volontariato della zona (Croce Rossa, Pubbliche Assistenze, Misericordie).",

  esenzioneTicket: {
    label: "ULSS 2 Marca Trevigiana · Esenzioni ticket",
    url: "https://www.aulss2.veneto.it/Richiedere-lesenzione-per-patologia",
  },

  daVerificare: true,
  dimostrativo: true,
};

// Passi 4 e 5: voci già in scheda con fonte. Passi 1-3 vuoti: nessun recapito verificato (29/10/2026).
treviso.percorsoTerritorio = percorso(treviso.puntiSupporto, [0, 1]);

// Passo 1: provincia nella terza fase della sperimentazione INPS (dal 1° marzo 2026).
treviso.percorsoTerritorio = { ...treviso.percorsoTerritorio, 1: [INPS_TERZA_FASE] };
