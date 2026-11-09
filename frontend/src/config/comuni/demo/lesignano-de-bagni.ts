import type { ComuneConfig } from "../types";
import { percorso } from "../percorso";

// Comune di Lesignano de' Bagni (PR) — VERSIONE DIMOSTRATIVA, SCHEDA SNELLA (9 novembre 2026).
// Il Comune NON ha aderito a TutelApp: l'app lo segnala ai cittadini con un avviso.
// Segnalato come interessato da chi promuove TutelApp in provincia di Parma (8/11/2026): non è un'adesione.
// Sito del Comune: dominio istituzionale trovato nelle pagine ufficiali (9/11/2026).
// 9/11/2026: recapiti dei servizi sociali da schede della Regione Emilia-Romagna e pagine del Comune (fonti istituzionali). Nessuna email personale di operatori; dati discordanti non inseriti.
// Lesignano de' Bagni: i servizi sociali sono gestiti dall'Unione Montana Appennino Parma Est (sede di Langhirano). Indirizzo di ricevimento e email non inseriti (sede locale non trovata; le email sono di operatori). Non unire sedi e orari delle due schede regionali.
// Da fare: coordinate; bonus del Comune, associazioni, sport e tempo libero.
export const lesignanoDeBagni: ComuneConfig = {
  slug: "lesignano-de-bagni",
  tipo: "comune",
  nome: "Comune di Lesignano de' Bagni",
  nomeBreve: "Lesignano de' Bagni",
  delEnte: "del Comune di Lesignano de' Bagni",
  soggetto: "Il Comune",
  provincia: "PR",
  regione: "Emilia-Romagna",

  ente: "Servizi Sociali",
  responsabile: "",
  indirizzo: "",
  telefono: "0521 354149",
  email: "",
  pec: "protocollo@postacert.comune.lesignano-debagni.pr.it",
  orari: "Su appuntamento telefonico. Servizi sociali per minori, adulti e famiglie: 0521 354149; anziani: 0521 354139 (mercoledì 9.30–12.30, previo appuntamento)",
  sitoWeb: "https://www.comune.lesignano-debagni.pr.it",

  logo: null,

  theme: {
    warm: "#E2C25A",
    warmSoft: "#F7EFCF",
    warmDark: "#3B4A7A",
    cream: "#FAF7EC",
  },

  puntiSupporto: [
    {
      icon: "people-outline",
      title: "Servizi Sociali del Comune",
      subtitle: "Primo ascolto sociale: recapiti e orari sono sul sito del Comune",
      action: { type: "web", value: "https://comune.lesignano-debagni.pr.it/it/page/servizi-sociali" },
    },
    {
      icon: "medkit-outline",
      title: "AUSL di Parma",
      subtitle: "Esenzione ticket per patologia e invalidità, prenotazioni e distretti sanitari",
      action: { type: "web", value: "https://www.ausl.pr.it/come_fare/ticket/esenzione-patologia.aspx" },
    },
  ],

  trasporto:
    "Chiedi ai Servizi Sociali del Comune quali servizi di trasporto sociale sono attivi. Puoi rivolgerti anche alle associazioni di volontariato della zona (Croce Rossa, Pubbliche Assistenze, Misericordie) e alle associazioni che trovi nella sezione Associazioni.",

  esenzioneTicket: {
    label: "AUSL di Parma · Esenzione per patologia",
    url: "https://www.ausl.pr.it/come_fare/ticket/esenzione-patologia.aspx",
  },

  daVerificare: true,
  dimostrativo: true,
};

// Passi 4 e 5: voci già in scheda con fonte. Passi 1-3 vuoti: nessun recapito verificato (9/11/2026).
lesignanoDeBagni.percorsoTerritorio = percorso(lesignanoDeBagni.puntiSupporto, [0]);
