import type { ComuneConfig } from "../types";

// Comune di Nuoro (NU) — VERSIONE DIMOSTRATIVA, SCHEDA SNELLA (14 ottobre 2026).
// Il Comune NON ha aderito a TutelApp: l'app lo segnala ai cittadini con un avviso.
// Pagina della Segreteria area anziani e disabili (Settore Politiche Sociali) letta il 15 ottobre 2026: sede, due telefoni e PEC. Il link dell'azienda sanitaria è da verificare.
// Da fare: orari, bonus del Comune, associazioni, sport e tempo libero; controllare l'azienda sanitaria.
export const nuoro: ComuneConfig = {
  slug: "nuoro",
  tipo: "comune",
  nome: "Comune di Nuoro",
  nomeBreve: "Nuoro",
  delEnte: "del Comune di Nuoro",
  soggetto: "Il Comune",
  provincia: "NU",
  regione: "Sardegna",

  ente: "Servizi Sociali",
  responsabile: "",
  indirizzo: "Centro Polifunzionale, via Brigata Sassari 20/21, 08100 Nuoro",
  telefono: "0784 216985",
  email: "",
  pec: "servizi.sociali@pec.comune.nuoro.it",
  orari: "Segreteria area anziani e disabili. Secondo numero: 0784 216984. Orari non pubblicati sulla pagina",
  sitoWeb: "https://www.comune.nuoro.it/it/struttura/segreteria-area-anziani-e-disabili",

  logo: null,

  theme: {
    warm: "#E6A07C",
    warmSoft: "#F8E4D8",
    warmDark: "#9A4A25",
    cream: "#F8F3EC",
  },

  puntiSupporto: [
    {
      icon: "people-outline",
      title: "Servizi Sociali del Comune",
      subtitle: "Segreteria area anziani e disabili: recapiti in questa scheda e sul sito del Comune",
      action: { type: "tel", value: "0784216985" },
    },
    {
      icon: "medkit-outline",
      title: "ASL Nuoro",
      subtitle: "Esenzione ticket per patologia e invalidità, scelta del medico e servizi sanitari del territorio",
      action: { type: "web", value: "https://www.asl3nuoro.it" },
    },
  ],

  trasporto:
    "Chiedi ai Servizi Sociali del Comune quali servizi di trasporto sociale sono attivi. Puoi rivolgerti anche alle associazioni di volontariato della zona (Croce Rossa, Pubbliche Assistenze, Misericordie) e alle associazioni che trovi nella sezione Associazioni.",

  esenzioneTicket: {
    label: "ASL Nuoro · Esenzioni ticket",
    url: "https://www.asl3nuoro.it",
  },

  daVerificare: true,
  dimostrativo: true,
};
