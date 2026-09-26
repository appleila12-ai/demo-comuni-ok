import type { ComuneConfig } from "../types";

// Comune di Cologno Monzese (MI) — VERSIONE DIMOSTRATIVA.
// Il Comune NON ha aderito a TutelApp: l'app lo segnala ai cittadini con un avviso.
// Dati presi dal sito ufficiale del Comune/ente (settembre 2026), da verificare.
// Da verificare: —
export const colognoMonzese: ComuneConfig = {
  slug: "cologno-monzese",
  tipo: "comune",
  nome: "Comune di Cologno Monzese",
  nomeBreve: "Cologno Monzese",
  delEnte: "del Comune di Cologno Monzese",
  soggetto: "Il Comune",
  provincia: "MI",
  regione: "Lombardia",

  ente: "Servizi Sociali",
  responsabile: "Area Servizi Sociali – Famiglie, adulti, anziani, disabili e Piano di Zona",
  indirizzo: "Via Francesco Petrarca 11, 20093 Cologno Monzese (MI)",
  telefono: "02 25308516",
  email: "servizisociali@comune.colognomonzese.mi.it",
  pec: "protocollo.comunecolognomonzese@legalmail.it",
  orari: "Sportello: Mar 14:00–17:00 e Ven 9:00–12:00 (su appuntamento); telefonico Mar 9:00–12:00",
  sitoWeb: "https://www.comune.colognomonzese.mi.it/it/unita_organizzative/area-servizi-sociali",

  logo: null,

  theme: {
    warm: "#CF8BB3",
    warmSoft: "#F2DDE9",
    warmDark: "#6E2A52",
    cream: "#F6F2F5",
  },

  puntiSupporto: [
    {
      icon: "people-outline",
      title: "Servizi Sociali – Cologno Monzese",
      subtitle: "Area Servizi Sociali – Famiglie, adulti, anziani, disabili e Piano di Zona · Via Francesco Petrarca 11, 20093 Cologno Monzese (MI) · Tel. 02 25308516",
      action: { type: "tel", value: "0225308516" },
    },
    {
      icon: "business-outline",
      title: "Ufficio Famiglie, adulti, anziani, disabili e Piano di Zona",
      subtitle: "Ufficio comunale che gestisce interventi per famiglie, anziani e disabili e i progetti del Piano di Zona.",
      action: { type: "web", value: "https://www.comune.colognomonzese.mi.it/it/unita_organizzative/famiglie-adulti-anziani-disabili-e-piano-di-zona" },
    },
    {
      icon: "medkit-outline",
      title: "ASST Nord Milano",
      subtitle: "Esenzione ticket per patologia e invalidità, prenotazioni e distretti sanitari",
      action: { type: "web", value: "https://www.asst-nordmilano.it" },
    },
  ],

  trasporto: "Chiedi ai Servizi Sociali di Cologno Monzese (02 25308516) quali servizi di trasporto sociale sono attivi. Puoi rivolgerti anche alle associazioni di volontariato della zona (Croce Rossa, Pubbliche Assistenze, Misericordie).",

  esenzioneTicket: {
    label: "ASST Nord Milano · Esenzioni ticket",
    url: "https://www.asst-nordmilano.it",
  },

  daVerificare: true,
  dimostrativo: true,
};
