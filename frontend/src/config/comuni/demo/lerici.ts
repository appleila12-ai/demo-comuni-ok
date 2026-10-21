import type { ComuneConfig } from "../types";

// Comune di Lerici (SP) — VERSIONE DIMOSTRATIVA.
// Il Comune NON ha aderito a TutelApp: l'app lo segnala ai cittadini con un avviso.
// Recapiti: pagina "Ufficio Politiche Sociali" del sito del Comune (aggiornata l'08/06/2026), testo copiato da Ilaria il 21/10/2026.
export const lerici: ComuneConfig = {
  slug: "lerici",
  tipo: "comune",
  nome: "Comune di Lerici",
  nomeBreve: "Lerici",
  delEnte: "del Comune di Lerici",
  soggetto: "Il Comune",
  provincia: "SP",
  regione: "Liguria",

  ente: "Servizi Sociali",
  responsabile: "Ufficio Politiche Sociali",
  indirizzo: "Piazza Bacigalupi, 19032 Lerici (SP)",
  telefono: "0187 960277",
  email: "",
  pec: "comunedilerici@postecert.it",
  orari: "Lun 15:00–17:00 (accesso libero), 14:00–15:00 su prenotazione; mar 9:00–12:00; gio 9:00–10:00 su prenotazione, 10:00–12:00 libero; ven 9:00–12:00 (dal 09/07/2025)",
  sitoWeb: "https://www.comune.lerici.sp.it/amministrazione/uffici/ufficio_22.html",

  logo: null,

  theme: {
    warm: "#8FB8C9",
    warmSoft: "#E2EEF3",
    warmDark: "#2F5F73",
    cream: "#F3F6F7",
  },

  puntiSupporto: [
    {
      icon: "people-outline",
      title: "Servizi Sociali – Lerici",
      subtitle: "Ufficio Politiche Sociali · Piazza Bacigalupi · Tel. 0187 960277 / 0187 960287",
      action: { type: "tel", value: "0187960277" },
    },
    {
      icon: "document-text-outline",
      title: "Istanza Unica Servizi Sociali",
      subtitle: "Modulo unico per contributi, assistenza a casa, pasti caldi, telesoccorso. Si consegna all'ufficio previo appuntamento.",
      action: { type: "web", value: "https://www.comune.lerici.sp.it/servizi/salute_benessere_e_assistenza/servizio_63.html" },
    },
    {
      icon: "medkit-outline",
      title: "ASL5 Spezzino",
      subtitle: "Esenzione ticket per patologia e invalidità, prenotazioni e distretti sanitari",
      action: { type: "web", value: "https://www.asl5.liguria.it/PerilCittadino/Prenotazioniticketesenzioni/Esenzioneticket.aspx" },
    },
  ],

  trasporto: "Chiedi ai Servizi Sociali di Lerici (0187 960277) quali servizi di trasporto sociale sono attivi. Puoi rivolgerti anche alle associazioni di volontariato della zona (Croce Rossa, Pubbliche Assistenze, Misericordie).",

  esenzioneTicket: {
    label: "ASL5 Spezzino · Esenzioni ticket",
    url: "https://www.asl5.liguria.it/PerilCittadino/Prenotazioniticketesenzioni/Esenzioneticket.aspx",
  },

  daVerificare: true,
  dimostrativo: true,
};
