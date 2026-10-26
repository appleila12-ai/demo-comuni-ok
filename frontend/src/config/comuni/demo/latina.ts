import type { ComuneConfig } from "../types";

// Comune di Latina (LT) — VERSIONE DIMOSTRATIVA (13 ottobre 2026, completata il 26/10/2026).
// Il Comune NON ha aderito a TutelApp: l'app lo segnala ai cittadini con un avviso.
// Fonti: pagine del Comune "Servizio Politiche sociali comunali" (agg. 12/08/2026), "Servizio PUA" e servizi per la disabilità (agg. aprile 2024), lette il 26/10/2026.
// Da fare: telefono del PUA, sito dell'azienda sanitaria, associazioni, sport e tempo libero.
export const latina: ComuneConfig = {
  slug: "latina",
  tipo: "comune",
  nome: "Comune di Latina",
  nomeBreve: "Latina",
  delEnte: "del Comune di Latina",
  soggetto: "Il Comune",
  provincia: "LT",
  regione: "Lazio",

  ente: "Servizi Sociali",
  responsabile: "Servizio Politiche sociali comunali",
  indirizzo: "Via Bonn 2, Latina",
  telefono: "0773 6521",
  email: "servizi.sociali@comune.latina.it",
  pec: "protocollo@pec.comune.latina.it",
  orari: "Lunedì, mercoledì e venerdì 9:30–12:30; martedì e giovedì 15:30–17:00. Si riceve su appuntamento. Telefoni del servizio: 0773 652073, 0773 652518, 0773 652446",
  sitoWeb: "https://www.comune.latina.it/home/info/argomenti/007.html",

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
      title: "Servizio Politiche sociali comunali",
      subtitle: "Via Bonn 2, Latina · Tel. 0773 652073 / 652518 / 652446 · lun, mer, ven 9:30–12:30; mar e gio 15:30–17:00, su appuntamento · servizi.sociali@comune.latina.it",
      action: { type: "tel", value: "0773652073" },
    },
    {
      icon: "people-outline",
      title: "Segretariato sociale professionale",
      subtitle: "Ha una sede separata in Viale P.L. Nervi, presso il centro commerciale Latinafiori. Per gli orari chiama il Servizio Politiche sociali: 0773 652073",
      action: { type: "web", value: "https://www.comune.latina.it/home/amministrazione/uffici/Ufficio-49.html" },
    },
    {
      icon: "medkit-outline",
      title: "Punto Unico di Accesso (PUA)",
      subtitle: "Sportello per i servizi sociali e sociosanitari, con competenza per le persone con disabilità. Piazza Celli 8 / via C. Battisti 50 (locali ASL, di fronte al CUP), stanza 17, Sportello P.U.A. D. Si prenota al telefono o online su www.faplatina2.it · Sportellopuadlt@gmail.com",
      action: { type: "web", value: "https://www.comune.latina.it/home/servizi/servizio/Servizio-133.html" },
    },
  ],

  trasporto:
    "Chiedi ai Servizi Sociali del Comune quali servizi di trasporto sociale sono attivi. Puoi rivolgerti anche alle associazioni di volontariato della zona (Croce Rossa, Pubbliche Assistenze, Misericordie) e alle associazioni che trovi nella sezione Associazioni.",

  esenzioneTicket: {
    label: "Esenzioni ticket · chiedi alla tua azienda sanitaria",
    url: "https://www.comune.latina.it/home/info/argomenti/007.html",
  },

  daVerificare: true,
  dimostrativo: true,
};
