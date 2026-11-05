import type { ComuneConfig } from "./types";
import { INPS_TERZA_FASE, percorso } from "./percorso";

// Comune di Mediglia (MI).
// Fonti (29/09/2026): pagina "Servizi Sociali, Casa, Salute" del sito del Comune;
// pagina "Piano di Zona - Distretto Sociale Paullese" del Comune di Peschiera Borromeo.
// Aggiornamento 04/11/2026: recapiti dell'Ufficio di Piano (indirizzo, telefoni, email) presi
// dall'avviso pubblico Misura B2 2025 dell'Ambito di Paullo, pubblicato sul sito del Comune di Paullo
// (sostituiscono il telefono 02 51690251 della prima versione, non ritrovato in fonti ufficiali).
// Aggiornamento 05/11/2026: orari (la pagina del Comune, aggiornata il 20/05/2026, indica gli assistenti solo su
// appuntamento: gli orari di accesso libero della prima versione sono tolti), telefono per gli appuntamenti,
// telefono dell'Ufficio di Piano dalla sua scheda (aggiornata il 02/01/2026; l'avviso del Fondo non autosufficienza
// 2026-27 indica anche 02 51690257 e 02 51690214) e passi del percorso. Dati indicati da Ilaria dopo una ricerca
// del 04/11/2026 sui siti dei Comuni del Distretto (non riletti direttamente).
// DA VERIFICARE con il Comune prima del pilota: sede e sportello del Distretto
// sanitario (ASST Melegnano e della Martesana, Distretto Sud Est Milano) usati
// dalle famiglie di Mediglia, e associazioni del territorio per la disabilità.
export const mediglia: ComuneConfig = {
  slug: "mediglia",
  tipo: "comune",
  nome: "Comune di Mediglia",
  nomeBreve: "Mediglia",
  delEnte: "del Comune di Mediglia",
  soggetto: "Il Comune",
  provincia: "MI",
  regione: "Lombardia",

  ente: "Servizi Sociali, Casa, Salute",
  responsabile: "Responsabile: Irene Pierdominici · Assessora ai Servizi sociali: Elisa Roberta Baeli",
  indirizzo: "Via Risorgimento 5, 20076 Mediglia (MI)",
  telefono: "02 90662042 · 02 90662057 (appuntamenti con gli assistenti sociali)",
  email: "servizisociali@comune.mediglia.mi.it",
  pec: "comune.mediglia@pec.regione.lombardia.it",
  orari: "Assistenti sociali solo su appuntamento (pagina aggiornata il 20/05/2026)",
  sitoWeb: "https://www.comune.mediglia.mi.it/home/amministrazione/uffici/Ufficio-3.html",

  logo: null,

  theme: {
    warm: "#C3B4D9", // lavanda
    warmSoft: "#ECE6F4",
    warmDark: "#5B4682",
    cream: "#F6F4F1",
  },

  puntiSupporto: [
    {
      icon: "people-outline",
      title: "Segretariato sociale del Comune di Mediglia",
      subtitle:
        "Informazioni su prestazioni e benefici, assistenza domiciliare per anziani e persone con disabilità, pasti a domicilio · Via Risorgimento 5 · Tel. 02 90662042 (appuntamenti assistenti: 02 90662057) · servizisociali@comune.mediglia.mi.it · assistenti solo su appuntamento",
      action: { type: "tel", value: "0290662042" },
    },
    {
      icon: "document-text-outline",
      title: "Modulistica dei Servizi Sociali",
      subtitle: "Domande e moduli online del Comune di Mediglia",
      action: { type: "web", value: "https://www.mediglia.sportellocivico.it/ModulisticaServiziSociali.aspx" },
    },
    {
      icon: "git-network-outline",
      title: "Distretto Sociale Paullese – Ufficio di Piano",
      subtitle:
        "Servizi sociali gestiti insieme da Mediglia, Pantigliate, Paullo, Peschiera Borromeo (capofila) e Tribiano · Via XXV Aprile 1, Peschiera Borromeo · Tel. 02 51690595 (l'avviso del Fondo non autosufficienza indica anche 02 51690257 e 02 51690214) · distrettosociale1@comune.peschieraborromeo.mi.it",
      action: { type: "tel", value: "0251690595" },
    },
    {
      icon: "medkit-outline",
      title: "ASST Melegnano e della Martesana – Distretto Sud Est Milano",
      subtitle: "Servizi sanitari del territorio: cure domiciliari (ADI), fragilità e disabilità, valutazione multidimensionale",
      action: { type: "web", value: "https://www.asst-melegnano-martesana.it/distretti-territoriali/distretto-sud-est-milano-5" },
    },
  ],

  trasporto:
    "Chiedi ai Servizi sociali di Mediglia (02 90662042) quali servizi di trasporto sociale sono attivi. In Lombardia puoi rivolgerti anche alla Croce Rossa o alla Pubblica Assistenza della tua zona.",

  esenzioneTicket: {
    label: "ATS Città Metropolitana di Milano · Esenzioni",
    url: "https://www.ats-milano.it",
  },

  daVerificare: true,
};

// Passi di "Come ottenere il riconoscimento": solo voci già in scheda con fonte (segretariato e Ufficio di Piano).
mediglia.percorsoTerritorio = percorso(mediglia.puntiSupporto, [0, 2]);

// Passo 1: provincia nella terza fase della sperimentazione INPS (dal 1° marzo 2026).
mediglia.percorsoTerritorio = { ...mediglia.percorsoTerritorio, 1: [INPS_TERZA_FASE] };
