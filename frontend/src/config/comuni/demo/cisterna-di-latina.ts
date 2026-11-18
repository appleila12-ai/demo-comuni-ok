import type { ComuneConfig } from "../types";
import { percorso } from "../percorso";

// Comune di Cisterna di Latina (LT) — VERSIONE DIMOSTRATIVA, SCHEDA SNELLA (19 ottobre 2026).
// Il Comune NON ha aderito a TutelApp: l'app lo segnala ai cittadini con un avviso.
// L'indirizzo del sito del Comune è preso dalla scheda del Comune su tuttitalia.it (collegamento al sito istituzionale): il sito non è stato aperto in questo giro, quindi indirizzo e pagina dei servizi sociali sono da verificare. Il link dell'azienda sanitaria è ripreso dalle schede dei Comuni vicini: da verificare.
// Recapiti Servizi Sociali: Pagina «Welfare e Servizi Sociali» del Comune di Cisterna di Latina (verificata il 13/11/2026).
// Da fare: bonus del Comune, associazioni, sport e tempo libero.
export const cisternaDiLatina: ComuneConfig = {
  slug: "cisterna-di-latina",
  tipo: "comune",
  nome: "Comune di Cisterna di Latina",
  nomeBreve: "Cisterna di Latina",
  delEnte: "del Comune di Cisterna di Latina",
  soggetto: "Il Comune",
  provincia: "LT",
  regione: "Lazio",

  ente: "Servizi Sociali",
  responsabile: "",
  indirizzo: "Corso della Repubblica 186 (ex Palazzo comunale)",
  telefono: "06 96834296",
  email: "puac@comune.cisterna.latina.it",
  pec: "welfare@pec.comune.cisterna.latina.it",
  orari: "Segretariato sociale (PUAC): 06 96834315. Il sito del Comune riporta orari diversi in pagine diverse: chiama il PUAC per l'appuntamento. Orari indicativi, possono cambiare: conferma all'ufficio prima di andare.",
  sitoWeb: "https://www.comune.cisterna.latina.it",

  logo: null,

  theme: {
    warm: "#8FB0CF",
    warmSoft: "#E3ECF5",
    warmDark: "#2E5578",
    cream: "#F3F5F8",
  },

  puntiSupporto: [
    {
      icon: "people-outline",
      title: "Servizi Sociali del Comune",
      subtitle: "Primo ascolto sociale: recapiti e orari sono sul sito del Comune",
      action: { type: "web", value: "https://www.comune.cisterna.latina.it" },
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

// Passi 4 e 5: servizi sociali già in scheda con fonte (lotto 18, 02/11/2026). Passi 1-3 vuoti: nessun recapito verificato.
cisternaDiLatina.percorsoTerritorio = percorso(cisternaDiLatina.puntiSupporto, [0]);
