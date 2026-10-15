import type { ComuneConfig } from "../types";

// Comune di Napoli (NA) — VERSIONE DIMOSTRATIVA (completata il 15 ottobre 2026).
// Il Comune NON ha aderito a TutelApp: l'app lo segnala ai cittadini con un avviso.
// Fonte: pagina del Comune "Indirizzi dei Centri Servizi Sociali Territoriali", ultimo aggiornamento indicato sulla pagina 23/05/2025,
// incollata da Ilaria il 15/10/2026 perché il sito non si apre in automatico. Indirizzi e telefoni come nella pagina; i numeri di fax non sono riportati.
// Le email dei centri NON sono nella pagina e non sono inserite (quelle usate il 13/10 non avevano fonte). Centralino unico del Comune: 081 795 1111.
// Non verificati: ASL Napoli 1 Centro (solo il sito) e CIP Campania (sito non leggibile).
// Da fare: bonus del Comune, associazioni, sport e tempo libero.
export const napoli: ComuneConfig = {
  slug: "napoli",
  tipo: "comune",
  nome: "Comune di Napoli",
  nomeBreve: "Napoli",
  delEnte: "del Comune di Napoli",
  soggetto: "Il Comune",
  provincia: "NA",
  regione: "Campania",

  ente: "Servizi Sociali",
  responsabile: "",
  indirizzo: "",
  telefono: "",
  email: "",
  pec: "",
  orari: "",
  sitoWeb: "https://www.comune.napoli.it",

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
      title: "Centri Servizi Sociali Territoriali",
      subtitle: "Primo ascolto sociale: c'è un centro per ogni zona della città. Qui sotto trovi indirizzo e telefono di ciascuno, dall'elenco del Comune aggiornato al 23/05/2025. Centralino del Comune: 081 795 1111",
      action: { type: "web", value: "https://www.comune.napoli.it/articolo_tematico/welfare-e-pari-opportunita/segretariato-sociale-e-servizio-sociale/indirizzi-centri-servizi-sociali-territoriali/" },
    },
    {
      icon: "people-outline",
      title: "Arenella",
      subtitle: "Centro Servizi Sociali Territoriale: Via G. Gigante 242 (c/o S.A.C.) · Tel. 081 795 0160/61/62",
      action: { type: "tel", value: "0817950160" },
    },
    {
      icon: "people-outline",
      title: "Avvocata – Montecalvario – San Giuseppe – Porto",
      subtitle: "Centro Servizi Sociali Territoriale: Piazza Dante 93 · Tel. 081 795 0260/61/62",
      action: { type: "tel", value: "0817950260" },
    },
    {
      icon: "people-outline",
      title: "Bagnoli",
      subtitle: "Centro Servizi Sociali Territoriale: Via Diocleziano 330 · Tel. 081 795 0760/61/62",
      action: { type: "tel", value: "0817950760" },
    },
    {
      icon: "people-outline",
      title: "Barra",
      subtitle: "Centro Servizi Sociali Territoriale: Corso Sirena 305 · Tel. 081 795 0442/43",
      action: { type: "tel", value: "0817950442" },
    },
    {
      icon: "people-outline",
      title: "Chiaia – San Ferdinando – Posillipo",
      subtitle: "Centro Servizi Sociali Territoriale: Piazza Santa Maria degli Angeli a Pizzofalcone 1 · Tel. 081 795 1760/61/62",
      action: { type: "tel", value: "0817951760" },
    },
    {
      icon: "people-outline",
      title: "Chiaiano",
      subtitle: "Centro Servizi Sociali Territoriale: Corso Chiaiano 50 · Tel. 081 795 0019/15",
      action: { type: "tel", value: "0817950019" },
    },
    {
      icon: "people-outline",
      title: "Fuorigrotta",
      subtitle: "Centro Servizi Sociali Territoriale: Via Diocleziano 330 · Tel. 081 795 0762/63",
      action: { type: "tel", value: "0817950762" },
    },
    {
      icon: "people-outline",
      title: "Mercato – Pendino",
      subtitle: "Centro Servizi Sociali Territoriale: Corso Garibaldi 394 · Tel. 081 795 0860/61/62",
      action: { type: "tel", value: "0817950860" },
    },
    {
      icon: "people-outline",
      title: "Miano",
      subtitle: "Centro Servizi Sociali Territoriale: Via Valente 65 · Tel. 081 795 0960/61/62",
      action: { type: "tel", value: "0817950960" },
    },
    {
      icon: "people-outline",
      title: "Pianura",
      subtitle: "Centro Servizi Sociali Territoriale: Via Parroco Simioli 6 · Tel. 081 795 1060/61/62",
      action: { type: "tel", value: "0817951060" },
    },
    {
      icon: "people-outline",
      title: "Piscinola – Marianella",
      subtitle: "Centro Servizi Sociali Territoriale: Via E. Scaglione 464 · Tel. 081 795 9352/54/50",
      action: { type: "tel", value: "0817959352" },
    },
    {
      icon: "people-outline",
      title: "Poggioreale",
      subtitle: "Centro Servizi Sociali Territoriale: Via Emanuele Gianturco 99 · Tel. 081 795 1360/66",
      action: { type: "tel", value: "0817951360" },
    },
    {
      icon: "people-outline",
      title: "Ponticelli",
      subtitle: "Centro Servizi Sociali Territoriale: Viale Ernest Hemingway 102 (presso il centro polifunzionale) · Tel. 081 795 1460/61/62",
      action: { type: "tel", value: "0817951460" },
    },
    {
      icon: "people-outline",
      title: "San Giovanni",
      subtitle: "Centro Servizi Sociali Territoriale: Via Atripaldi 1 · Tel. 081 795 1860/61/63/64",
      action: { type: "tel", value: "0817951860" },
    },
    {
      icon: "people-outline",
      title: "San Lorenzo – Vicaria",
      subtitle: "Centro Servizi Sociali Territoriale: Via Tribunali (ex Ospedale Pace) · Tel. 081 795 1968/69/70",
      action: { type: "tel", value: "0817951968" },
    },
    {
      icon: "people-outline",
      title: "San Pietro a Patierno",
      subtitle: "Centro Servizi Sociali Territoriale: Corso San Pietro 30 · Tel. 081 795 2060/61/62/63",
      action: { type: "tel", value: "0817952060" },
    },
    {
      icon: "people-outline",
      title: "Scampia",
      subtitle: "Centro Servizi Sociali Territoriale: Viale della Resistenza, Comparto 12 · Tel. 081 795 2160/62/63",
      action: { type: "tel", value: "0817952160" },
    },
    {
      icon: "people-outline",
      title: "Secondigliano",
      subtitle: "Centro Servizi Sociali Territoriale: Piazzetta del Casale a Secondigliano 6/7 · Tel. 081 795 2256",
      action: { type: "tel", value: "0817952256" },
    },
    {
      icon: "people-outline",
      title: "Soccavo",
      subtitle: "Centro Servizi Sociali Territoriale: Piazza Giovanni XXIII 1 · Tel. 081 795 2361/62/63/64",
      action: { type: "tel", value: "0817952361" },
    },
    {
      icon: "people-outline",
      title: "Stella – San Carlo",
      subtitle: "Centro Servizi Sociali Territoriale: Via SS. Giovanni e Paolo 125 · Tel. 081 795 2560/61/62",
      action: { type: "tel", value: "0817952560" },
    },
    {
      icon: "medkit-outline",
      title: "ASL Napoli 1 Centro",
      subtitle: "Esenzione ticket per patologia e invalidità, scelta del medico e servizi sanitari del territorio",
      action: { type: "web", value: "https://www.aslnapoli1centro.it" },
    },
  ],

  trasporto:
    "Chiedi ai Servizi Sociali del Comune quali servizi di trasporto sociale sono attivi. Puoi rivolgerti anche alle associazioni di volontariato della zona (Croce Rossa, Pubbliche Assistenze, Misericordie) e alle associazioni che trovi nella sezione Associazioni.",

  esenzioneTicket: {
    label: "ASL Napoli 1 Centro · Esenzioni ticket",
    url: "https://www.aslnapoli1centro.it",
  },

  daVerificare: true,
  dimostrativo: true,
};
