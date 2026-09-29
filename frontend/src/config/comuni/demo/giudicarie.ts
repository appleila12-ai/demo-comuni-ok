import type { ComuneConfig } from "../types";

// Comunità delle Giudicarie (TN) — VERSIONE DIMOSTRATIVA.
// L'ente NON ha aderito a TutelApp: l'app lo segnala ai cittadini con un avviso.
// In Trentino i servizi sociali sono della Comunità di Valle, non dei singoli
// Comuni: un'unica versione per i 25 Comuni, il cittadino sceglie il suo paese.
// Fonti: comunitadellegiudicarie.it (pagine Contatti servizi sociali e I Comuni,
// settembre 2026; guida ai servizi 2024; pagina consultorio).
// DA VERIFICARE con la Comunità: poli territoriali e sportelli delle assistenti
// sociali (fonte non ufficiale e datata, per ora NON mostrati), Ufficio di Piano
// e Spazio Argento (fonte 2024), recapiti dei singoli municipi.
export const giudicarie: ComuneConfig = {
  slug: "giudicarie",
  tipo: "unione",
  nome: "Comunità delle Giudicarie",
  nomeBreve: "Giudicarie",
  delEnte: "della Comunità delle Giudicarie",
  soggetto: "La Comunità",
  provincia: "TN",
  regione: "Trentino-Alto Adige",
  // I 25 Comuni della Comunità (elenco ufficiale). Recapiti dei municipi da completare.
  paesi: [
    { nome: "Bleggio Superiore" },
    { nome: "Bocenago" },
    { nome: "Bondone" },
    { nome: "Borgo Chiese", email: "info@comune.borgochiese.tn.it" },
    { nome: "Borgo Lares" },
    { nome: "Caderzone Terme" },
    { nome: "Carisolo" },
    { nome: "Castel Condino" },
    { nome: "Comano Terme" },
    { nome: "Fiavé" },
    { nome: "Giustino" },
    { nome: "Massimeno" },
    { nome: "Pelugo" },
    { nome: "Pieve di Bono-Prezzo" },
    { nome: "Pinzolo" },
    { nome: "Porte di Rendena" },
    { nome: "San Lorenzo Dorsino" },
    { nome: "Sella Giudicarie" },
    { nome: "Spiazzo" },
    { nome: "Stenico" },
    { nome: "Storo" },
    { nome: "Strembo" },
    { nome: "Tione di Trento" },
    { nome: "Tre Ville" },
    { nome: "Valdaone" },
  ],

  ente: "Servizio Socio-Assistenziale · Comunità delle Giudicarie",
  responsabile: "Assistenti sociali della Comunità, per tutti i 25 Comuni",
  indirizzo: "Via del Foro 3 (primo piano), 38079 Tione di Trento (TN)",
  telefono: "0465 339585",
  email: "serviziosocioassistenziale@comunitadellegiudicarie.it",
  pec: "c.giudicarie@legalmail.it",
  orari: "Lun–Gio 9:00–12:00 e 14:00–16:00 · Ven 9:00–12:00",
  sitoWeb: "https://www.comunitadellegiudicarie.it/Tematiche/Servizi-sociali/Contatti",

  logo: null, // stemma solo se fornito dalla Comunità

  theme: {
    warm: "#9FBF9A", // verde valle
    warmSoft: "#E4EFE2",
    warmDark: "#3F6139",
    cream: "#F4F6F1",
  },

  puntiSupporto: [
    {
      icon: "people-outline",
      title: "Servizio Socio-Assistenziale – Giudicarie",
      subtitle:
        "Assistenti sociali per tutti i Comuni della Comunità: chiedi quale sportello è più vicino al tuo paese · Via del Foro 3, Tione di Trento · Tel. 0465 339585",
      action: { type: "tel", value: "0465339585" },
    },
    {
      icon: "heart-outline",
      title: "Spazio Argento – Giudicarie",
      subtitle: "Punto di riferimento per anziani, familiari e caregiver · Tel. 0465 339575",
      action: { type: "tel", value: "0465339575" },
    },
    {
      icon: "chatbubbles-outline",
      title: "Consultorio familiare APSS – Tione",
      subtitle: "Ascolto e sostegno psicologico e sociale, accesso libero e gratuito · Via della Cros 4, Tione · Tel. 0465 331530",
      action: { type: "tel", value: "0465331530" },
    },
    {
      icon: "medkit-outline",
      title: "APSS Trento",
      subtitle: "Esenzione ticket per patologia e invalidità, prenotazioni e distretti sanitari",
      action: { type: "web", value: "https://www.apss.tn.it" },
    },
  ],

  trasporto:
    "Chiedi al Servizio Socio-Assistenziale della Comunità delle Giudicarie (0465 339585) quali servizi di trasporto sociale sono attivi nel tuo paese. Puoi rivolgerti anche alle associazioni di volontariato della zona.",

  esenzioneTicket: {
    label: "APSS Trento · Esenzioni ticket",
    url: "https://www.apss.tn.it",
  },

  daVerificare: true,
  dimostrativo: true,
};
