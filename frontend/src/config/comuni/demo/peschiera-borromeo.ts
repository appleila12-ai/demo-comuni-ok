import type { ComuneConfig } from "../types";
import { INPS_TERZA_FASE, percorso } from "../percorso";

// Comune di Peschiera Borromeo (MI) — VERSIONE DIMOSTRATIVA (scheda del 05/11/2026).
// Il Comune NON ha aderito a TutelApp: l'app lo segnala ai cittadini con un avviso.
// Fonti: pagine ufficiali del Comune e del Distretto Sociale Paullese, indicate da Ilaria dopo una ricerca del 04/11/2026 (non riletta direttamente).
// Il portale della trasparenza indica un orario diverso (8:00–12:45): si usa quello delle schede dei servizi, che coincidono tra loro.
// Il 'Bonus sport' per cittadini con disabilità riguarda la stagione 2022/23 (domande chiuse nel 2022): non inserito.
// Il Fondo per la non autosufficienza 2025-2026 (ex Misura B2) del Distretto ha le domande chiuse; la misura regionale è già tra i bonus della Lombardia, quindi non è duplicata a livello di Comune.
// Da verificare con l'ente: associazioni per la disabilità con recapiti, sportello sanitario di riferimento per certificati ed esenzioni.
// Dove un dato non è stato trovato su una fonte ufficiale il campo è lasciato vuoto: non va completato da altre fonti.
export const peschieraBorromeo: ComuneConfig = {
  slug: "peschiera-borromeo",
  tipo: "comune",
  nome: "Comune di Peschiera Borromeo",
  nomeBreve: "Peschiera Borromeo",
  delEnte: "del Comune di Peschiera Borromeo",
  soggetto: "Il Comune",
  provincia: "MI",
  regione: "Lombardia",

  ente: "Servizi sociali e sociosanitari",
  responsabile: "Servizi sociali e sociosanitari",
  indirizzo: "Via XXV Aprile 1, 20068 Peschiera Borromeo (MI)",
  telefono: "02 51690503",
  email: "servizisociali@comune.peschieraborromeo.mi.it",
  pec: "comune.peschieraborromeo@pec.regione.lombardia.it",
  orari: "Lun–ven 8:30–12:30 su appuntamento · telefonate 10:00–12:30",
  sitoWeb: "https://www.comune.peschieraborromeo.mi.it/it/unita_organizzative/4337",

  logo: null,

  theme: {
    warm: "#C3B4D9",
    warmSoft: "#ECE6F4",
    warmDark: "#5B4682",
    cream: "#F6F4F1",
  },

  puntiSupporto: [
    {
      icon: "people-outline",
      title: "Servizi sociali e sociosanitari – Peschiera Borromeo",
      subtitle:
        "Via XXV Aprile 1 · Tel. 02 51690503 (segretariato 02 51690596) · lun–ven 8:30–12:30 su appuntamento, telefonate 10:00–12:30 · servizisociali@comune.peschieraborromeo.mi.it",
      action: { type: "tel", value: "0251690503" },
    },
    {
      icon: "git-network-outline",
      title: "Distretto Sociale Paullese – Ufficio di Piano",
      subtitle:
        "Servizi sociali gestiti insieme da Mediglia, Pantigliate, Paullo, Peschiera Borromeo (capofila) e Tribiano · Via XXV Aprile 1, Peschiera Borromeo · Tel. 02 51690595 · distrettosociale1@comune.peschieraborromeo.mi.it",
      action: { type: "tel", value: "0251690595" },
    },
  ],

  trasporto:
    "Chiedi ai Servizi sociali di Peschiera Borromeo (02 51690503) quali servizi di trasporto sociale sono attivi. In Lombardia puoi rivolgerti anche alla Croce Rossa o alla Pubblica Assistenza della tua zona.",

  esenzioneTicket: {
    label: "ATS Città Metropolitana di Milano · Esenzioni",
    url: "https://www.ats-milano.it",
  },

  daVerificare: true,
  dimostrativo: true,
};

// Passi di "Come ottenere il riconoscimento": solo voci già in scheda con fonte.
peschieraBorromeo.percorsoTerritorio = percorso(peschieraBorromeo.puntiSupporto, [0, 1]);

// Passo 1: provincia nella terza fase (dal 1° marzo 2026) della sperimentazione INPS.
peschieraBorromeo.percorsoTerritorio = { ...peschieraBorromeo.percorsoTerritorio, 1: [INPS_TERZA_FASE] };
