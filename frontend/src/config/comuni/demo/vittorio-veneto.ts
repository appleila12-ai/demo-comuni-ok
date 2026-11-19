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

  puntiSupporto: [
    {
      icon: "people-outline",
      title: "Servizi Sociali del Comune",
      subtitle: "Via Giosuè Carducci 28 · Tel. 0438 569305 · Lun, Mar, Gio, Ven 9:00–12:45; Gio 15:00–17:30",
      action: { type: "tel", value: "0438569305" },
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
      icon: "medkit-outline",
      title: "ULSS 2 Marca Trevigiana",
      subtitle: "Esenzione ticket per patologia e invalidità, scelta del medico e servizi sanitari del territorio",
      action: { type: "web", value: "https://www.aulss2.veneto.it/Richiedere-lesenzione-per-invalidit-civile" },
    },
  ],

  trasporto:
    "Chiedi ai Servizi Sociali del Comune quali servizi di trasporto sociale sono attivi. Puoi rivolgerti anche alle associazioni di volontariato della zona (Croce Rossa, Pubbliche Assistenze, Misericordie) e alle associazioni che trovi nella sezione Associazioni.",

  esenzioneTicket: {
    label: "ULSS 2 Marca Trevigiana · Esenzioni ticket",
    url: "https://www.aulss2.veneto.it/Richiedere-lesenzione-per-patologia",
  },

  daVerificare: true,
  dimostrativo: true,
};

// Passo 1: provincia nella terza fase della sperimentazione INPS (dal 1° marzo 2026).
vittorioVeneto.percorsoTerritorio = { ...vittorioVeneto.percorsoTerritorio, 1: [INPS_TERZA_FASE] };
