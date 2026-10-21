import type { ComuneConfig } from "./types";

// Comune pilota. Dati già usati nella versione precedente dell'app.
export const sarzana: ComuneConfig = {
  slug: "sarzana",
  tipo: "comune",
  nome: "Comune di Sarzana",
  nomeBreve: "Sarzana",
  delEnte: "del Comune di Sarzana",
  soggetto: "Il Comune",
  provincia: "SP",
  regione: "Liguria",

  ente: "Servizi Sociali e Welfare",
  responsabile: "",
  indirizzo: "Piazza Matteotti 1, 19038 Sarzana (SP) (sede del Comune)",
  telefono: "0187 614456",
  email: "",
  orari: "",
  sitoWeb: "https://www.comune.sarzana.sp.it/servizi-sociali.html",

  logo: null,

  theme: {
    warm: "#E3A94A", // ambra
    warmSoft: "#F7E7C6",
    warmDark: "#A86F1F",
    cream: "#F7F3EA",
  },

  puntiSupporto: [
    {
      icon: "people-outline",
      title: "Segretariato Sociale del Comune",
      subtitle:
        "Servizio informativo del Comune: ti orienta tra servizi e pratiche · Tel. 0187 614454",
      action: { type: "tel", value: "0187614454" },
    },
    {
      icon: "call-outline",
      title: "Distretto Sociosanitario 19 \"Val di Magra\"",
      subtitle:
        "Per progetti di vita indipendente e custodi sociali (su segnalazione del medico di famiglia) · Tel. 0187 614507 / 0187 604933",
      action: { type: "tel", value: "0187614507" },
    },
    {
      icon: "medkit-outline",
      title: "Servizio di Assistenza Domiciliare (SAD)",
      subtitle:
        "Aiuto a casa per cura della persona e vita quotidiana · Si richiede ai Servizi Sociali tramite il Segretariato (Istanza unica + ISEE) · Tel. 0187 614454",
      action: {
        type: "web",
        value:
          "https://www.comune.sarzana.sp.it/servizi/salute-benessere-e-assistenza/assistenza-domiciliare.html",
      },
    },
  ],

  trasporto:
    "Chiedi ai Servizi Sociali del Comune quali servizi di trasporto sociale sono attivi: 0187 614454. Puoi rivolgerti anche alle associazioni di volontariato della zona (Pubbliche Assistenze, Croce Rossa) e alle associazioni che trovi nella sezione Associazioni.",

  esenzioneTicket: {
    label: "ASL 5 Spezzino · Esenzione ticket",
    url: "https://www.asl5.liguria.it/PerilCittadino/Prenotazioniticketesenzioni/Esenzioneticket.aspx",
  },
};
