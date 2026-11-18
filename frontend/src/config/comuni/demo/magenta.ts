import type { ComuneConfig } from "../types";
import { INPS_TERZA_FASE } from "../percorso";

// Comune di Magenta (MI) — VERSIONE DIMOSTRATIVA.
// Il Comune NON ha aderito a TutelApp: l'app lo segnala ai cittadini con un avviso.
// Verifica 17/11/2026: https://comune.magenta.mi.it/amministrazione/unita-organizzativa/settore-dei-servizi-al-cittadino/ufficio-servizi-sociali/ (aggiornata 24/02/2026).
// Front office: https://comune.magenta.mi.it/luogo/front-office-servizi-alla-persona-e-sale/ (aggiornata 20/01/2026).
// Ticket: sportello virtuale esenzioni ASST verificato 17/11/2026: https://www.asst-ovestmi.it/attivita-scelta-e-revoca.
// Restano da verificare: bonus, destinatario Scrivi al Comune e avviso visibile.
export const magenta: ComuneConfig = {
  slug: "magenta",
  tipo: "comune",
  nome: "Comune di Magenta",
  nomeBreve: "Magenta",
  delEnte: "del Comune di Magenta",
  soggetto: "Il Comune",
  provincia: "MI",
  regione: "Lombardia",

  ente: "Servizi Sociali",
  responsabile: "Settore dei Servizi al Cittadino – Servizi alla Persona",
  indirizzo: "Via IV Giugno, 20013 Magenta (MI)",
  telefono: "02 9735438",
  email: "sociale@comune.magenta.mi.it",
  pec: "protocollo@pec.comune.magenta.mi.it",
  orari: "Ufficio Servizi Sociali solo su appuntamento. Front office: lun–ven 9:00–12:30; mar e gio anche 15:30–17:30. Orari indicativi, possono cambiare: conferma all’ufficio prima di andare.",
  sitoWeb: "https://comune.magenta.mi.it/amministrazione/unita-organizzativa/settore-dei-servizi-al-cittadino/ufficio-servizi-sociali/",

  logo: null,

  theme: {
    warm: "#CFC38B",
    warmSoft: "#F2EEDD",
    warmDark: "#6E622A",
    cream: "#F6F6F2",
  },

  puntiSupporto: [
    {
      icon: "people-outline",
      title: "Servizi Sociali – Magenta",
      subtitle: "Settore dei Servizi al Cittadino – Servizi alla Persona · Via IV Giugno, 20013 Magenta (MI) · Tel. 02 9735438",
      action: { type: "tel", value: "029735438" },
    },
    {
      icon: "business-outline",
      title: "Ufficio di Piano – Ambito del Magentino",
      subtitle: "Ufficio di Piano con sede a Magenta, coordina il Piano di Zona e i servizi sociali sovracomunali.",
      action: { type: "web", value: "https://comune.magenta.mi.it/amministrazione/unita-organizzativa/settore-dei-servizi-al-cittadino/ufficio-di-piano/" },
    },
    {
      icon: "medkit-outline",
      title: "ASST Ovest Milanese",
      subtitle: "Richiesta e rinnovo esenzioni tramite sportello virtuale ASST Ovest Milanese",
      action: { type: "web", value: "https://www.asst-ovestmi.it/attivita-scelta-e-revoca" },
    },
  ],

  trasporto: "Chiedi ai Servizi Sociali di Magenta (02 9735438) quali servizi di trasporto sociale sono attivi. Puoi rivolgerti anche alle associazioni di volontariato della zona (Croce Rossa, Pubbliche Assistenze, Misericordie).",

  esenzioneTicket: {
    label: "ASST Ovest Milanese · Richiesta e rinnovo esenzioni ticket",
    url: "https://www.asst-ovestmi.it/attivita-scelta-e-revoca",
  },

  daVerificare: true,
  dimostrativo: true,
};

// Passo 1: provincia nella terza fase della sperimentazione INPS (dal 1° marzo 2026).
magenta.percorsoTerritorio = { ...magenta.percorsoTerritorio, 1: [INPS_TERZA_FASE] };
