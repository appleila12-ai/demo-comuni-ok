import type { ComuneConfig } from "../types";

// Comune di Parma (PR) — VERSIONE DIMOSTRATIVA.
// Il Comune NON ha aderito a TutelApp: l'app lo segnala ai cittadini con un avviso.
// Dati da fonti pubbliche (ottobre 2026), da verificare con l'ente.
// La provincia di Parma NON è tra quelle in sperimentazione della riforma
// (fino al 31/12/2026): l'app lo calcola da sola dalla sigla "PR".
// Contatto per il Progetto di vita: ANffAS Parma (dati dal sito anffasparma.it
// e dal portale caregiver della Regione E-R) — chiedere il consenso ad ANffAS.
export const parma: ComuneConfig = {
  slug: "parma",
  tipo: "comune",
  nome: "Comune di Parma",
  nomeBreve: "Parma",
  delEnte: "del Comune di Parma",
  soggetto: "Il Comune",
  provincia: "PR",
  regione: "Emilia-Romagna",

  ente: "Settore Sociale",
  responsabile: "Struttura Operativa Inclusione Persone con Disabilità",
  indirizzo: "Largo Torello de Strada 11/a, 43121 Parma (PR)",
  telefono: "0521 40521",
  email: "052140521@comune.parma.it",
  orari: "Numero unico 0521 40521. URP: Lun e Gio 8:15–17:30; Mar, Mer, Ven e Sab 8:15–13:30",
  sitoWeb: "https://www.comune.parma.it/it/amministrazione/aree-amministrative/settore-sociale",

  logo: null,

  theme: {
    warm: "#E2C25A",
    warmSoft: "#F7EFCF",
    warmDark: "#3B4A7A",
    cream: "#FAF7EC",
  },

  puntiSupporto: [
    {
      icon: "people-outline",
      title: "Settore Sociale – Comune di Parma",
      subtitle: "Largo Torello de Strada 11/a · Numero unico 0521 40521 · Sportelli sociali nei 4 Poli territoriali",
      action: { type: "tel", value: "052140521" },
    },
    {
      icon: "accessibility-outline",
      title: "ANffAS Parma – Sportello S.A.I.",
      subtitle: "Accoglienza e informazione gratuita per le famiglie · Via Max Casaburi 15 (ingresso Via Jacobs 14) · Tel. 0521 1401959",
      action: { type: "tel", value: "05211401959" },
    },
    {
      icon: "medkit-outline",
      title: "AUSL di Parma",
      subtitle: "Esenzione ticket per patologia e invalidità, prenotazioni e distretti sanitari",
      action: { type: "web", value: "https://www.ausl.pr.it/come_fare/ticket/esenzione-patologia.aspx" },
    },
  ],

  trasporto: "Chiedi al Settore Sociale del Comune di Parma (numero unico 0521 40521) quali servizi di trasporto sociale sono attivi. Puoi rivolgerti anche alle associazioni di volontariato della zona (Croce Rossa, Pubbliche Assistenze).",

  esenzioneTicket: {
    label: "AUSL di Parma · Esenzione per patologia",
    url: "https://www.ausl.pr.it/come_fare/ticket/esenzione-patologia.aspx",
  },

  contattoProgettoVita: {
    nome: "ANffAS Parma ETS-APS",
    descrizione:
      "Associazione di famiglie che segue il Progetto di vita sul territorio di Parma e Piacenza. Può accompagnarti nella preparazione e negli incontri con i servizi.",
    referente: "Segreteria: Lorenza Gastaldo",
    indirizzo: "Via Max Casaburi 15, Parma (ingresso da Via Rudolf Jacobs 14)",
    orari: "Lunedì–venerdì 9:30–12:30",
    telefono: "0521 1401959",
    email: "segreteria@anffasparma.it",
    sportello: {
      nome: "Sportello S.A.I. (Accoglienza e Informazione)",
      descrizione:
        "Informazioni e consulenza gratuite su agevolazioni, documenti e moduli, scuola e lavoro.",
      email: "sportellosai@anffasparma.it",
    },
    sitoWeb: "https://anffasparma.it",
  },
  mostraStatoRiformaInProgetto: true,

  daVerificare: true,
  dimostrativo: true,
};
