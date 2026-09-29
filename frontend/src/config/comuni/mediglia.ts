import type { ComuneConfig } from "./types";

// Comune di Mediglia (MI).
// Fonti (29/09/2026): pagina "Servizi Sociali, Casa, Salute" del sito del Comune;
// pagina "Piano di Zona - Distretto Sociale Paullese" del Comune di Peschiera Borromeo.
// DA VERIFICARE con il Comune prima del pilota: sede e sportello del Distretto
// sanitario (ASST Melegnano e della Martesana, Distretto Sud Est Milano) usati
// dalle famiglie di Mediglia, e associazioni del territorio per la disabilità.
export const mediglia: ComuneConfig = {
  slug: "mediglia",
  tipo: "comune",
  nome: "Comune di Mediglia",
  nomeBreve: "Mediglia",
  delEnte: "del Comune di Mediglia",
  soggetto: "Il Comune",
  provincia: "MI",
  regione: "Lombardia",

  ente: "Servizi Sociali, Casa, Salute",
  responsabile: "Responsabile: Irene Pierdominici · Assessora ai Servizi sociali: Elisa Roberta Baeli",
  indirizzo: "Via Risorgimento 5, 20076 Mediglia (MI)",
  telefono: "02 90662042 · 02 90662057",
  email: "servizisociali@comune.mediglia.mi.it",
  pec: "comune.mediglia@pec.regione.lombardia.it",
  orari: "Lun, Mer, Ven 8:30–12:00 · Mar e Gio 8:30–12:00 e 16:00–17:30 · su appuntamento",
  sitoWeb: "https://www.comune.mediglia.mi.it/home/amministrazione/uffici/Ufficio-3.html",

  logo: null,

  theme: {
    warm: "#C3B4D9", // lavanda
    warmSoft: "#ECE6F4",
    warmDark: "#5B4682",
    cream: "#F6F4F1",
  },

  puntiSupporto: [
    {
      icon: "people-outline",
      title: "Segretariato sociale del Comune di Mediglia",
      subtitle:
        "Informazioni su prestazioni e benefici, assistenza domiciliare per anziani e persone con disabilità, pasti a domicilio · Via Risorgimento 5 · Tel. 02 90662042 · servizisociali@comune.mediglia.mi.it · su appuntamento",
      action: { type: "tel", value: "0290662042" },
    },
    {
      icon: "document-text-outline",
      title: "Modulistica dei Servizi Sociali",
      subtitle: "Domande e moduli online del Comune di Mediglia",
      action: { type: "web", value: "https://www.mediglia.sportellocivico.it/ModulisticaServiziSociali.aspx" },
    },
    {
      icon: "git-network-outline",
      title: "Distretto Sociale Paullese – Ufficio di Piano",
      subtitle:
        "Servizi sociali gestiti insieme da Mediglia, Pantigliate, Paullo, Peschiera Borromeo (capofila) e Tribiano · c/o Servizi Sociali di Peschiera Borromeo · Tel. 02 51690251",
      action: { type: "tel", value: "0251690251" },
    },
    {
      icon: "medkit-outline",
      title: "ASST Melegnano e della Martesana – Distretto Sud Est Milano",
      subtitle: "Servizi sanitari del territorio: cure domiciliari (ADI), fragilità e disabilità, valutazione multidimensionale",
      action: { type: "web", value: "https://www.asst-melegnano-martesana.it/distretti-territoriali/distretto-sud-est-milano-5" },
    },
  ],

  trasporto:
    "Chiedi ai Servizi sociali di Mediglia (02 90662042) quali servizi di trasporto sociale sono attivi. In Lombardia puoi rivolgerti anche alla Croce Rossa o alla Pubblica Assistenza della tua zona.",

  esenzioneTicket: {
    label: "ATS Città Metropolitana di Milano · Esenzioni",
    url: "https://www.ats-milano.it",
  },

  daVerificare: true,
};
