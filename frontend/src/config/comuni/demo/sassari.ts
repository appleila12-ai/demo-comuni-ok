import type { ComuneConfig } from "../types";
import { INPS_PRIMA_FASE } from "../percorso";
import { percorso } from "../percorso";

// Comune di Sassari (SS) — VERSIONE DIMOSTRATIVA, SCHEDA SNELLA (13 ottobre 2026).
// Il Comune NON ha aderito a TutelApp: l'app lo segnala ai cittadini con un avviso.
// È verificato solo l'indirizzo web indicato in sitoWeb.
// Da fare: telefono, email, indirizzo e orari dei Servizi Sociali; sito dell'azienda sanitaria; bonus del Comune, associazioni, sport e tempo libero.
export const sassari: ComuneConfig = {
  slug: "sassari",
  tipo: "comune",
  nome: "Comune di Sassari",
  nomeBreve: "Sassari",
  delEnte: "del Comune di Sassari",
  soggetto: "Il Comune",
  provincia: "SS",
  regione: "Sardegna",

  ente: "Servizi Sociali",
  responsabile: "",
  indirizzo: "",
  telefono: "079 279111",
  email: "",
  pec: "protocollo@pec.comune.sassari.it",
  orari: "Il Comune ha quattro Servizi Sociali Territoriali: usa i recapiti distinti nei Punti di supporto e chiedi quale segue la tua zona. Il numero principale della scheda è il centralino comunale. Orari dei quattro uffici non verificati in questo controllo.",
  sitoWeb: "https://www.comune.sassari.it/it/servizi/servizio/Piani-personalizzati-a-favore-delle-persone-con-riconoscimento-della-condizione-di-disabilita-grave-L.-162-98/",

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
      title: "Servizio Sociale Territoriale 1",
      subtitle: "Piazza Santa Caterina 25 · 079 279733 · st1@comune.sassari.it. Fonte: pagina comunale Piani personalizzati L. 162/98, aggiornata il 13/03/2026, controllata il 17/11/2026.",
      action: { type: "tel", value: "079279733" },
    },
    {
      icon: "people-outline",
      title: "Servizio Sociale Territoriale 2",
      subtitle: "Via Giovanni Caboto · 079 2497410 · st2@comune.sassari.it. Stessa fonte comunale, controllo 17/11/2026.",
      action: { type: "tel", value: "0792497410" },
    },
    {
      icon: "people-outline",
      title: "Servizio Sociale Territoriale 3",
      subtitle: "Via Zara 2 · 079 279537 · st3@comune.sassari.it. Stessa fonte comunale, controllo 17/11/2026.",
      action: { type: "tel", value: "079279537" },
    },
    {
      icon: "people-outline",
      title: "Servizio Sociale Territoriale 4",
      subtitle: "Via Rockfeller 54 · 079 279576 · st4@comune.sassari.it. Stessa fonte comunale, controllo 17/11/2026.",
      action: { type: "tel", value: "079279576" },
    },
  ],

  trasporto:
    "Chiedi ai Servizi Sociali del Comune quali servizi di trasporto sociale sono attivi. Puoi rivolgerti anche alle associazioni di volontariato della zona (Croce Rossa, Pubbliche Assistenze, Misericordie) e alle associazioni che trovi nella sezione Associazioni.",

  esenzioneTicket: {
    label: "ASL 1 Sassari · Esenzioni ticket",
    url: "https://www.asl1sassari.it/le-esenzioni-chi-ne-ha-diritto-e-come-richiederla/",
  },

  daVerificare: true,
  dimostrativo: true,
};

// Passi 4 e 5: voci già in scheda con fonte. Passi 1-3 vuoti: nessun recapito verificato (28/10/2026).
sassari.percorsoTerritorio = percorso(sassari.puntiSupporto, [0, 1, 2, 3]);
sassari.percorsoTerritorio = { ...sassari.percorsoTerritorio, 1: [INPS_PRIMA_FASE] };
