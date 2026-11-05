import type { ComuneConfig } from "../types";
import { percorso } from "../percorso";

// Comune di Monte San Biagio (LT) — VERSIONE DIMOSTRATIVA, SCHEDA SNELLA (5 novembre 2026).
// Il Comune NON ha aderito a TutelApp: l'app lo segnala ai cittadini con un avviso.
// Sito, sede, telefono ed email dei Servizi Sociali: sito del Comune letto il 04/11/2026. Orari del 2024: non inseriti.
// Distretto socio sanitario LT4 (vedi scheda di Fondi). Coordinate: database ISTAT. Link dell'azienda sanitaria da verificare.
export const monteSanBiagio: ComuneConfig = {
  slug: "monte-san-biagio",
  tipo: "comune",
  nome: "Comune di Monte San Biagio",
  nomeBreve: "Monte San Biagio",
  delEnte: "del Comune di Monte San Biagio",
  soggetto: "Il Comune",
  provincia: "LT",
  regione: "Lazio",

  ente: "Servizi Sociali",
  responsabile: "",
  indirizzo: "Via Roma 1, Monte San Biagio (LT)",
  telefono: "0771 5689220",
  email: "servizisociali.montesanbiagio@ninfeasociale.it",
  pec: "comune.montesanbiagio@pec.it",
  orari: "",
  sitoWeb: "https://www.comune.montesanbiagio.lt.it/",

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
      subtitle: "Via Roma 1 · Gli orari sono sul sito del Comune: chiama prima di andare",
      action: { type: "tel", value: "07715689220" },
    },
    {
      icon: "business-outline",
      title: "Rete del Sociale · Distretto socio sanitario LT4",
      subtitle: "Portale dove si presentano le domande online con SPID. Distretto LT4: Campodimele, Fondi, Lenola, Monte San Biagio, San Felice Circeo, Sperlonga e Terracina. Il PUA distrettuale ha sportelli a Fondi e a Terracina",
      action: { type: "web", value: "https://fondi.retedelsociale.it" },
    },
    {
      icon: "medkit-outline",
      title: "ASL Latina",
      subtitle: "Esenzione ticket per patologia e invalidità, scelta del medico e servizi sanitari del territorio",
      action: { type: "web", value: "https://www.ausl.latina.it" },
    },
  ],

  trasporto:
    "Chiedi ai Servizi Sociali del Comune quali servizi di trasporto sociale sono attivi. Puoi rivolgerti anche alle associazioni di volontariato della zona (Croce Rossa, Pubbliche Assistenze, Misericordie) e alle associazioni che trovi nella sezione Associazioni.",

  esenzioneTicket: {
    label: "ASL Latina · Esenzioni ticket",
    url: "https://www.ausl.latina.it",
  },

  daVerificare: true,
  dimostrativo: true,
};

// Passi 4 e 5: voce dei Servizi Sociali in scheda. Passi 1-3 vuoti: nessun recapito verificato (05/11/2026).
monteSanBiagio.percorsoTerritorio = percorso(monteSanBiagio.puntiSupporto, [0]);
