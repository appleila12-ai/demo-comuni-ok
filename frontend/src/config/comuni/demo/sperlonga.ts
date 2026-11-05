import type { ComuneConfig } from "../types";
import { percorso } from "../percorso";

// Comune di Sperlonga (LT) — VERSIONE DIMOSTRATIVA, SCHEDA SNELLA (5 novembre 2026).
// Il Comune NON ha aderito a TutelApp: l'app lo segnala ai cittadini con un avviso.
// Sito del Comune letto il 04/11/2026. Recapiti dei Servizi Sociali: pagina in modalità anteprima, non inseriti.
// Distretto socio sanitario LT4 (vedi scheda di Fondi). Coordinate: database ISTAT. Link dell'azienda sanitaria da verificare.
// Aggiornamento 05/11/2026 (seconda ricerca): sede, telefoni ed email dalla pagina del Distretto LT4. Orari fuori: fonti discordanti.
export const sperlonga: ComuneConfig = {
  slug: "sperlonga",
  tipo: "comune",
  nome: "Comune di Sperlonga",
  nomeBreve: "Sperlonga",
  delEnte: "del Comune di Sperlonga",
  soggetto: "Il Comune",
  provincia: "LT",
  regione: "Lazio",

  ente: "Servizi Sociali",
  responsabile: "",
  indirizzo: "Via Campo delle Monache 5, 04029 Sperlonga (LT)",
  telefono: "0771 549648",
  email: "politichesociali@comune.sperlonga.lt.it",
  pec: "protocollo@pec.comune.sperlonga.lt.it",
  orari: "",
  sitoWeb: "https://www.comune.sperlonga.lt.it/",

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
      subtitle: "Via Campo delle Monache 5 · Assistente sociale 0771 549648 · Centralino 0771 557801, digita 8. Gli orari sono sul sito del Comune",
      action: { type: "tel", value: "0771549648" },
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
sperlonga.percorsoTerritorio = percorso(sperlonga.puntiSupporto, [0]);
