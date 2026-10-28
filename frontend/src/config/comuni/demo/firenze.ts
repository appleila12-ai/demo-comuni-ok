import type { ComuneConfig } from "../types";
import { percorso } from "../percorso";

// Comune di Firenze (FI) — VERSIONE DIMOSTRATIVA (completata il 14 ottobre 2026).
// Il Comune NON ha aderito a TutelApp: l'app lo segnala ai cittadini con un avviso.
// Fonte: pagina del Comune "Segretariato sociale" (aggiornata l'08/07/2025, controllata il 14/10/2026): numero verde, email e orari.
// La pagina non indica un indirizzo dello sportello. Non verificati: Azienda USL Toscana Centro (solo il sito).
// Da fare: sedi dei servizi sociali per Quartiere, bonus del Comune, associazioni, sport e tempo libero.
export const firenze: ComuneConfig = {
  slug: "firenze",
  tipo: "comune",
  nome: "Comune di Firenze",
  nomeBreve: "Firenze",
  delEnte: "del Comune di Firenze",
  soggetto: "Il Comune",
  provincia: "FI",
  regione: "Toscana",

  ente: "Servizi Sociali",
  responsabile: "",
  indirizzo: "",
  telefono: "800 50 82 86",
  email: "segretariato.sociale@comune.fi.it",
  pec: "",
  orari: "Lunedì, martedì, mercoledì e venerdì 9:00–13:00, solo tramite numero verde",
  sitoWeb: "https://www.comune.firenze.it/amministrazione/uffici/segretariato-sociale",

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
      title: "Segretariato sociale del Comune di Firenze",
      subtitle: "Primo ascolto e orientamento ai servizi sociali e sociosanitari. Si accede solo con il numero verde 800 50 82 86 (lun, mar, mer, ven 9:00–13:00). Email: segretariato.sociale@comune.fi.it. Contact center del Comune: 055 055",
      action: { type: "tel", value: "800508286" },
    },
    {
      icon: "medkit-outline",
      title: "Azienda USL Toscana Centro",
      subtitle: "Esenzione ticket per patologia e invalidità, scelta del medico e servizi sanitari del territorio",
      action: { type: "web", value: "https://www.uslcentro.toscana.it" },
    },
  ],

  trasporto:
    "Chiedi ai Servizi Sociali del Comune quali servizi di trasporto sociale sono attivi. Puoi rivolgerti anche alle associazioni di volontariato della zona (Croce Rossa, Pubbliche Assistenze, Misericordie) e alle associazioni che trovi nella sezione Associazioni.",

  esenzioneTicket: {
    label: "Azienda USL Toscana Centro · Esenzioni ticket",
    url: "https://www.uslcentro.toscana.it",
  },

  daVerificare: true,
  dimostrativo: true,
};

// Passi 4 e 5: voci già in scheda con fonte. Passo 2 senza voci: la pagina della Medicina legale non è leggibile o non è stata verificata (28/10/2026); chiesta conferma all'azienda sanitaria.
firenze.percorsoTerritorio = percorso(firenze.puntiSupporto, [0]);
