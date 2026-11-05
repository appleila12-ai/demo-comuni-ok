import type { ComuneConfig } from "../types";
import { INPS_TERZA_FASE, percorsoAsl5 } from "../percorso";

// Comune di Pignone (SP) — VERSIONE DIMOSTRATIVA (scheda del 05/11/2026).
// Il Comune NON ha aderito a TutelApp: l'app lo segnala ai cittadini con un avviso.
// Fonti: pagine ufficiali del Comune e dell'ambito sociale, indicate da Ilaria dopo una ricerca del 04/11/2026 (non riletta direttamente): ASL 5, siti dei Comuni, Prefettura della Spezia.
// L'ufficio è 'Contabilità – Tributi – Servizi sociali' e le sue email sono servizifinanziari@ e tributi@: non sono usate come email di contatto né come destinatario, si usa la PEC generale.
// Da verificare con l'ente: sede e orari dello Sportello unico sociosanitario (SUSS), email sociale dedicata, associazioni.
// Dove un dato non è stato trovato su una fonte ufficiale il campo è lasciato vuoto: non va completato da altre fonti.
export const pignone: ComuneConfig = {
  slug: "pignone",
  tipo: "comune",
  nome: "Comune di Pignone",
  nomeBreve: "Pignone",
  delEnte: "del Comune di Pignone",
  soggetto: "Il Comune",
  provincia: "SP",
  regione: "Liguria",

  ente: "Ufficio Contabilità – Tributi – Servizi sociali",
  responsabile: "Ufficio Servizi sociali",
  indirizzo: "Via Casale 89, Pignone (SP)",
  telefono: "0187 887002",
  email: "",
  pec: "comune.pignone@legalmail.it",
  orari: "Martedì e venerdì 9:00–13:00 su prenotazione",
  sitoWeb: "https://servizi.comune.pignone.sp.it/amministrazione/uffici/ufficio_7.html",

  logo: null,

  theme: {
    warm: "#9DB8B0",
    warmSoft: "#E4EEEB",
    warmDark: "#33594F",
    cream: "#F3F6F5",
  },

  puntiSupporto: [
    {
      icon: "people-outline",
      title: "Servizi sociali – Pignone",
      subtitle:
        "Ufficio Contabilità – Tributi – Servizi sociali · Via Casale 89 · Tel. 0187 887002 · martedì e venerdì 9:00–13:00 su prenotazione",
      action: { type: "tel", value: "0187887002" },
    },
    {
      icon: "business-outline",
      title: "Ambito Sociale n. 60",
      subtitle:
        "Beverino, Borghetto di Vara (capofila), Brugnato, Carrodano, Pignone, Sesta Godano e Zignago",
      action: { type: "web", value: "https://www.comune.borghettodivara.sp.it/it/unita_organizzative/ambito-territoriale-sociale-n-60" },
    },
    {
      icon: "medkit-outline",
      title: "ASL5 Spezzino",
      subtitle:
        "Esenzione ticket per patologia e invalidità, prenotazioni e distretti sanitari",
      action: { type: "web", value: "https://www.asl5.liguria.it/PerilCittadino/Prenotazioniticketesenzioni/Esenzioneticket.aspx" },
    },
  ],

  trasporto:
    "Chiedi ai Servizi sociali di Pignone (0187 887002) quali servizi di trasporto sociale sono attivi. Puoi rivolgerti anche alle associazioni di volontariato della zona (Croce Rossa, Pubbliche Assistenze, Misericordie).",

  esenzioneTicket: {
    label: "ASL5 Spezzino · Esenzioni ticket",
    url: "https://www.asl5.liguria.it/PerilCittadino/Prenotazioniticketesenzioni/Esenzioneticket.aspx",
  },

  daVerificare: true,
  dimostrativo: true,
};

// Passi di "Come ottenere il riconoscimento": solo voci già in scheda con fonte (ASL 5 verificata il 28/10/2026).
pignone.percorsoTerritorio = percorsoAsl5(pignone.puntiSupporto, [0, 1]);

// Passo 1: provincia nella terza fase (dal 1° marzo 2026) della sperimentazione INPS.
pignone.percorsoTerritorio = { ...pignone.percorsoTerritorio, 1: [INPS_TERZA_FASE] };
