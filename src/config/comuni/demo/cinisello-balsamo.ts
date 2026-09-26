import type { ComuneConfig } from "../types";

// Comune di Cinisello Balsamo (MI) — VERSIONE DIMOSTRATIVA.
// Il Comune NON ha aderito a TutelApp: l'app lo segnala ai cittadini con un avviso.
// Dati presi dal sito ufficiale del Comune/ente (settembre 2026), da verificare.
// Da verificare: telefono, email, orari, responsabile
export const ciniselloBalsamo: ComuneConfig = {
  slug: "cinisello-balsamo",
  tipo: "comune",
  nome: "Comune di Cinisello Balsamo",
  nomeBreve: "Cinisello Balsamo",
  delEnte: "del Comune di Cinisello Balsamo",
  soggetto: "Il Comune",
  provincia: "MI",
  regione: "Lombardia",

  ente: "Servizi Sociali",
  responsabile: "Settore Politiche Sociali (Ambito Nord Milano)",
  indirizzo: "Vicolo del Gallo 10, 20092 Cinisello Balsamo (MI)",
  telefono: "02 66023284",
  email: "comune.cinisellobalsamo@pec.regione.lombardia.it",
  pec: "comune.cinisellobalsamo@pec.regione.lombardia.it",
  orari: "Mar 9:30–12:30 e 14:30–16:30, Gio 9:30–12:30",
  sitoWeb: "https://www.comune.cinisello-balsamo.mi.it/spip.php?article24731",

  logo: null,

  theme: {
    warm: "#9FCF8B",
    warmSoft: "#E3F2DD",
    warmDark: "#3E6E2A",
    cream: "#F3F6F2",
  },

  puntiSupporto: [
    {
      icon: "people-outline",
      title: "Servizi Sociali – Cinisello Balsamo",
      subtitle: "Settore Politiche Sociali (Ambito Nord Milano) · Vicolo del Gallo 10, 20092 Cinisello Balsamo (MI) · Tel. 02 66023284",
      action: { type: "tel", value: "0266023284" },
    },
    {
      icon: "medkit-outline",
      title: "ASST Nord Milano",
      subtitle: "Esenzione ticket per patologia e invalidità, prenotazioni e distretti sanitari",
      action: { type: "web", value: "https://www.asst-nordmilano.it" },
    },
  ],

  trasporto: "Chiedi ai Servizi Sociali di Cinisello Balsamo (02 66023284) quali servizi di trasporto sociale sono attivi. Puoi rivolgerti anche alle associazioni di volontariato della zona (Croce Rossa, Pubbliche Assistenze, Misericordie).",

  esenzioneTicket: {
    label: "ASST Nord Milano · Esenzioni ticket",
    url: "https://www.asst-nordmilano.it",
  },

  daVerificare: true,
  dimostrativo: true,
};
