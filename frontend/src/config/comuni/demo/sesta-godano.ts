import type { ComuneConfig } from "../types";
import { INPS_TERZA_FASE, percorsoAsl5 } from "../percorso";

// Comune di Sesta Godano (SP) — VERSIONE DIMOSTRATIVA (scheda del 05/11/2026).
// Il Comune NON ha aderito a TutelApp: l'app lo segnala ai cittadini con un avviso.
// Fonti: pagine ufficiali del Comune e dell'ambito sociale, indicate da Ilaria dopo una ricerca del 04/11/2026 (non riletta direttamente): ASL 5, siti dei Comuni, Prefettura della Spezia.
// Da verificare con l'ente: email sociale dedicata, associazioni.
// Dove un dato non è stato trovato su una fonte ufficiale il campo è lasciato vuoto: non va completato da altre fonti.
export const sestaGodano: ComuneConfig = {
  slug: "sesta-godano",
  tipo: "comune",
  nome: "Comune di Sesta Godano",
  nomeBreve: "Sesta Godano",
  delEnte: "del Comune di Sesta Godano",
  soggetto: "Il Comune",
  provincia: "SP",
  regione: "Liguria",

  ente: "Ufficio Servizi sociali",
  responsabile: "Ufficio Servizi sociali",
  indirizzo: "Piazza Marconi 1, Sesta Godano (SP)",
  telefono: "0187 891525",
  email: "protocollo@comune.sestagodano.sp.it",
  pec: "comune.sestagodano@legalmail.it",
  orari: "Ufficio lun–sab 9:00–12:00 · assistente sociale solo su appuntamento",
  sitoWeb: "https://comune.sestagodano.sp.it/amministrazione/unita_organizzativa/ufficio-servizi-sociali/",

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
      title: "Ufficio Servizi sociali – Sesta Godano",
      subtitle:
        "Piazza Marconi 1 · Tel. 0187 891525 · ufficio lun–sab 9:00–12:00; assistente sociale solo su appuntamento",
      action: { type: "tel", value: "0187891525" },
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
    "Chiedi all'Ufficio Servizi sociali di Sesta Godano (0187 891525) quali servizi di trasporto sociale sono attivi. Puoi rivolgerti anche alle associazioni di volontariato della zona (Croce Rossa, Pubbliche Assistenze, Misericordie).",

  esenzioneTicket: {
    label: "ASL5 Spezzino · Esenzioni ticket",
    url: "https://www.asl5.liguria.it/PerilCittadino/Prenotazioniticketesenzioni/Esenzioneticket.aspx",
  },

  daVerificare: true,
  dimostrativo: true,
};

// Passi di "Come ottenere il riconoscimento": solo voci già in scheda con fonte (ASL 5 verificata il 28/10/2026).
sestaGodano.percorsoTerritorio = percorsoAsl5(sestaGodano.puntiSupporto, [0, 1]);

// Passo 1: provincia nella terza fase (dal 1° marzo 2026) della sperimentazione INPS.
sestaGodano.percorsoTerritorio = { ...sestaGodano.percorsoTerritorio, 1: [INPS_TERZA_FASE] };
