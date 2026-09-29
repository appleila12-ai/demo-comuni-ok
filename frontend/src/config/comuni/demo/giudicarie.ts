import type { ComuneConfig } from "../types";

// Comunità delle Giudicarie (TN) — VERSIONE DIMOSTRATIVA.
// L'ente NON ha aderito a TutelApp: l'app lo segnala ai cittadini con un avviso.
// In Trentino i servizi sociali sono della Comunità di Valle, non dei singoli
// Comuni: un'unica versione per i 25 Comuni, il cittadino sceglie il suo paese.
// Fonti: comunitadellegiudicarie.it (Contatti servizi sociali, I Comuni) e
// "Recapiti Assistenti Sociali 2026" (PDF della Comunità, inviato dal Comune di
// Borgo Chiese il 29/09/2026): segreterie, orari, poli e sportelli.
// DA VERIFICARE: quale telefono dare per ciascun polo (nel PDF sono i numeri
// delle assistenti sociali area anziani, tranne il Polo 2), recapiti dei municipi.
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
  responsabile: "Assistenti sociali della Comunità, organizzate in tre poli territoriali",
  indirizzo: "Via del Foro 3 (primo piano), 38079 Tione di Trento (TN)",
  telefono: "0465 339585",
  email: "serviziosocioassistenziale@comunitadellegiudicarie.it",
  pec: "c.giudicarie@legalmail.it",
  orari: "Segreteria: lun–ven 9:00–12:00",
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
      title: "Servizio Socio-Assistenziale – segreteria",
      subtitle:
        "Per famiglie con minori e adulti, per tutti i 25 Comuni · Via del Foro 3, Tione di Trento · Lun–ven 9:00–12:00 · Tel. 0465 339585",
      action: { type: "tel", value: "0465339585" },
    },
    {
      icon: "location-outline",
      title: "Polo 1 – Valle del Chiese",
      subtitle:
        "Da Sella Giudicarie a Bondone (Storo, Borgo Chiese, Valdaone, Pieve di Bono-Prezzo…) · Condino, Casa Sanitaria, Via Roma 38 · Sportello lunedì 9:00–10:30 · Tel. 0465 621844",
      action: { type: "tel", value: "0465621844" },
    },
    {
      icon: "location-outline",
      title: "Polo 2 – Giudicarie Esteriori, Tione e Busa",
      subtitle:
        "Tione, Borgo Lares, Tre Ville, Comano Terme, Bleggio Superiore, Fiavé, Stenico, San Lorenzo Dorsino · Sportello lunedì 9:00–10:30 a Ponte Arche (Via C. Battisti 38) e a Tione · Tel. 0465 339584",
      action: { type: "tel", value: "0465339584" },
    },
    {
      icon: "location-outline",
      title: "Polo 3 – Val Rendena",
      subtitle:
        "Da Porte di Rendena a Madonna di Campiglio (Spiazzo, Pinzolo, Carisolo, Caderzone Terme…) · Spiazzo, Municipio, Via S. Vigilio 2 · Sportello lunedì 9:00–10:30 · Tel. 0465 801990",
      action: { type: "tel", value: "0465801990" },
    },
    {
      icon: "heart-outline",
      title: "Spazio Argento – anziani e caregiver",
      subtitle: "Via del Foro 3, Tione di Trento · Lun–ven 9:00–12:00 · Tel. 0465 339570 · spazioargento@comunitadellegiudicarie.it",
      action: { type: "tel", value: "0465339570" },
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
