import type { ComuneConfig } from "../types";
import { percorso } from "../percorso";

// Comune di Bologna (BO) — VERSIONE DIMOSTRATIVA (aggiornata il 14 ottobre 2026).
// Il Comune NON ha aderito a TutelApp: l'app lo segnala ai cittadini con un avviso.
// Il sito del Comune di Bologna non si apre in automatico e la tabella degli sportelli sociali nei dati aperti non si è caricata:
// indirizzi, telefoni e orari degli sportelli NON sono verificati. È confermato solo (dalla descrizione del dataset del Comune) che gli Sportelli Sociali
// sono la porta di accesso ai servizi sociali e si trovano nei sei Quartieri della città.
// Da fare: elenco degli Sportelli Sociali per Quartiere (indirizzo, telefono, orari), bonus del Comune, associazioni, sport e tempo libero.
export const bologna: ComuneConfig = {
  slug: "bologna",
  tipo: "comune",
  nome: "Comune di Bologna",
  nomeBreve: "Bologna",
  delEnte: "del Comune di Bologna",
  soggetto: "Il Comune",
  provincia: "BO",
  regione: "Emilia-Romagna",

  ente: "Servizi Sociali",
  responsabile: "",
  indirizzo: "",
  telefono: "051 203111",
  email: "",
  pec: "",
  orari: "",
  sitoWeb: "https://www.comune.bologna.it",

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
      title: "Sportelli Sociali del Comune di Bologna",
      subtitle: "Sono la porta di accesso ai servizi sociali e si trovano nei sei Quartieri della città. Indirizzi e orari sono nell'elenco dei dati aperti del Comune",
      action: { type: "web", value: "https://opendata.comune.bologna.it/explore/dataset/sportelli-sociali/table/" },
    },
    {
      icon: "medkit-outline",
      title: "AUSL Bologna",
      subtitle: "Esenzione ticket per patologia e invalidità, scelta del medico e servizi sanitari del territorio",
      action: { type: "web", value: "https://www.ausl.bologna.it" },
    },
  ],

  trasporto:
    "Chiedi ai Servizi Sociali del Comune quali servizi di trasporto sociale sono attivi. Puoi rivolgerti anche alle associazioni di volontariato della zona (Croce Rossa, Pubbliche Assistenze, Misericordie) e alle associazioni che trovi nella sezione Associazioni.",

  esenzioneTicket: {
    label: "AUSL Bologna · Esenzioni ticket",
    url: "https://www.ausl.bologna.it",
  },

  daVerificare: true,
  dimostrativo: true,
};

// Passi 4 e 5: voci già in scheda con fonte. Passo 2 senza voci: la pagina della Medicina legale non è leggibile o non è stata verificata (28/10/2026); chiesta conferma all'azienda sanitaria.
bologna.percorsoTerritorio = percorso(bologna.puntiSupporto, [0]);
