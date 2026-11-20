import type { ComuneConfig } from "../types";
import { INPS_TERZA_FASE } from "../percorso";

// Comune di Conegliano (TV) — VERSIONE DIMOSTRATIVA.
// Il Comune NON ha aderito a TutelApp: l'app lo segnala ai cittadini con un avviso.
// Dati presi dal sito ufficiale del Comune/ente (settembre 2026), da verificare.
// Recapiti dei Servizi Sociali preesistenti non ricontrollati in questo lotto.
// Esenzione ticket ULSS 2: pagina ufficiale aggiornata 28/03/2024, consultata 18/11/2026.
// https://www.aulss2.veneto.it/Richiedere-lesenzione-per-patologia
// Invalidità civile ULSS 2: https://www.aulss2.veneto.it/Richiedere-lesenzione-per-invalidit-civile
// Email ordinaria protocollo@comune.conegliano.tv.it e sede Municipio Piazza Cima 8: sito istituzionale, consultato 19/11/2026.\n// Data di ultimo aggiornamento della pagina non indicata; recapiti verificati sul portale comunale.
// https://pagopa.comune.conegliano.tv.it/it
// Ufficio ATS VEN-07: fonte primaria, avviso comunale DGR 69/2024, consultato 19/11/2026.
// https://www.comune.conegliano.tv.it/myportal/C_C957/api/content/download?id=66a8d225103327008c224481
// Avviso voucher prima infanzia ATS VEN-07 prot. 17017 del 30/03/2026, consultato 19/11/2026:
// https://www.comune.conegliano.tv.it/myportal/C_C957/api/content/download?id=69ca4fcdf00987008b10c9e6
// Conferma recapito Servizi Sociali 0438 413210, email servizisociali@comune.conegliano.tv.it.
// Voucher ATS prima infanzia: domande chiuse il 15/05/2026, NON presentare come aperto.
// Recapiti ATS del 2024 da riconfermare prima di dichiarare completa la scheda.
// Famiglie fragili Regione Veneto: pagina aggiornata 26/02/2025, consultata 19/11/2026.
// https://www.regione.veneto.it/web/sociale/famiglie-fragili
// Solo orientamento, nessun bando 2026 aperto confermato.
// Scheda parziale: bonus regionali, comunali/Ambito e destinatario Scrivi al Comune da verificare.
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

  // ULSS 2, esenzione per invalidità/infortunio sul lavoro: pagina aggiornata 03/02/2026; verifica 19/11/2026.
  // https://www.aulss2.veneto.it/Richiedere-lesenzione-per-invalidit-e-infortunio-sul-lavoro
  puntiSupporto: [
    {
      icon: "people-outline",
      title: "Servizi Sociali – Conegliano",
      subtitle: "5° Settore Servizi alla Persona – Servizio Politiche Sociali · Piazzale Beccaria, 31015 Conegliano (TV) · Tel. 0438 413210 (confermato in avviso comunale 30/03/2026)",
      action: { type: "tel", value: "0438413210" },
    },
    {
      icon: "business-outline",
      title: "Comune di Conegliano · Protocollo",
      subtitle: "Per comunicazioni al Comune: protocollo@comune.conegliano.tv.it · PEC pec@comuneconegliano.legalmail.it · Piazza Giovanni Battista Cima 8, 31015 Conegliano · Tel. 0438 4131",
      action: { type: "web", value: "https://pagopa.comune.conegliano.tv.it/it" },
    },
    {
      icon: "people-outline",
      title: "Ambito Sociale VEN-07 · Conegliano",
      subtitle: "Comune capofila dell'Ambito VEN-07. Per informazioni sui servizi territoriali: ufficionoa@comune.conegliano.tv.it · Tel. 0438 413238 / 413237 / 413215. Recapiti indicati nell'avviso comunale 2024.",
      action: { type: "tel", value: "0438413238" },
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
      subtitle: "Esenzione ticket per patologia e invalidità, prenotazioni e distretti sanitari",
      action: { type: "web", value: "https://www.aulss2.veneto.it/Richiedere-lesenzione-per-invalidit-civile" },
    },
    {
      icon: "medkit-outline",
      title: "ULSS 2 · Esenzione per invalidità da lavoro",
      subtitle: "Informazioni ufficiali per chiedere l'esenzione ticket in caso di invalidità o infortunio sul lavoro. Consulta la procedura e i documenti richiesti dall'ULSS 2.",
      action: { type: "web", value: "https://www.aulss2.veneto.it/Richiedere-lesenzione-per-invalidit-e-infortunio-sul-lavoro" },
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
