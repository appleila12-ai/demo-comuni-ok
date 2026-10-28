import type { ComuneConfig, PuntoSupporto } from "./types";

// Voci del territorio usate sia in "Punti di supporto" sia nei passi del percorso.
const SEGRETARIATO: PuntoSupporto = {
  icon: "people-outline",
  title: "Segretariato Sociale del Comune",
  subtitle:
    "Servizio informativo del Comune: ti orienta tra servizi e pratiche · Tel. 0187 614454",
  action: { type: "tel", value: "0187614454" },
};

const DISTRETTO_19: PuntoSupporto = {
  icon: "call-outline",
  title: "Distretto Sociosanitario 19 \"Val di Magra\"",
  subtitle:
    "Per progetti di vita indipendente e custodi sociali (su segnalazione del medico di famiglia) · Tel. 0187 614507 / 0187 604933",
  action: { type: "tel", value: "0187614507" },
};

// Fonte: pagina "Invalidità civile" di ASL 5 (asl5.liguria.it), letta il 28/10/2026.
const ASL5_INVALIDITA: PuntoSupporto = {
  icon: "medkit-outline",
  title: "ASL 5 Spezzino · Invalidità civile e handicap",
  subtitle:
    "La visita la fa una commissione dell'ASL, con un medico INPS. La domanda all'INPS si fa online con SPID o con un patronato.",
  action: {
    type: "web",
    value:
      "https://www.asl5.liguria.it/PerilCittadino/Serviziterritoriali/DipartimentodiPrevenzione/INVALIDITACIVILE.aspx",
  },
};

const ASL5_CENTRALINO: PuntoSupporto = {
  icon: "call-outline",
  title: "ASL 5 Spezzino · Centralino",
  subtitle: "Sede: via Fazio 30, La Spezia · Tel. 0187 5331",
  action: { type: "tel", value: "01875331" },
};

const ASL5_ESENZIONE: PuntoSupporto = {
  icon: "document-text-outline",
  title: "ASL 5 Spezzino · Esenzione ticket",
  subtitle: "Dove si chiede l'esenzione ticket per patologia",
  action: {
    type: "web",
    value: "https://www.asl5.liguria.it/PerilCittadino/Prenotazioniticketesenzioni/Esenzioneticket.aspx",
  },
};

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
    SEGRETARIATO,
    DISTRETTO_19,
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

  // Passi di "Come ottenere il riconoscimento" (1 = medico, 2 = valutazione di base,
  // 3 = verbale, 4 = valutazione multidimensionale, 5 = Progetto di Vita).
  // Il passo 1 resta senza voci: nessun recapito verificato.
  percorsoTerritorio: {
    2: [ASL5_INVALIDITA, ASL5_CENTRALINO],
    3: [ASL5_ESENZIONE],
    4: [SEGRETARIATO, DISTRETTO_19],
    5: [DISTRETTO_19, SEGRETARIATO],
  },

  trasporto:
    "Chiedi ai Servizi Sociali del Comune quali servizi di trasporto sociale sono attivi: 0187 614454. Puoi rivolgerti anche alle associazioni di volontariato della zona (Pubbliche Assistenze, Croce Rossa) e alle associazioni che trovi nella sezione Associazioni.",

  esenzioneTicket: {
    label: "ASL 5 Spezzino · Esenzione ticket",
    url: "https://www.asl5.liguria.it/PerilCittadino/Prenotazioniticketesenzioni/Esenzioneticket.aspx",
  },
};
