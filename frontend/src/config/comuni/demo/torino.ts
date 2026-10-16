import type { ComuneConfig } from "../types";

// Comune di Torino (TO) — VERSIONE DIMOSTRATIVA, SCHEDA SNELLA (13 ottobre 2026).
// Il Comune NON ha aderito a TutelApp: l'app lo segnala ai cittadini con un avviso.
// Fonti (pagine ufficiali del Comune, controllate il 13 ottobre 2026): "Assistenza domiciliare", "Progetti di Vita", scheda di via Pio VII.
// Un servizio sociale per ogni distretto (4 distretti, 8 Circoscrizioni), per appuntamento. Il centralino del Comune è 011 011 999.
// Da fare: sedi e orari di Informadisabilità, PUA e UVG; bonus comunali con importi; sport e tempo libero.
export const torino: ComuneConfig = {
  slug: "torino",
  tipo: "comune",
  nome: "Comune di Torino",
  nomeBreve: "Torino",
  delEnte: "del Comune di Torino",
  soggetto: "Il Comune",
  provincia: "TO",
  regione: "Piemonte",

  ente: "Servizi Sociali",
  responsabile: "",
  indirizzo: "Un servizio sociale per distretto: le sedi sono qui sotto",
  telefono: "011 4421111",
  email: "",
  pec: "servizi.sociali@cert.comune.torino.it",
  orari: "Per appuntamento, dal lunedì al venerdì dalle 9:00 alle 13:00",
  sitoWeb: "https://www.comune.torino.it/servizi/salute-benessere-assistenza",

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
      title: "Servizi sociali Circoscrizioni 1 e 8 (via Pio VII 61)",
      subtitle: "Equipe Disabili, per appuntamento lun-ven 9:00-13:00. Per le Circoscrizioni 1 e 8 c'è anche la sede di via Vado: tel. 011 011 37922",
      action: { type: "tel", value: "01101130100" },
    },
    {
      icon: "people-outline",
      title: "Servizi sociali Circoscrizioni 2 e 3 (via Filadelfia)",
      subtitle: "Per appuntamento, lun-ven 9:00-13:00. Email distretto sud ovest: s.socialedistrettosudovest@comune.torino.it",
      action: { type: "tel", value: "01101128800" },
    },
    {
      icon: "people-outline",
      title: "Servizi sociali Circoscrizioni 4 e 5 (via Val della Torre)",
      subtitle: "Per appuntamento, lun-ven 9:00-13:00. Email distretto nord ovest: s.socialedistrettonordovest@comune.torino.it",
      action: { type: "tel", value: "01101121411" },
    },
    {
      icon: "people-outline",
      title: "Servizi sociali Circoscrizioni 6 e 7 (Lungo Dora Savona)",
      subtitle: "Per appuntamento, lun-ven 9:00-13:00",
      action: { type: "tel", value: "01101134511" },
    },
    {
      icon: "compass-outline",
      title: "Progetti di Vita per persone con disabilità",
      subtitle: "Per chi ha la certificazione Legge 104 e vive a Torino: gratuito, di norma entro 90 giorni. Si chiede con un modulo al servizio sociale del tuo territorio",
      action: { type: "web", value: "https://www.comune.torino.it/servizi/progetti-vita-per-persone-disabilita" },
    },
    {
      icon: "medkit-outline",
      title: "ASL Città di Torino",
      subtitle: "Esenzione ticket per patologia e invalidità, scelta del medico e servizi sanitari del territorio",
      action: { type: "web", value: "https://www.aslcittaditorino.it" },
    },
  ],

  trasporto:
    "Chiedi ai Servizi Sociali del Comune quali servizi di trasporto sociale sono attivi. Puoi rivolgerti anche alle associazioni di volontariato della zona (Croce Rossa, Pubbliche Assistenze, Misericordie) e alle associazioni che trovi nella sezione Associazioni.",

  esenzioneTicket: {
    label: "ASL Città di Torino · Esenzioni ticket",
    url: "https://www.aslcittaditorino.it",
  },

  daVerificare: true,
  dimostrativo: true,
};
