import type { ComuneConfig } from "../types";
import { percorso } from "../percorso";

// Comune di Cremona (CR) — VERSIONE DIMOSTRATIVA, SCHEDA SNELLA (14 ottobre 2026).
// Il Comune NON ha aderito a TutelApp: l'app lo segnala ai cittadini con un avviso.
// POIS, accesso ai servizi sociali: fonte Comune aggiornata 30/09/2025, consultata il 17/11/2026.
// https://www.comune.cremona.it/amministrazione/pois-porta-informativa-dei-servizi-sociali-porta-unitaria-accesso
// Ticket: fonte ASST Cremona aggiornata 12/08/2025, consultata 17/11/2026.
// https://www.asst-cremona.it/strutture/gestione-cronicita-cremona-ex-cure-primarie
// Da completare: bonus regionali/comunali e Ambito, destinatario Scrivi al Comune, avviso UI e associazioni.
export const cremona: ComuneConfig = {
  slug: "cremona",
  tipo: "comune",
  nome: "Comune di Cremona",
  nomeBreve: "Cremona",
  delEnte: "del Comune di Cremona",
  soggetto: "Il Comune",
  provincia: "CR",
  regione: "Lombardia",

  ente: "POIS - Porta Informativa dei Servizi Sociali",
  responsabile: "",
  indirizzo: "Corso Vittorio Emanuele II 42, 26100 Cremona (CR)",
  telefono: "334 1043608",
  email: "pois@comune.cremona.it",
  pec: "",
  orari: "Sportello lun–ven 8:30–13:00; informazioni telefoniche lun–ven 8:30–12:30",
  sitoWeb: "https://www.comune.cremona.it/amministrazione/pois-porta-informativa-dei-servizi-sociali-porta-unitaria-accesso",

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
      title: "POIS - Accesso ai Servizi Sociali",
      subtitle: "Corso Vittorio Emanuele II 42 · 334 1043608 · Lun–Ven 8:30–13:00",
      action: { type: "tel", value: "3341043608" },
    },
    {
      icon: "medkit-outline",
      title: "ASST Cremona",
      subtitle: "Esenzioni ticket per reddito, patologia cronica o rara e invalidità: sportelli Scelta e Revoca",
      action: { type: "web", value: "https://www.asst-cremona.it/strutture/gestione-cronicita-cremona-ex-cure-primarie" },
    },
  ],

  trasporto:
    "Chiedi ai Servizi Sociali del Comune quali servizi di trasporto sociale sono attivi. Puoi rivolgerti anche alle associazioni di volontariato della zona (Croce Rossa, Pubbliche Assistenze, Misericordie) e alle associazioni che trovi nella sezione Associazioni.",

  esenzioneTicket: {
    label: "ASST Cremona · Esenzioni ticket",
    url: "https://www.asst-cremona.it/strutture/gestione-cronicita-cremona-ex-cure-primarie",
  },

  daVerificare: true,
  dimostrativo: true,
};

// Passi 4 e 5: voci già in scheda con fonte. Passi 1-3 vuoti: nessun recapito verificato (28/10/2026).
cremona.percorsoTerritorio = percorso(cremona.puntiSupporto, [0]);
