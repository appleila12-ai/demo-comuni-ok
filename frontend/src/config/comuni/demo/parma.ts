import type { ComuneConfig } from "../types";

// Comune di Parma (PR) — VERSIONE DIMOSTRATIVA, SCHEDA SNELLA (26 ottobre 2026).
// Il Comune NON ha aderito a TutelApp: l'app lo segnala ai cittadini con un avviso.
// Dalla scheda di ottobre 2026 (ramo parma-progetto-vita) restano solo sito del Comune, AUSL e ANffAS Parma (ha dato l'ok il 5/10/2026).
// 26/10/2026: indirizzo, numero unico, email del Contact Center e PEC del Comune dalle pagine del Comune (dati forniti da Ilaria). Orari del Settore Sociale ancora da verificare: non pubblicati (quelli di URP e Contact Center non valgono per i Servizi Sociali).
// Da fare: orari del Settore Sociale, bonus del Comune, associazioni, sport e tempo libero.
// Il contatto ANffAS per il Progetto di vita (contattoProgettoVita) non è supportato da questa versione: è nei punti di supporto.
export const parma: ComuneConfig = {
  slug: "parma",
  tipo: "comune",
  nome: "Comune di Parma",
  nomeBreve: "Parma",
  delEnte: "del Comune di Parma",
  soggetto: "Il Comune",
  provincia: "PR",
  regione: "Emilia-Romagna",

  ente: "Settore Sociale",
  responsabile: "",
  indirizzo: "Largo Torello de' Strada 11/a, DUC, 43121 Parma (PR)",
  telefono: "0521 40521",
  email: "052140521@comune.parma.it",
  pec: "comunediparma@postemailcertificata.it",
  orari: "",
  sitoWeb: "https://www.comune.parma.it/it/amministrazione/aree-amministrative/settore-sociale",

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
      title: "Settore Sociale – Comune di Parma",
      subtitle: "Primo ascolto sociale: recapiti e orari sono sul sito del Comune",
      action: { type: "web", value: "https://www.comune.parma.it/it/amministrazione/aree-amministrative/settore-sociale" },
    },
    {
      icon: "accessibility-outline",
      title: "ANffAS Parma – Sportello S.A.I.",
      subtitle: "Accoglienza e informazione gratuita per le famiglie · Segue anche il Progetto di vita",
      action: { type: "web", value: "https://anffasparma.it" },
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
