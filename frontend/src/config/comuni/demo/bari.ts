import type { ComuneConfig } from "../types";
import { percorso, ASL_BARI_CITTA } from "../percorso";

// Comune di Bari (BA) — VERSIONE DIMOSTRATIVA (aggiornata il 15 ottobre 2026).
// Il Comune NON ha aderito a TutelApp: l'app lo segnala ai cittadini con un avviso.
// Servizi sociali: https://www.comune.bari.it/-/richiesta-colloquio-con-servizio-sociale-professionale (aggiornata 28/09/2026, controllata 11/11/2026).
// Recapiti dei Municipi e conflitti con PDF ottobre 2025: docs/registro/chatgpt-2026-11-11-puglia-bari-servizi.md.
// Fonte 1: pagina "Porta Unica di Accesso (P.U.A.)" di ASL Bari su sanita.puglia.it, incollata da Ilaria il 15/10/2026: indirizzi, telefoni, email e orari confermati.
// Sulla pagina i moduli e le informative sono datati tra marzo e settembre 2025 (dai nomi dei file). La pagina non collega le due sedi a un Municipio o Distretto.
// Fonte 2: piè di pagina del sito del Comune di Bari (file allegato da Ilaria il 15/10/2026): Palazzo di Città, centralino e URP. Sono contatti generali, non lo sportello sociale.
// Da fare: bonus del Comune, associazioni, sport e tempo libero; chiarimento orari discordanti dei Municipi IV e V.
export const bari: ComuneConfig = {
  slug: "bari",
  tipo: "comune",
  nome: "Comune di Bari",
  nomeBreve: "Bari",
  delEnte: "del Comune di Bari",
  soggetto: "Il Comune",
  provincia: "BA",
  regione: "Puglia",

  ente: "Servizi Sociali · Segretariato Sociale",
  responsabile: "",
  indirizzo: "Sportello sociale centrale: Largo Ignazio Chiurlia 27. Se sei residente, rivolgiti al tuo Municipio: sedi qui sotto",
  telefono: "080 5777777",
  email: "rip.serviziallapersona@comune.bari.it",
  pec: "serviziallapersona.comunebari@pec.rupar.puglia.it",
  orari: "Per il colloquio prenota telefonicamente. Gli orari cambiano secondo lo sportello",
  sitoWeb: "https://www.comune.bari.it/-/richiesta-colloquio-con-servizio-sociale-professionale",

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
      title: "Servizi Sociali del Comune",
      subtitle: "Per informazioni e appuntamenti chiama il numero unico 080 5777777. Colloquio gratuito, servizio attivo tutto l'anno; i residenti accedono al Segretariato Sociale del proprio Municipio. Fonte: Comune, controllata 11/11/2026",
      action: { type: "tel", value: "0805777777" },
    },
    {
      icon: "call-outline",
      title: "Comune di Bari · URP (Ufficio Relazioni con il Pubblico)",
      subtitle: "Informazioni generali sul Comune, non è lo sportello sociale. Palazzo di Città, Corso Vittorio Emanuele II 84 · URP 080 5772390 (800 018291 solo da telefono fisso) · Centralino 080 577 1111",
      action: { type: "tel", value: "0805772390" },
    },
    {
      icon: "business-outline",
      title: "Porta Unica di Accesso (PUA), ASL Bari",
      subtitle: "Ingresso unico per chiedere servizi sanitari e sociosanitari del distretto (assistenza domiciliare, centri diurni e residenziali, trasporto verso centri riabilitativi) a chi ne ha diritto. Telefono dal lunedì al venerdì: 080 5842798 (12:00–13:00). Sedi per le domande cartacee: via Caduti di Via Fani 25 (lun, mer, gio 9:00–12:00; mar 15:00–17:00) e via Giulio Petroni 47 (mar, mer, ven 9:00–12:00; gio 15:00–17:00). Email: pua.bari@asl.bari.it. Dati dalla pagina ufficiale dell'ASL Bari",
      action: { type: "tel", value: "0805842798" },
    },
    {
      icon: "medkit-outline",
      title: "ASL Bari",
      subtitle: "Esenzione ticket per patologia e invalidità, scelta del medico e servizi sanitari del territorio",
      action: { type: "web", value: "https://www.sanita.puglia.it" },
    },
    // Fonti comunali dei singoli Municipi: URL completi e date nel registro; controllate 11/11/2026.
    {
      icon: "people-outline",
      title: "Municipio I · Segretariato Sociale",
      subtitle: "Via Trevisani 206 · 080 5772965 / 080 5772914 · municipio1@comune.bari.it · Lun-ven 9:00-13:00; mar e gio anche 15:30-17:30. Prenota per telefono",
      action: { type: "tel", value: "0805772965" },
    },
    {
      icon: "people-outline",
      title: "Municipio II · Segretariato Sociale",
      subtitle: "Corso Benedetto Croce 96 · 080 5774844 · municipio2@comune.bari.it · Lun-ven 9:00-13:00; mar anche 15:30-17:30. Prenota per telefono",
      action: { type: "tel", value: "0805774844" },
    },
    {
      icon: "people-outline",
      title: "Municipio III · Segretariato Sociale",
      subtitle: "Via Vincenzo Ricchioni 1 · 080 5774642 · municipio3@comune.bari.it · Lun-ven 9:00-13:00; mar e gio anche 15:30-17:30. Prenota per telefono",
      action: { type: "tel", value: "0805774642" },
    },
    {
      icon: "people-outline",
      title: "Municipio IV · Segretariato Sociale",
      subtitle: "Via Vittorio Veneto 92, Carbonara · 080 5774932 · municipio4@comune.bari.it · Per appuntamenti e orari chiama lo sportello",
      action: { type: "tel", value: "0805774932" },
    },
    {
      icon: "people-outline",
      title: "Municipio V · Segretariato Sociale",
      subtitle: "Piazza Gianmarko Bellini 1 · 080 5776043 · municipio5@comune.bari.it · Per appuntamenti e orari chiama lo sportello",
      action: { type: "tel", value: "0805776043" },
    },
    // https://www.comune.bari.it/-/novita/comunicati-stampa/supporto-alle-persone-con-disabilita-e-anziane-non-autosufficienti-programmati-appuntamenti-mensili-sportello-urca-nei-centri-servizi-per-le-famiglie-fino-a-giugno-2027 (08/10/2026, controllata 11/11/2026).
    {
      icon: "information-circle-outline",
      title: "Sportello URCA · disabilità e caregiver",
      subtitle: "Informazioni, orientamento e accompagnamento per persone con disabilità, decadimento cognitivo e anziani non autosufficienti e le loro famiglie. Incontri mensili nei Centri Servizi per le Famiglie fino a giugno 2027. Per informazioni su date e sedi: 379 3495993 · sportello.urca.comunebari@gmail.com",
      action: { type: "tel", value: "3793495993" },
    },
  ],

  trasporto:
    "Chiedi ai Servizi Sociali del Comune quali servizi di trasporto sociale sono attivi. Puoi rivolgerti anche alle associazioni di volontariato della zona (Croce Rossa, Pubbliche Assistenze, Misericordie) e alle associazioni che trovi nella sezione Associazioni.",

  esenzioneTicket: {
    label: "ASL Bari · Esenzioni ticket",
    url: "https://www.sanita.puglia.it",
  },

  daVerificare: true,
  dimostrativo: true,
};

// Passi 4 e 5: voci già in scheda con fonte. Passo 2 senza voci: la pagina della Medicina legale non è leggibile o non è stata verificata (28/10/2026); chiesta conferma all'azienda sanitaria.
bari.percorsoTerritorio = percorso(bari.puntiSupporto, [0, 4, 5, 6, 7, 8, 9, 2], [ASL_BARI_CITTA]);
