import type { ComuneConfig } from "../types";
import { percorso, ASL_BARI_CITTA } from "../percorso";

// Comune di Bari (BA) — VERSIONE DIMOSTRATIVA (aggiornata il 15 ottobre 2026).
// Il Comune NON ha aderito a TutelApp: l'app lo segnala ai cittadini con un avviso.
// Il sito del Comune di Bari non si apre in automatico: recapiti e orari dei Servizi Sociali e del Segretariato Sociale del Comune NON sono verificati.
// Fonte 1: pagina "Porta Unica di Accesso (P.U.A.)" di ASL Bari su sanita.puglia.it, incollata da Ilaria il 15/10/2026: indirizzi, telefoni, email e orari confermati.
// Sulla pagina i moduli e le informative sono datati tra marzo e settembre 2025 (dai nomi dei file). La pagina non collega le due sedi a un Municipio o Distretto.
// Fonte 2: piè di pagina del sito del Comune di Bari (file allegato da Ilaria il 15/10/2026): Palazzo di Città, centralino e URP. Sono contatti generali, non lo sportello sociale.
// Da fare: recapiti dei Servizi Sociali e del Segretariato Sociale per Municipio dal sito del Comune, bonus del Comune, associazioni, sport e tempo libero.
export const bari: ComuneConfig = {
  slug: "bari",
  tipo: "comune",
  nome: "Comune di Bari",
  nomeBreve: "Bari",
  delEnte: "del Comune di Bari",
  soggetto: "Il Comune",
  provincia: "BA",
  regione: "Puglia",

  ente: "Servizi Sociali",
  responsabile: "",
  indirizzo: "",
  telefono: "",
  email: "",
  pec: "",
  orari: "",
  sitoWeb: "https://www.comune.bari.it/argomenti/servizi-sociali-e-welfare",

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
      subtitle: "Primo ascolto sociale: recapiti e orari sono sul sito del Comune",
      action: { type: "web", value: "https://www.comune.bari.it/argomenti/servizi-sociali-e-welfare" },
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
bari.percorsoTerritorio = percorso(bari.puntiSupporto, [0, 2], [ASL_BARI_CITTA]);
