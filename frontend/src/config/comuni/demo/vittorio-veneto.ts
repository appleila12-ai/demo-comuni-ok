import type { ComuneConfig } from "../types";
import { INPS_TERZA_FASE } from "../percorso";

// Comune di Vittorio Veneto (TV) — VERSIONE DIMOSTRATIVA, SCHEDA SNELLA (20 ottobre 2026).
// Il Comune NON ha aderito a TutelApp: l'app lo segnala ai cittadini con un avviso.
// Fonti ufficiali consultate il 18/11/2026: ufficio Servizi Sociali e Assistenziali, aggiornato 10/11/2023.
// https://www.comune.vittorio-veneto.tv.it/home/amministrazione/uffici/Ufficio-26.html
// Esenzione ticket per patologia ULSS 2, aggiornamento 28/03/2024.
// https://www.aulss2.veneto.it/Richiedere-lesenzione-per-patologia
// Esenzione per invalidità civile ULSS 2: https://www.aulss2.veneto.it/Richiedere-lesenzione-per-invalidit-civile
// Scheda parziale: bonus regionali, bonus comunali/Ambito e destinatario Scrivi al Comune da verificare; avviso UI da controllare.
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
