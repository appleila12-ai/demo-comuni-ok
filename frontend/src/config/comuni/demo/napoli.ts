import type { ComuneConfig } from "../types";
import { percorso } from "../percorso";

// Comune di Napoli (NA) — VERSIONE DIMOSTRATIVA, SCHEDA SNELLA (13 ottobre 2026).
// Il Comune NON ha aderito a TutelApp: l'app lo segnala ai cittadini con un avviso.
// Il sito del Comune e del CIP Campania non si aprono in automatico.
// 16 ottobre 2026: inseriti i 20 Centri Servizi Sociali Territoriali (indirizzo e telefono) dalla pagina ufficiale del Comune "Indirizzi dei Centri Servizi Sociali Territoriali" (ultimo aggiornamento 23/05/2025), testo incollato dalla dott.ssa Baudone. Telefono della scheda = centralino unico del Comune (0817951111), dal piè di pagina dello stesso sito.
// Da fare: email/PEC dei servizi sociali, orari.
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
  indirizzo: "Palazzo San Giacomo, Piazza Municipio, 80133 Napoli (sede del Comune)",
  telefono: "081 7951111",
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
      title: "Servizi Sociali · Arenella",
      subtitle: "Via G. Gigante 242 (c/o S.A.C.) · Tel. 081.7950160/61/62",
      action: { type: "tel", value: "0817950160" },
    },
    {
      icon: "people-outline",
      title: "Servizi Sociali · Avvocata – Montecalvario – San Giuseppe – Porto",
      subtitle: "Piazza Dante 93 · Tel. 081.7950260/61/62",
      action: { type: "tel", value: "0817950260" },
    },
    {
      icon: "people-outline",
      title: "Servizi Sociali · Bagnoli",
      subtitle: "Via Diocleziano 330 · Tel. 081.7950760/61/62",
      action: { type: "tel", value: "0817950760" },
    },
    {
      icon: "people-outline",
      title: "Servizi Sociali · Barra",
      subtitle: "Corso Sirena 305 · Tel. 081.7950442/43",
      action: { type: "tel", value: "0817950442" },
    },
    {
      icon: "people-outline",
      title: "Servizi Sociali · Chiaia – San Ferdinando – Posillipo",
      subtitle: "Piazza Santa Maria degli Angeli a Pizzofalcone 1 · Tel. 081.7951760/61/62",
      action: { type: "tel", value: "0817951760" },
    },
    {
      icon: "people-outline",
      title: "Servizi Sociali · Chiaiano",
      subtitle: "Corso Chiaiano 50 · Tel. 081.7950019/15",
      action: { type: "tel", value: "0817950019" },
    },
    {
      icon: "people-outline",
      title: "Servizi Sociali · Fuorigrotta",
      subtitle: "Via Diocleziano 330 · Tel. 081.7950762/63",
      action: { type: "tel", value: "0817950762" },
    },
    {
      icon: "people-outline",
      title: "Servizi Sociali · Mercato – Pendino",
      subtitle: "Corso Garibaldi 394 · Tel. 081.7950860/61/62",
      action: { type: "tel", value: "0817950860" },
    },
    {
      icon: "people-outline",
      title: "Servizi Sociali · Miano",
      subtitle: "Via Valente 65 · Tel. 081.7950960/61/62",
      action: { type: "tel", value: "0817950960" },
    },
    {
      icon: "people-outline",
      title: "Servizi Sociali · Pianura",
      subtitle: "Via Parroco Simioli 6 · Tel. 081.7951060/61/62",
      action: { type: "tel", value: "0817951060" },
    },
    {
      icon: "people-outline",
      title: "Servizi Sociali · Piscinola – Marianella",
      subtitle: "Via E. Scaglione 464 · Tel. 081.7959352/54/50",
      action: { type: "tel", value: "0817959352" },
    },
    {
      icon: "people-outline",
      title: "Servizi Sociali · Poggioreale",
      subtitle: "Via Emanuele Gianturco 99 · Tel. 081.7951360/66",
      action: { type: "tel", value: "0817951360" },
    },
    {
      icon: "people-outline",
      title: "Servizi Sociali · Ponticelli",
      subtitle: "Viale Ernest Heminguay 102 (centro Polifunzionale) · Tel. 081.7951460/61/62",
      action: { type: "tel", value: "0817951460" },
    },
    {
      icon: "people-outline",
      title: "Servizi Sociali · San Giovanni",
      subtitle: "Via Atripaldi 1 · Tel. 081.7951860/61/63/64",
      action: { type: "tel", value: "0817951860" },
    },
    {
      icon: "people-outline",
      title: "Servizi Sociali · San Lorenzo – Vicaria",
      subtitle: "Via Tribunali (ex Osp. Pace) · Tel. 081.7951968/69/70",
      action: { type: "tel", value: "0817951968" },
    },
    {
      icon: "people-outline",
      title: "Servizi Sociali · San Pietro a Patierno",
      subtitle: "Corso San Pietro 30 · Tel. 081.7952060/61/62/63",
      action: { type: "tel", value: "0817952060" },
    },
    {
      icon: "people-outline",
      title: "Servizi Sociali · Scampia",
      subtitle: "Viale della Resistenza, Comparto 12 · Tel. 081.7952160/62/63",
      action: { type: "tel", value: "0817952160" },
    },
    {
      icon: "people-outline",
      title: "Servizi Sociali · Secondigliano",
      subtitle: "Piazzetta del Casale a Secondigliano 6/7 · Tel. 081.7952256",
      action: { type: "tel", value: "0817952256" },
    },
    {
      icon: "people-outline",
      title: "Servizi Sociali · Soccavo",
      subtitle: "Piazza Giovanni XXIII 1 · Tel. 081.7952361/62/63/64",
      action: { type: "tel", value: "0817952361" },
    },
    {
      icon: "people-outline",
      title: "Servizi Sociali · Stella – San Carlo",
      subtitle: "Via SS. Giovanni e Paolo 125 · Tel. 081.7952560/61/62",
      action: { type: "tel", value: "0817952560" },
    },
    {
      icon: "list-outline",
      title: "Elenco ufficiale dei Centri",
      subtitle: "Pagina del Comune di Napoli con tutti gli indirizzi dei Centri Servizi Sociali Territoriali",
      action: { type: "web", value: "https://www.comune.napoli.it/articolo_tematico/welfare-e-pari-opportunita/segretariato-sociale-e-servizio-sociale/indirizzi-centri-servizi-sociali-territoriali/" },
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

// Passi 4 e 5: solo l'elenco ufficiale dei Centri (20 sedi nella scheda). Passo 2 senza voci: la pagina Medicina legale ASL Napoli 1 non è leggibile (da verificare).
napoli.percorsoTerritorio = percorso(napoli.puntiSupporto, [20]);
