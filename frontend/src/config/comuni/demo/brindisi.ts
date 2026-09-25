import type { ComuneConfig } from "../types";

// Comune di Brindisi (BR) — VERSIONE DIMOSTRATIVA.
// Il Comune NON ha aderito a TutelApp: l'app lo segnala ai cittadini con un avviso.
// Dati presi dal sito ufficiale del Comune/ente (settembre 2026), da verificare.
// Da verificare: email, orari
export const brindisi: ComuneConfig = {
  slug: "brindisi",
  tipo: "comune",
  nome: "Comune di Brindisi",
  nomeBreve: "Brindisi",
  delEnte: "del Comune di Brindisi",
  soggetto: "Il Comune",
  provincia: "BR",
  regione: "Puglia",

  ente: "Servizi Sociali",
  responsabile: "Settore Servizi alla Persona – Consorzio Sociale ATS BR1",
  indirizzo: "Via Grazia Balsamo 4, 72100 Brindisi (BR)",
  telefono: "0831 229820",
  email: "servizisociali@pec.comune.brindisi.it",
  pec: "servizisociali@pec.comune.brindisi.it",
  orari: "Orari: vedi il sito del Comune o telefona",
  sitoWeb: "https://www.comune.brindisi.it/amministrazione/unita_organizzativa/servizi-alla-persona/",

  logo: null,

  theme: {
    warm: "#CF8BA5",
    warmSoft: "#F2DDE5",
    warmDark: "#6E2A44",
    cream: "#F6F2F4",
  },

  puntiSupporto: [
    {
      icon: "people-outline",
      title: "Servizi Sociali – Brindisi",
      subtitle: "Settore Servizi alla Persona – Consorzio Sociale ATS BR1 · Via Grazia Balsamo 4, 72100 Brindisi (BR) · Tel. 0831 229820",
      action: { type: "tel", value: "0831229820" },
    },
    {
      icon: "business-outline",
      title: "Consorzio Sociale BR1",
      subtitle: "Consorzio dell'Ambito Territoriale Sociale BR1 (Brindisi – San Vito dei Normanni) per il welfare integrato",
      action: { type: "web", value: "https://www.consorziosocialebr1.it/" },
    },
    {
      icon: "medkit-outline",
      title: "ASL Brindisi",
      subtitle: "Esenzione ticket per patologia e invalidità, prenotazioni e distretti sanitari",
      action: { type: "web", value: "https://www.sanita.puglia.it/web/asl-brindisi" },
    },
  ],

  trasporto: "Chiedi ai Servizi Sociali di Brindisi (0831 229820) quali servizi di trasporto sociale sono attivi. Puoi rivolgerti anche alle associazioni di volontariato della zona (Croce Rossa, Pubbliche Assistenze, Misericordie).",

  esenzioneTicket: {
    label: "ASL Brindisi · Esenzioni ticket",
    url: "https://www.sanita.puglia.it/web/asl-brindisi",
  },

  daVerificare: true,
  dimostrativo: true,
};
