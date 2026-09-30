import type { ComuneConfig } from "../types";

// Comune di Verona (VR) — VERSIONE DIMOSTRATIVA.
// Il Comune NON ha aderito a TutelApp: l'app lo segnala ai cittadini con un avviso.
// Dati dal sito ufficiale del Comune (settembre 2026), da verificare con l'ente.
export const verona: ComuneConfig = {
  slug: "verona",
  tipo: "comune",
  nome: "Comune di Verona",
  nomeBreve: "Verona",
  delEnte: "del Comune di Verona",
  soggetto: "Il Comune",
  provincia: "VR",
  regione: "Veneto",

  ente: "Servizi Sociali",
  responsabile: "Direzione Servizi Sociali · Sportello SÌ (Sportello Integrato Informativo del Sociale)",
  indirizzo: "Vicolo San Domenico 13B, 37122 Verona (VR)",
  telefono: "800 085 570",
  email: "sportelloinfosociale@comune.verona.it",
  pec: "servizi.sociali@pec.comune.verona.it",
  orari: "Lun–Ven 9:00–13:00; Mar e Gio anche 14:00–17:00 al telefono",
  sitoWeb: "https://www.comune.verona.it/Servizi/Sportello-Integrato-Informativo-del-Sociale",

  logo: null,

  theme: {
    warm: "#C98B8B",
    warmSoft: "#F5E3E3",
    warmDark: "#7A3A3A",
    cream: "#F9F4F4",
  },

  puntiSupporto: [
    {
      icon: "people-outline",
      title: "Sportello SÌ – Servizi Sociali di Verona",
      subtitle: "Informazioni, appuntamenti e agevolazioni · Vicolo San Domenico 13B, 37122 Verona · Numero verde 800 085 570",
      action: { type: "tel", value: "800085570" },
    },
    {
      icon: "business-outline",
      title: "Ambito Territoriale VEN20 – Verona",
      subtitle: "Servizi sociali dell'ambito per adulti, anziani, famiglie e persone con disabilità",
      action: { type: "web", value: "https://ambitoven20.comune.verona.it" },
    },
    {
      icon: "medkit-outline",
      title: "ULSS 9 Scaligera",
      subtitle: "Esenzione ticket per patologia e invalidità, prenotazioni e distretti sanitari",
      action: { type: "web", value: "https://www.aulss9.veneto.it" },
    },
  ],

  trasporto: "Chiedi allo Sportello SÌ dei Servizi Sociali di Verona (numero verde 800 085 570) quali servizi di trasporto sociale sono attivi. Puoi rivolgerti anche alle associazioni di volontariato della zona (Croce Rossa, Pubbliche Assistenze, Misericordie).",

  esenzioneTicket: {
    label: "ULSS 9 Scaligera · Esenzioni ticket",
    url: "https://www.aulss9.veneto.it",
  },

  daVerificare: true,
  dimostrativo: true,
};
