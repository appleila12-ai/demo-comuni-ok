import type { ComuneConfig } from "../types";

// Comune di Genova (GE) — VERSIONE DIMOSTRATIVA (completata il 14 ottobre 2026).
// Il Comune NON ha aderito a TutelApp: l'app lo segnala ai cittadini con un avviso.
// Fonte: pagina del Comune "Servizio di ascolto e orientamento sociale (Segretariato Sociale Professionale)", aggiornata il 20/03/2026 e controllata il 14/10/2026.
// Sono riportati sedi, telefoni, email e orari scritti nella pagina. Non verificati: ASL3 (solo il sito).
// Da fare: bonus del Comune, associazioni, sport e tempo libero.
export const genova: ComuneConfig = {
  slug: "genova",
  tipo: "comune",
  nome: "Comune di Genova",
  nomeBreve: "Genova",
  delEnte: "del Comune di Genova",
  soggetto: "Il Comune",
  provincia: "GE",
  regione: "Liguria",

  ente: "Servizi Sociali",
  responsabile: "",
  indirizzo: "",
  telefono: "010 557111",
  email: "",
  pec: "",
  orari: "Ascolto per telefono: martedì 9:00–12:30 e giovedì 14:00–16:30 (si prenota al telefono). Sportelli senza prenotazione: orari diversi per ogni sede",
  sitoWeb: "https://www.comune.genova.it/tutti-gli-argomenti/questioni-sociali",

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
      title: "Ascolto e orientamento sociale (Segretariato Sociale)",
      subtitle: "Un assistente sociale ascolta persone e famiglie in difficoltà, anche temporanea, ed è gratuito. Si chiama il servizio del proprio Municipio: telefono martedì 9:00–12:30 e giovedì 14:00–16:30, colloqui su prenotazione. Qui sotto trovi i recapiti dei 9 Municipi",
      action: { type: "web", value: "https://www.comune.genova.it/servizi/salute-benessere-e-assistenza/servizio-di-ascolto-e-orientamento-sociale-segretariato" },
    },
    {
      icon: "accessibility-outline",
      title: "Area Disabilità (Comune di Genova)",
      subtitle: "Via di Francia 1, 6° piano (Matitone) · Tel. 010 5577444 · polodisabilita@comune.genova.it",
      action: { type: "tel", value: "0105577444" },
    },
    {
      icon: "people-outline",
      title: "Municipio I Centro Est",
      subtitle: "Via San Giorgio 1, int. 7 · Tel. 010 5574534 · senza prenotazione lun, mer, ven 9:00–11:00 · municipio1servizisociali@comune.genova.it",
      action: { type: "tel", value: "0105574534" },
    },
    {
      icon: "people-outline",
      title: "Municipio II Centro Ovest",
      subtitle: "Via San Pier d'Arena 34, 4° piano · Tel. 010 5578729 · senza prenotazione lun, mer, ven 9:00–11:00 · municipio2servizisociali@comune.genova.it",
      action: { type: "tel", value: "0105578729" },
    },
    {
      icon: "people-outline",
      title: "Municipio III Bassa Valbisagno",
      subtitle: "Piazza Manzoni 1, piano terra · Tel. 010 5579789 · senza prenotazione lun, mer, ven 9:00–11:00 · municipio3servizisociali@comune.genova.it",
      action: { type: "tel", value: "0105579789" },
    },
    {
      icon: "people-outline",
      title: "Municipio IV Media Valbisagno",
      subtitle: "Via Antonio Sertoli 11B · Tel. 010 5574400 · senza prenotazione lun, mer, ven 9:00–11:00 · municipio4servizisociali@comune.genova.it",
      action: { type: "tel", value: "0105574400" },
    },
    {
      icon: "people-outline",
      title: "Municipio V Valpolcevera",
      subtitle: "Passo Torbella 12 · Tel. 010 5575340 · senza prenotazione lun, mer, ven 9:00–11:00 · municipio5servsociali@comune.genova.it",
      action: { type: "tel", value: "0105575340" },
    },
    {
      icon: "people-outline",
      title: "Municipio VI Medio Ponente",
      subtitle: "Via Filippo Emanuele Bottino 9 (ex Manifattura Tabacchi) · Tel. 010 5578231 · senza prenotazione lun, mer, ven 9:00–11:00 · municipio6servizisociali@comune.genova.it",
      action: { type: "tel", value: "0105578231" },
    },
    {
      icon: "people-outline",
      title: "Municipio VII Ponente (Pegli, Prà, Voltri)",
      subtitle: "Pegli: via Teodoro Secondo di Monferrato 3r, tel. 010 6982866 (ven 9:00–11:00). Prà: via Sapello 4r, tel. 010 6970729 (mer 9:00–11:00). Voltri: piazza Gaggero 2, 1° piano, tel. 010 5578865 (lun 9:00–11:00). Email: municipio7servizisociali@comune.genova.it",
      action: { type: "tel", value: "0106982866" },
    },
    {
      icon: "people-outline",
      title: "Municipio VIII Medio Levante",
      subtitle: "Salita Superiore della Noce 39B · Tel. 010 8994400 · senza prenotazione lun, mer, ven 9:00–12:00 · municipio8servizisociali@comune.genova.it",
      action: { type: "tel", value: "0108994400" },
    },
    {
      icon: "people-outline",
      title: "Municipio IX Levante",
      subtitle: "Via Giovanni Maggio 6 · Tel. 010 5574360 · senza prenotazione lun, mer, ven 9:00–11:00 · municipio9servizisociali@comune.genova.it",
      action: { type: "tel", value: "0105574360" },
    },
    {
      icon: "medkit-outline",
      title: "ASL3 Genovese",
      subtitle: "Esenzione ticket per patologia e invalidità, scelta del medico e servizi sanitari del territorio",
      action: { type: "web", value: "https://www.asl3.liguria.it" },
    },
  ],

  trasporto:
    "Chiedi ai Servizi Sociali del Comune quali servizi di trasporto sociale sono attivi. Puoi rivolgerti anche alle associazioni di volontariato della zona (Croce Rossa, Pubbliche Assistenze, Misericordie) e alle associazioni che trovi nella sezione Associazioni.",

  esenzioneTicket: {
    label: "ASL3 Genovese · Esenzioni ticket",
    url: "https://www.asl3.liguria.it",
  },

  daVerificare: true,
  dimostrativo: true,
};
