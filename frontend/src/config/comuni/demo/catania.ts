import type { ComuneConfig } from "../types";
import { INPS_TERZA_FASE } from "../percorso";
import { percorso } from "../percorso";

// Comune di Catania (CT) — VERSIONE DIMOSTRATIVA, SCHEDA SNELLA (13 ottobre 2026).
// Il Comune NON ha aderito a TutelApp: l'app lo segnala ai cittadini con un avviso.
// Recapiti della Segreteria dalla Carta dei servizi comunale, revisione 2024, pag. 29; lettura 17/11/2026. Non attribuire al documento una revisione 2026.
// Da fare: orari aggiornati, bonus del Comune, associazioni, sport e tempo libero.
export const catania: ComuneConfig = {
  slug: "catania",
  tipo: "comune",
  nome: "Comune di Catania",
  nomeBreve: "Catania",
  delEnte: "del Comune di Catania",
  soggetto: "Il Comune",
  provincia: "CT",
  regione: "Sicilia",

  ente: "Servizi Sociali",
  responsabile: "",
  indirizzo: "Via Cardinale Dusmet 141, Catania",
  telefono: "095 7422625",
  email: "segreteria.direzionepolitichesociali@comune.catania.it",
  pec: "politichesociali.catania@pec.it",
  orari: "Recapiti della Segreteria della Direzione Famiglia e Politiche Sociali, pubblicati nella Carta dei servizi, revisione 2024, letta il 17/11/2026. Altro telefono della Segreteria: 095 7422621. Orari aggiornati non verificati.",
  sitoWeb: "https://www.comune.catania.it/il-comune/uffici/socio-sanitari/allegati/carta-dei-servizi-2024-aggiornata.pdf",

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
      title: "Segreteria dei Servizi Sociali",
      subtitle: "095 7422625 / 095 7422621 · segreteria.direzionepolitichesociali@comune.catania.it. Carta dei servizi comunale, revisione 2024; lettura 17/11/2026.",
      action: { type: "web", value: "https://www.comune.catania.it/il-comune/uffici/socio-sanitari/allegati/carta-dei-servizi-2024-aggiornata.pdf" },
    },
    {
      icon: "medkit-outline",
      title: "ASP Catania",
      subtitle: "Esenzione ticket per patologia e invalidità, scelta del medico e servizi sanitari del territorio",
      action: { type: "web", value: "https://www.aspct.it" },
    },
  ],

  trasporto:
    "Chiedi ai Servizi Sociali del Comune quali servizi di trasporto sociale sono attivi. Puoi rivolgerti anche alle associazioni di volontariato della zona (Croce Rossa, Pubbliche Assistenze, Misericordie) e alle associazioni che trovi nella sezione Associazioni.",

  esenzioneTicket: {
    label: "ASP Catania · Esenzioni ticket",
    url: "https://www.aspct.it",
  },

  daVerificare: true,
  dimostrativo: true,
};

// Passi 4 e 5: voci già in scheda con fonte. Passo 2 senza voci: la pagina della Medicina legale non è leggibile o non è stata verificata (28/10/2026); chiesta conferma all'azienda sanitaria.
catania.percorsoTerritorio = percorso(catania.puntiSupporto, [0]);

// Passo 1: provincia nella terza fase della sperimentazione INPS (dal 1° marzo 2026).
catania.percorsoTerritorio = { ...catania.percorsoTerritorio, 1: [INPS_TERZA_FASE] };
