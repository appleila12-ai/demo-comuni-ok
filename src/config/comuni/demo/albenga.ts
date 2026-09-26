import type { ComuneConfig } from "../types";

// Comune di Albenga (SV) — VERSIONE DIMOSTRATIVA.
// Il Comune NON ha aderito a TutelApp: l'app lo segnala ai cittadini con un avviso.
// Dati presi dal sito ufficiale del Comune/ente (settembre 2026), da verificare.
// Da verificare: telefono
export const albenga: ComuneConfig = {
  slug: "albenga",
  tipo: "comune",
  nome: "Comune di Albenga",
  nomeBreve: "Albenga",
  delEnte: "del Comune di Albenga",
  soggetto: "Il Comune",
  provincia: "SV",
  regione: "Liguria",

  ente: "Servizi Sociali",
  responsabile: "Ufficio Servizi Sociali – Ambito Territoriale Sociale n. 4",
  indirizzo: "Viale Martiri della Libertà 1, 17031 Albenga (SV)",
  telefono: "0182 5621",
  email: "servizisociali@comune.albenga.sv.it",
  pec: "protocollo@pec.comune.albenga.sv.it",
  orari: "Lun e Mer 9:00–12:30; Gio 15:30–17:30",
  sitoWeb: "https://www.comune.albenga.sv.it/amministrazione/unita-organizzative/ufficio-servizi-sociali/",

  logo: null,

  theme: {
    warm: "#CFB58B",
    warmSoft: "#F2EADD",
    warmDark: "#6E542A",
    cream: "#F6F5F2",
  },

  puntiSupporto: [
    {
      icon: "people-outline",
      title: "Servizi Sociali – Albenga",
      subtitle: "Ufficio Servizi Sociali – Ambito Territoriale Sociale n. 4 · Viale Martiri della Libertà 1, 17031 Albenga (SV) · Tel. 0182 5621",
      action: { type: "tel", value: "01825621" },
    },
    {
      icon: "business-outline",
      title: "Ambito Territoriale Sociale n. 4",
      subtitle: "Ambito sociale che gestisce i servizi socio-assistenziali dell'Albenganese",
      action: { type: "web", value: "https://www.comune.albenga.sv.it/amministrazione/unita-organizzative/ufficio-servizi-sociali/" },
    },
    {
      icon: "medkit-outline",
      title: "ASL 2 Savonese",
      subtitle: "Esenzione ticket per patologia e invalidità, prenotazioni e distretti sanitari",
      action: { type: "web", value: "https://www.asl2.liguria.it/" },
    },
  ],

  trasporto: "Chiedi ai Servizi Sociali di Albenga (0182 5621) quali servizi di trasporto sociale sono attivi. Puoi rivolgerti anche alle associazioni di volontariato della zona (Croce Rossa, Pubbliche Assistenze, Misericordie).",

  esenzioneTicket: {
    label: "ASL 2 Savonese · Esenzioni ticket",
    url: "https://www.asl2.liguria.it/",
  },

  daVerificare: true,
  dimostrativo: true,
};
