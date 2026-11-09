import type { ComuneConfig } from "../types";
import { percorso } from "../percorso";

// Comune di Masserano (BI) — VERSIONE DIMOSTRATIVA, SCHEDA SNELLA (04/11/2026).
// Il Comune NON ha aderito a TutelApp: l'app lo segnala ai cittadini con un avviso.
// Fonti (lette il 04/11/2026):
//  - sito del Comune di Masserano: pagina "Il Municipio" (indirizzo, telefono, PEC), pagina Orari
//    (Ufficio Protocollo–Segreteria), pagina "Numeri utili" e categoria "Salute, benessere e assistenza"
//    (nessun ufficio Servizi Sociali, solo assegno nuclei familiari numerosi e assegno di maternità);
//  - Regione Piemonte, indirizzario dei servizi sociali (pubblicazione 2022, Appendice 1): Masserano
//    è tra i Comuni del Consorzio C.I.S.S.A.B.O. di Cossato (non del Consorzio IRIS di Biella);
//  - ASL BI: pagina "Come ottenere e rinnovare l'esenzione ticket" (indicata dall'URP, 02/11/2026).
// Il sito del Comune non pubblica un'email ordinaria (solo modulo di contatto e PEC).
// Da fare: riconfermare con il C.I.S.S.A.B.O. (recapiti, orari e sportello per la disabilità, dato 2022);
// bonus del Comune per la disabilità, associazioni, sport e tempo libero (nessuna fonte ufficiale trovata).
export const masserano: ComuneConfig = {
  slug: "masserano",
  tipo: "comune",
  nome: "Comune di Masserano",
  nomeBreve: "Masserano",
  delEnte: "del Comune di Masserano",
  soggetto: "Il Comune",
  provincia: "BI",
  regione: "Piemonte",

  ente: "Comune di Masserano",
  responsabile: "Ufficio Protocollo – Segreteria",
  indirizzo: "Via Roma 190, 13866 Masserano (BI)",
  telefono: "015 96927",
  email: "",
  pec: "comune.masserano.bi@legalmail.it",
  orari: "Ufficio Protocollo–Segreteria: lun 9:00–12:00 · mar, gio e ven 8:00–12:00",
  sitoWeb: "https://www.comune.masserano.bi.it",

  logo: null,

  theme: {
    warm: "#E6A07C",
    warmSoft: "#F8E4D8",
    warmDark: "#9A4A25",
    cream: "#F8F3EC",
  },

  puntiSupporto: [
    {
      icon: "business-outline",
      title: "Comune di Masserano",
      subtitle:
        "Centralino del Municipio · Via Roma 190 · Tel. 015 96927 · Protocollo–Segreteria: lun 9:00–12:00, mar, gio e ven 8:00–12:00",
      action: { type: "tel", value: "01596927" },
    },
    {
      icon: "people-outline",
      title: "C.I.S.S.A.B.O. – servizi sociali (Cossato)",
      subtitle:
        "Consorzio intercomunale dei servizi socio-assistenziali del Biellese orientale, di cui fa parte Masserano · Via Mazzini 2/m, Cossato · Tel. 015 9899611",
      action: { type: "tel", value: "0159899611" },
    },
    {
      icon: "medkit-outline",
      title: "ASL BI",
      subtitle: "Esenzione ticket per patologia e invalidità, scelta del medico e servizi sanitari del territorio",
      action: { type: "web", value: "https://aslbi.piemonte.it" },
    },
  ],

  trasporto:
    "Chiedi al Comune (015 96927) o al C.I.S.S.A.B.O. (015 9899611) quali servizi di trasporto sociale sono attivi. Puoi rivolgerti anche alle associazioni di volontariato della zona (Croce Rossa, Pubbliche Assistenze, Misericordie) e alle associazioni che trovi nella sezione Associazioni.",

  esenzioneTicket: {
    label: "ASL BI · Esenzioni ticket",
    url: "https://aslbi.piemonte.it/come-fare-per/come-ottenere-e-rinnovare-lesenzione-ticket",
  },

  daVerificare: true,
  dimostrativo: true,
};

// Passi 4 e 5: Comune e C.I.S.S.A.B.O. (voci già in scheda, con fonte). Passi 1-3 vuoti: nessun recapito verificato.
masserano.percorsoTerritorio = percorso(masserano.puntiSupporto, [0, 1]);
