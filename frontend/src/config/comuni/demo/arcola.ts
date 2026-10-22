import type { ComuneConfig } from "../types";

// Comune di Arcola (SP) — VERSIONE DIMOSTRATIVA.
// Il Comune NON ha aderito a TutelApp: l'app lo segnala ai cittadini con un avviso.
// Recapiti dei Servizi Sociali: scheda dell'Assistente Sociale sul sito del Comune (aggiornata l'11/02/2026), testo copiato da Ilaria il 21/10/2026. Orari e modalità di accesso non confermati: non inseriti.
export const arcola: ComuneConfig = {
  slug: "arcola",
  tipo: "comune",
  nome: "Comune di Arcola",
  nomeBreve: "Arcola",
  delEnte: "del Comune di Arcola",
  soggetto: "Il Comune",
  provincia: "SP",
  regione: "Liguria",

  ente: "Servizi Sociali",
  responsabile: "Ufficio Servizi Sociali e Ambito",
  indirizzo: "Piazza 2 Giugno, Arcola (Ufficio Servizi Sociali e Ambito)",
  telefono: "0187 1745834",
  email: "distrettosociale@comune.arcola.sp.it",
  orari: "Ufficio Servizi Sociali, Via Luigi Valentini 89/A: lunedì–venerdì 9:00–12:00, accesso libero (dal 06/10/2023). Ufficio Ambito, Piazza 2 Giugno: appuntamento al 0187 1745834, da confermare telefonicamente",
  sitoWeb: "https://comune.arcola.sp.it/amministrazione/uffici/ufficio_39.html",

  logo: null,

  theme: {
    warm: "#9DB8A0",
    warmSoft: "#E6EFE7",
    warmDark: "#3F6446",
    cream: "#F3F6F3",
  },

  puntiSupporto: [
    {
      icon: "business-outline",
      title: "Ufficio Servizi Sociali – Via Valentini",
      subtitle: "Via Luigi Valentini 89/A (sede Arcola Ponte) · lunedì–venerdì 9:00–12:00, accesso libero · Tel. 0187 1745812 · servizi.sociali@comune.arcola.sp.it",
      action: { type: "tel", value: "01871745812" },
    },
    {
      icon: "people-outline",
      title: "Ufficio Servizi Sociali e Ambito – Arcola",
      subtitle: "Assistente sociale · Piazza 2 Giugno · Tel. 0187 1745834 · distrettosociale@comune.arcola.sp.it. Centralino del Comune: 0187 1745801",
      action: { type: "tel", value: "01871745834" },
    },
    {
      icon: "call-outline",
      title: "Distretto Sociosanitario 19 \"Val di Magra\"",
      subtitle: "Distretto di Sarzana, Ameglia, Arcola, Castelnuovo Magra, Luni, Santo Stefano di Magra e Vezzano Ligure · Tel. 0187 614507 / 0187 604933",
      action: { type: "tel", value: "0187614507" },
    },
    {
      icon: "medkit-outline",
      title: "ASL5 Spezzino",
      subtitle: "Esenzione ticket per patologia e invalidità, prenotazioni e distretti sanitari",
      action: { type: "web", value: "https://www.asl5.liguria.it/PerilCittadino/Prenotazioniticketesenzioni/Esenzioneticket.aspx" },
    },
  ],

  trasporto: "Chiedi ai Servizi Sociali del Comune quali servizi di trasporto sociale sono attivi. Puoi rivolgerti anche alle associazioni di volontariato della zona (Croce Rossa, Pubbliche Assistenze, Misericordie).",

  esenzioneTicket: {
    label: "ASL5 Spezzino · Esenzioni ticket",
    url: "https://www.asl5.liguria.it/PerilCittadino/Prenotazioniticketesenzioni/Esenzioneticket.aspx",
  },

  daVerificare: true,
  dimostrativo: true,
};
