import type { ComuneConfig } from "../types";
import { INPS_TERZA_FASE } from "../percorso";

// Comune di Conegliano (TV) — VERSIONE DIMOSTRATIVA.
// Il Comune NON ha aderito a TutelApp: l'app lo segnala ai cittadini con un avviso.
// Dati presi dal sito ufficiale del Comune/ente (settembre 2026), da verificare.
// Recapiti dei Servizi Sociali preesistenti non ricontrollati in questo lotto.
// Esenzione ticket ULSS 2: pagina ufficiale aggiornata 28/03/2024, consultata 18/11/2026.
// https://www.aulss2.veneto.it/Richiedere-lesenzione-per-patologia
// Invalidità civile ULSS 2: https://www.aulss2.veneto.it/Richiedere-lesenzione-per-invalidit-civile
// Email ordinaria protocollo@comune.conegliano.tv.it e sede Municipio Piazza Cima 8: sito istituzionale, consultato 18/11/2026.
// https://pagopa.comune.conegliano.tv.it/it
// Ufficio ATS VEN-07: fonte primaria, avviso comunale DGR 69/2024, consultato 19/11/2026.\n// https://www.comune.conegliano.tv.it/myportal/C_C957/api/content/download?id=66a8d225103327008c224481\n// Recapiti ATS storici da riconfermare prima di dichiarare completa la scheda.\n// Scheda parziale: bonus regionali, comunali/Ambito e destinatario Scrivi al Comune da verificare.
export const conegliano: ComuneConfig = {
  slug: "conegliano",
  tipo: "comune",
  nome: "Comune di Conegliano",
  nomeBreve: "Conegliano",
  delEnte: "del Comune di Conegliano",
  soggetto: "Il Comune",
  provincia: "TV",
  regione: "Veneto",

  ente: "Servizi Sociali",
  responsabile: "5° Settore Servizi alla Persona – Servizio Politiche Sociali",
  indirizzo: "Piazzale Beccaria, 31015 Conegliano (TV)",
  telefono: "0438 413210",
  email: "servizisociali@comune.conegliano.tv.it",
  pec: "pec@comuneconegliano.legalmail.it",
  orari: "Lun e Gio 9:00–13:00 e 16:00–17:30; Mar, Mer, Ven 9:00–13:00",
  sitoWeb: "https://www.comune.conegliano.tv.it/amministrazione/uffici/assistenzasociale",

  logo: null,

  theme: {
    warm: "#8BBECF",
    warmSoft: "#DDEDF2",
    warmDark: "#2A5D6E",
    cream: "#F2F5F6",
  },

  puntiSupporto: [
    {
      icon: "people-outline",
      title: "Servizi Sociali – Conegliano",
      subtitle: "5° Settore Servizi alla Persona – Servizio Politiche Sociali · Piazzale Beccaria, 31015 Conegliano (TV) · Tel. 0438 413210",
      action: { type: "tel", value: "0438413210" },
    },
    {
      icon: "people-outline",
      title: "Ambito Sociale VEN-07 · Conegliano",
      subtitle: "Comune capofila dell'Ambito VEN-07. Per informazioni sui servizi territoriali: ufficionoa@comune.conegliano.tv.it · Tel. 0438 413238 / 413237 / 413215. Recapiti indicati nell'avviso comunale 2024.",
      action: { type: "tel", value: "0438413238" },
    },
    {
      icon: "medkit-outline",
      title: "ULSS 2 Marca Trevigiana",
      subtitle: "Esenzione ticket per patologia e invalidità, prenotazioni e distretti sanitari",
      action: { type: "web", value: "https://www.aulss2.veneto.it/Richiedere-lesenzione-per-invalidit-civile" },
    },
  ],

  trasporto: "Chiedi ai Servizi Sociali di Conegliano (0438 413210) quali servizi di trasporto sociale sono attivi. Puoi rivolgerti anche alle associazioni di volontariato della zona (Croce Rossa, Pubbliche Assistenze, Misericordie).",

  esenzioneTicket: {
    label: "ULSS 2 Marca Trevigiana · Esenzioni ticket",
    url: "https://www.aulss2.veneto.it/Richiedere-lesenzione-per-patologia",
  },

  daVerificare: true,
  dimostrativo: true,
};

// Passo 1: provincia nella terza fase della sperimentazione INPS (dal 1° marzo 2026).
conegliano.percorsoTerritorio = { ...conegliano.percorsoTerritorio, 1: [INPS_TERZA_FASE] };
