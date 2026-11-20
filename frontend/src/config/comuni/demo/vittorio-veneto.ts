import type { ComuneConfig } from "../types";
import { INPS_TERZA_FASE } from "../percorso";

// Comune di Vittorio Veneto (TV) — VERSIONE DIMOSTRATIVA, SCHEDA SNELLA (20 ottobre 2026).
// Il Comune NON ha aderito a TutelApp: l'app lo segnala ai cittadini con un avviso.
// Fonti ufficiali consultate il 18/11/2026: ufficio Servizi Sociali e Assistenziali, aggiornato 10/11/2023.
// https://www.comune.vittorio-veneto.tv.it/home/amministrazione/uffici/Ufficio-26.html
// Esenzione ticket per patologia ULSS 2, aggiornamento 28/03/2024.
// https://www.aulss2.veneto.it/Richiedere-lesenzione-per-patologia
// Esenzione per invalidità civile ULSS 2: https://www.aulss2.veneto.it/Richiedere-lesenzione-per-invalidit-civile
// Bonus acqua Piave Servizi 2026: pubblicazione 27/10/2026, aggiornamento 28/10/2026, verificato 19/11/2026.
// https://www.comune.vittorio-veneto.tv.it/notizie/bonusacqua.html
// Contributo rette prima infanzia 2026: pagina comunale aggiornata 20/10/2026, bando protocollato 19/10/2026; verificato 19/11/2026.
// https://www.comune.vittorio-veneto.tv.it/home/info/Asilo-nido/contributo2026.html
// https://www.comune.vittorio-veneto.tv.it/dam/jcr%3Ac6fb6b43-2b83-424d-afb9-206c17e6809c/AVVISO%20PUBBLICO%20CONTR%20NIDI.pdf
// Famiglie fragili Regione Veneto: pagina aggiornata 26/02/2025, consultata 19/11/2026.
// https://www.regione.veneto.it/web/sociale/famiglie-fragili
// Solo orientamento, nessun bando 2026 aperto confermato.
// Mini alloggi ERP anziani autosufficienti 65+: pagina comunale aggiornata 06/11/2026, consultata 19/11/2026.
// https://www.comune.vittorio-veneto.tv.it/home/vivere/Servizi-Sociali/Case-popolari---E.R.P..html
// Trasporto scolastico studenti con disabilità: pagina comunale aggiornata 20/10/2026, verificata 20/11/2026.
// https://www.comune.vittorio-veneto.tv.it/home/vivere/Scuola/contributi.html
// Scheda parziale: altri bonus regionali, comunali/Ambito e destinatario Scrivi al Comune da verificare; avviso UI da controllare.
export const vittorioVeneto: ComuneConfig = {
  slug: "vittorio-veneto",
  tipo: "comune",
  nome: "Comune di Vittorio Veneto",
  nomeBreve: "Vittorio Veneto",
  delEnte: "del Comune di Vittorio Veneto",
  soggetto: "Il Comune",
  provincia: "TV",
  regione: "Veneto",

  ente: "Servizi Sociali",
  responsabile: "Servizi Sociali e Assistenziali",
  indirizzo: "Via Giosuè Carducci 28, 31029 Vittorio Veneto (TV)",
  telefono: "0438 569305",
  email: "sociale@comune.vittorio-veneto.tv.it",
  pec: "pec.comune.vittorioveneto.tv@pecveneto.it",
  orari: "Lun, Mar, Gio e Ven 9:00–12:45; Gio anche 15:00–17:30",
  sitoWeb: "https://www.comune.vittorio-veneto.tv.it/home/amministrazione/uffici/Ufficio-26.html",

  logo: null,

  theme: {
    warm: "#CF8BB3",
    warmSoft: "#F2DDE9",
    warmDark: "#6E2A52",
    cream: "#F6F2F5",
  },

  // Carta Dedicata a te 2026–2027: pagina comunale aggiornata 03/11/2026, verificata 20/11/2026.
  // https://www.comune.vittorio-veneto.tv.it/home/vivere/Servizi-Sociali/Contributi--assegni-e-sussidi-economici/Carta-acquisti-dedicata-a-te.html
  // Bonus SAVNO 2026: pubblicato 23/09/2026, domande scadute 15/11/2026; verificato 20/11/2026.
  // https://www.comune.vittorio-veneto.tv.it/notizie/savno26.html
  // ULSS 2, esenzione per invalidità/infortunio sul lavoro: pagina aggiornata 03/02/2026; verifica 19/11/2026.
  // https://www.aulss2.veneto.it/Richiedere-lesenzione-per-invalidit-e-infortunio-sul-lavoro
  puntiSupporto: [
    {
      icon: "people-outline",
      title: "Servizi Sociali del Comune",
      subtitle: "Via Giosuè Carducci 28 · Tel. 0438 569305 · Lun, Mar, Gio, Ven 9:00–12:45; Gio 15:00–17:30",
      action: { type: "tel", value: "0438569305" },
    },
    {
      icon: "card-outline",
      title: "Carta Dedicata a te 2026–2027",
      subtitle: "Sostegno alimentare da 500 euro per anno per nuclei selezionati dall'INPS con ISEE fino a 15.000 euro e almeno tre componenti. Non si presenta domanda: il Comune pubblica la lista dei beneficiari. Per il 2026 il primo utilizzo della carta deve avvenire entro il 16/12/2026. Controlla la pagina ufficiale per le esclusioni e il ritiro.",
      action: { type: "web", value: "https://www.comune.vittorio-veneto.tv.it/home/vivere/Servizi-Sociali/Contributi--assegni-e-sussidi-economici/Carta-acquisti-dedicata-a-te.html" },
    },
    {
      icon: "receipt-outline",
      title: "Bonus rifiuti SAVNO 2026 (chiuso)",
      subtitle: "Riduzione della tariffa rifiuti per utenze domestiche residenti con ISEE tra 9.796 e 15.000 euro. Le domande per il 2026 sono scadute il 15/11/2026. Per eventuali nuove edizioni chiedi ai Servizi Sociali.",
      action: { type: "web", value: "https://www.comune.vittorio-veneto.tv.it/notizie/savno26.html" },
    },
    {
      icon: "bus-outline",
      title: "Trasporto scolastico studenti con disabilità 2026",
      subtitle: "Il Comune ha pubblicato un bando per contributi economici al trasporto scolastico di studenti con disabilità. Domande entro il 30/11/2026. Consulta l’avviso e il modulo sulla pagina ufficiale per requisiti e modalità di richiesta.",
      action: { type: "web", value: "https://www.comune.vittorio-veneto.tv.it/home/vivere/Scuola/contributi.html" },
    },
    {
      icon: "water-outline",
      title: "Bonus acqua Piave Servizi 2026",
      subtitle: "Per famiglie residenti con ISEE fino a 16.000 euro e utenza idrica domestica. Domanda entro il 30/11/2026 ai Servizi Sociali, via Carducci 28 (lun, mar, gio, ven 9:00–12:45; gio 15:00–17:45). Tel. 0438 569318. Servono modulo, ISEE, documento e ultima bolletta.",
      action: { type: "web", value: "https://www.comune.vittorio-veneto.tv.it/notizie/bonusacqua.html" },
    },
    {
      icon: "school-outline",
      title: "Contributo rette prima infanzia 2026",
      subtitle: "Per famiglie residenti con figli di 3–36 mesi iscritti nel 2026 a servizi educativi per l'infanzia. Rimborso parziale delle rette documentate, con esclusione del nido comunale. Domanda entro il 9/12/2026: modulo, ricevute, documento e ISEE a asilonido@comune.vittorio-veneto.tv.it.",
      action: { type: "web", value: "https://www.comune.vittorio-veneto.tv.it/home/info/Asilo-nido/contributo2026.html" },
    },
    {
      icon: "home-outline",
      title: "Mini alloggi comunali per anziani 2026",
      subtitle: "Bando speciale per anziani autosufficienti con almeno 65 anni. Domande dal 9/11 al 10/12/2026, solo su appuntamento con l'Ufficio Servizi Sociali: 0438 569319 (lun–ven 9:00–13:00, gio anche 15:00–17:00). Per informazioni: ufficiocasa@comune.vittorio-veneto.tv.it. Verifica nel bando tutti i requisiti.",
      action: { type: "web", value: "https://www.comune.vittorio-veneto.tv.it/home/vivere/Servizi-Sociali/Case-popolari---E.R.P..html" },
    },
    {
      icon: "people-outline",
      title: "Veneto · Sostegni per famiglie fragili",
      subtitle: "La Regione prevede interventi per famiglie con minori orfani, un solo genitore in difficoltà economica, oppure almeno quattro figli o parti trigemellari. Chiedi ai Servizi Sociali se sono aperti avvisi nel tuo Ambito: la pagina regionale non conferma un bando 2026 aperto.",
      action: { type: "web", value: "https://www.regione.veneto.it/web/sociale/famiglie-fragili" },
    },
    {
      icon: "people-outline",
      title: "Ambito VEN-07 · Voucher prima infanzia 2026 (chiuso)",
      subtitle: "Il bando 2026 dell’Ambito VEN-07 prevedeva un contributo per servizi per la prima infanzia. Le domande si sono chiuse il 15 maggio 2026: non è possibile presentare una nuova domanda per questa edizione. Per eventuali nuove aperture contatta i Servizi Sociali del Comune.",
      action: { type: "web", value: "https://www.comune.conegliano.tv.it/myportal/C_C957/api/content/download?id=69ca4fcdf00987008b10c9e6" },
    },
    {
      icon: "medkit-outline",
      title: "ULSS 2 Marca Trevigiana",
      subtitle: "Esenzione ticket per patologia e invalidità, scelta del medico e servizi sanitari del territorio",
      action: { type: "web", value: "https://www.aulss2.veneto.it/Richiedere-lesenzione-per-invalidit-civile" },
    },
    {
      icon: "medkit-outline",
      title: "ULSS 2 · Esenzione per invalidità da lavoro",
      subtitle: "Informazioni ufficiali per chiedere l'esenzione ticket in caso di invalidità o infortunio sul lavoro. Consulta la procedura e i documenti richiesti dall'ULSS 2.",
      action: { type: "web", value: "https://www.aulss2.veneto.it/Richiedere-lesenzione-per-invalidit-e-infortunio-sul-lavoro" },
    },
  ],

  trasporto:
    "Per sapere se e come utilizzare il trasporto sociale, contatta i Servizi Sociali e Assistenziali: 0438 569311 / 0438 569318, sociale@comune.vittorio-veneto.tv.it. Il Comune ha pubblicato il 22/09/2026 un avviso per individuare un ente gestore (https://www.comune.vittorio-veneto.tv.it/notizie/trasportosociale.html), ma l’avviso non conferma che il servizio sia già attivo né le modalità di accesso per i cittadini.",

  esenzioneTicket: {
    label: "ULSS 2 Marca Trevigiana · Esenzioni ticket",
    url: "https://www.aulss2.veneto.it/Richiedere-lesenzione-per-patologia",
  },

  daVerificare: true,
  dimostrativo: true,
};

// Passo 1: provincia nella terza fase della sperimentazione INPS (dal 1° marzo 2026).
vittorioVeneto.percorsoTerritorio = { ...vittorioVeneto.percorsoTerritorio, 1: [INPS_TERZA_FASE] };
