import type { ComuneConfig } from "../types";

// Comune di Fiumicino (RM) — VERSIONE DIMOSTRATIVA.
// Il Comune NON ha aderito a TutelApp: l'app lo segnala ai cittadini con un avviso.
// Fonti: avvisi pubblici dei Servizi Sociali del Comune (2025-2026, pubblicati sul portale del Comune)
// e sito di ASL Roma 3. Il sito principale del Comune non si è aperto durante la raccolta dei dati.
// Da verificare: orari del Segretariato Sociale e del PUA, email ordinaria dei Servizi Sociali,
// numero di telefono (06 65210 245 è quello scritto nell'avviso sul centro diurno), civico del PUA
// (gli avvisi scrivono 173 e, in uno, 174).
export const fiumicino: ComuneConfig = {
  slug: "fiumicino",
  tipo: "comune",
  nome: "Comune di Fiumicino",
  nomeBreve: "Fiumicino",
  delEnte: "del Comune di Fiumicino",
  soggetto: "Il Comune",
  provincia: "RM",
  regione: "Lazio",

  ente: "Area Welfare e Servizi Sociali",
  responsabile: "Area Welfare e Servizi Sociali · Segretariato Sociale",
  indirizzo: "Piazza Generale C.A. Dalla Chiesa 10 (Segretariato Sociale), 00054 Fiumicino (RM)",
  telefono: "06 65210245",
  email: "",
  pec: "protocollo.generale@pec.comune.fiumicino.rm.it",
  orari: "Consegna domande ai Servizi Sociali: mar e gio 15:00–17:00",
  sitoWeb: "https://www.comune.fiumicino.rm.it",

  logo: null,

  theme: {
    warm: "#8EC3D6",
    warmSoft: "#DCEEF4",
    warmDark: "#245B73",
    cream: "#F2F6F8",
  },

  puntiSupporto: [
    {
      icon: "people-outline",
      title: "Segretariato Sociale – Fiumicino",
      subtitle: "Primo ascolto e moduli per le domande · Piazza Generale C.A. Dalla Chiesa 10, 00054 Fiumicino (RM) · Tel. 06 65210245",
      action: { type: "tel", value: "0665210245" },
    },
    {
      icon: "business-outline",
      title: "PUA – Punto Unico di Accesso (sede di Fiumicino)",
      subtitle: "Accesso integrato ai servizi socio-sanitari · Via Coni Zugna 173, Fiumicino",
      action: { type: "web", value: "https://www.aslroma3.it" },
    },
    {
      icon: "business-outline",
      title: "PUA – Casa della Salute di Palidoro",
      subtitle: "Punto Unico di Accesso per chi abita a Palidoro · Via Aurelia km 30,600",
      action: { type: "web", value: "https://www.aslroma3.it" },
    },
    {
      icon: "heart-outline",
      title: "Sportello Caregiver",
      subtitle: "Registro comunale e Card del Caregiver familiare, necessari per i contributi · Chiedi al Segretariato Sociale",
      action: { type: "tel", value: "0665210245" },
    },
    {
      icon: "medkit-outline",
      title: "ASL Roma 3",
      subtitle: "Esenzione ticket per patologia e invalidità, prenotazioni e distretti sanitari",
      action: { type: "web", value: "https://www.aslroma3.it" },
    },
  ],

  trasporto:
    "Chiedi al Segretariato Sociale di Fiumicino (06 65210245) quali servizi di trasporto sociale sono attivi. Puoi rivolgerti anche alle associazioni di volontariato della zona (Croce Rossa, Pubbliche Assistenze, Misericordie).",

  esenzioneTicket: {
    label: "ASL Roma 3 · Esenzioni ticket",
    url: "https://www.aslroma3.it",
  },

  daVerificare: true,
  dimostrativo: true,
};
