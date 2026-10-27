import type { ComuneConfig } from "../types";

// Comune di Montefiascone (VT) — VERSIONE DIMOSTRATIVA, SCHEDA SNELLA (27 ottobre 2026).
// Il Comune NON ha aderito a TutelApp: l'app lo segnala ai cittadini con un avviso.
// Fonte: pagina "Ufficio Servizi Sociali" del sito del Comune (aggiornata il 24/03/2026), testo copiato da Ilaria il 27/10/2026.
// L'unica email della pagina è quella personale di una dipendente: non pubblicata. La mail "Scrivi al tuo Comune" va alla PEC del protocollo.
// Il distretto socio-sanitario (VT 1 secondo l'elenco della Regione Lazio) non è indicato: distretto sociale non confermato.
// Da fare: bonus del Comune (contributo disabilità gravissima, assegno di maternità: leggere le pagine), associazioni, sport e tempo libero.
export const montefiascone: ComuneConfig = {
  slug: "montefiascone",
  tipo: "comune",
  nome: "Comune di Montefiascone",
  nomeBreve: "Montefiascone",
  delEnte: "del Comune di Montefiascone",
  soggetto: "Il Comune",
  provincia: "VT",
  regione: "Lazio",

  ente: "Servizi Sociali",
  responsabile: "Stefano Angeli (responsabile dell'Ufficio)",
  indirizzo: "Largo del Plebiscito 1, 01027 Montefiascone (VT)",
  telefono: "0761 832063",
  email: "",
  pec: "protocollo@pec.comune.montefiascone.vt.it",
  orari: "Solo su prenotazione. Lun e gio 9:00–13:00 e 15:00–17:00; mar, mer e ven 9:00–13:00",
  sitoWeb: "https://www.comune.montefiascone.vt.it/amministrazione/uffici/ufficio_28.html",

  logo: null,

  theme: {
    warm: "#88AFC7",
    warmSoft: "#E2EDF4",
    warmDark: "#2F5874",
    cream: "#F3F6F8",
  },

  puntiSupporto: [
    {
      icon: "people-outline",
      title: "Servizi Sociali – Montefiascone",
      subtitle: "Largo del Plebiscito 1 · Tel. 0761 832063 · Centralino del Comune 0761 83201 · Si accede su prenotazione",
      action: { type: "tel", value: "0761832063" },
    },
    {
      icon: "medkit-outline",
      title: "ASL Viterbo",
      subtitle: "Esenzione ticket per patologia e invalidità, prenotazioni e distretti sanitari",
      action: { type: "web", value: "https://asl.vt.it/esenzioni-ticket" },
    },
  ],

  trasporto: "Chiedi ai Servizi Sociali del Comune (0761 832063) quali servizi di trasporto sociale sono attivi. Puoi rivolgerti anche alle associazioni di volontariato della zona (Croce Rossa, Pubbliche Assistenze, Misericordie).",

  esenzioneTicket: {
    label: "ASL Viterbo · Esenzioni ticket",
    url: "https://asl.vt.it/esenzioni-ticket",
  },

  daVerificare: true,
  dimostrativo: true,
};
