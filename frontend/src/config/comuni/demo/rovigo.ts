import type { ComuneConfig } from "../types";
import { percorso } from "../percorso";

// Comune di Rovigo (RO) — VERSIONE DIMOSTRATIVA, SCHEDA SNELLA (14 ottobre 2026).
// Il Comune NON ha aderito a TutelApp: l'app lo segnala ai cittadini con un avviso.
// Verificato solo il sito del Comune (link ufficiale). Home del sito del Comune: la pagina dei servizi sociali va cercata e confermata (controllato il 14 ottobre 2026). Il link dell'azienda sanitaria è da verificare.
// 18/11/2026: sede, sportello, telefono ed email da avviso istituzionale del Comune, documento pubblicato nel 2024 (controllato 18/11/2026).
// https://www.comune.rovigo.it/myportal/C_H620/api/content/download?id=67483dc495d135008d862b00
// Riscontro su avviso comunale successivo: https://www.comune.rovigo.it/myportal/C_H620/api/content/download?id=67af1b6cb98554008bd8fafd
// Orari non presenti nelle fonti; non inventarli. Mancano bonus, Ambito, destinatario e avviso UI.
// Fonte regionale ticket/esenzioni: Regione Veneto, aggiornamento 20/05/2026, consultazione archivio #335 (17/11/2026), riuso 18/11/2026.
// https://salute.regione.veneto.it/organizzazione-sssr/attivit%C3%A0--del-servizio-socio-sanitario-veneto/assistenza-distrettuale/visite-ed-esami-ambulatoriali/ticket-ed-esenzioni
// La procedura e lo sportello fisico specifici dell'ULSS locale restano da verificare; scheda PARZIALE.
export const rovigo: ComuneConfig = {
  slug: "rovigo",
  tipo: "comune",
  nome: "Comune di Rovigo",
  nomeBreve: "Rovigo",
  delEnte: "del Comune di Rovigo",
  soggetto: "Il Comune",
  provincia: "RO",
  regione: "Veneto",

  ente: "Servizi Sociali",
  responsabile: "",
  indirizzo: "Viale G. Marconi 2, 45100 Rovigo",
  telefono: "0425 206556",
  email: "sportelloservizisociali@comune.rovigo.it",
  pec: "comunerovigo@legalmail.it",
  orari: "",
  sitoWeb: "https://www.comune.rovigo.it",

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
      subtitle: "Sportello Servizi Sociali · Viale G. Marconi 2 · Tel. 0425 206556",
      action: { type: "tel", value: "0425206556" },
    },
    {
      icon: "medkit-outline",
      title: "ULSS 5 Polesana",
      subtitle: "Esenzione ticket per patologia e invalidità, scelta del medico e servizi sanitari del territorio",
      action: { type: "web", value: "https://www.aulss5.veneto.it" },
    },
  ],

  trasporto:
    "Chiedi ai Servizi Sociali del Comune quali servizi di trasporto sociale sono attivi. Puoi rivolgerti anche alle associazioni di volontariato della zona (Croce Rossa, Pubbliche Assistenze, Misericordie) e alle associazioni che trovi nella sezione Associazioni.",

  esenzioneTicket: {
    label: "ULSS 5 Polesana · Esenzioni ticket",
    url: "https://salute.regione.veneto.it/organizzazione-sssr/attivit%C3%A0--del-servizio-socio-sanitario-veneto/assistenza-distrettuale/visite-ed-esami-ambulatoriali/ticket-ed-esenzioni",
  },

  daVerificare: true,
  dimostrativo: true,
};

// Passi 4 e 5: voci già in scheda con fonte. Passi 1-3 vuoti: nessun recapito verificato (29/10/2026).
rovigo.percorsoTerritorio = percorso(rovigo.puntiSupporto, [0]);
