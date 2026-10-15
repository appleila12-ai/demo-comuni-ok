import type { ComuneConfig } from "../types";

// Comune di Bologna (BO) — VERSIONE DIMOSTRATIVA (completata il 15 ottobre 2026).
// Il Comune NON ha aderito a TutelApp: l'app lo segnala ai cittadini con un avviso.
// Fonte: tabella "Sportelli Sociali" dei dati aperti del Comune di Bologna (opendata.comune.bologna.it), incollata da Ilaria il 15/10/2026
// perché il sito non si apre in automatico. La tabella non mostra la data di aggiornamento. Le colonne "Telefono centralino" e "Fax" sono lette come nella tabella.
// Non verificati: AUSL Bologna (solo il sito).
// Da fare: bonus del Comune, associazioni, sport e tempo libero.
export const bologna: ComuneConfig = {
  slug: "bologna",
  tipo: "comune",
  nome: "Comune di Bologna",
  nomeBreve: "Bologna",
  delEnte: "del Comune di Bologna",
  soggetto: "Il Comune",
  provincia: "BO",
  regione: "Emilia-Romagna",

  ente: "Servizi Sociali",
  responsabile: "",
  indirizzo: "Piazza Liber Paradisus 6, Bologna (Punto unico sportelli sociali, Quartiere Navile)",
  telefono: "051 2197878",
  email: "sportellosocialebologna@comune.bologna.it",
  pec: "",
  orari: "Punto unico: lun e ven 9:00–13:00 e 13:30–16:00; mar e gio 9:00–13:00 e 13:30–17:30; mer 9:00–13:00",
  sitoWeb: "https://www.comune.bologna.it",

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
      title: "Punto unico sportelli sociali",
      subtitle: "Informazioni per i cittadini non ancora seguiti dai servizi sociali. Piazza Liber Paradisus 6 (Navile) · Tel. 051 2197878 · sportellosocialebologna@comune.bologna.it · lun e ven 9:00–13:00 e 13:30–16:00, mar e gio 9:00–13:00 e 13:30–17:30, mer 9:00–13:00",
      action: { type: "tel", value: "0512197878" },
    },
    {
      icon: "people-outline",
      title: "Sportello Sociale Borgo Panigale – Reno",
      subtitle: "Via Marco Emilio Lepido 25/3 · Già seguiti dai servizi sociali: 051 6418211 · serviziosocialeborgopanigale@comune.bologna.it · mar e gio 8:15–17:30 (ultimo accesso 17:15)",
      action: { type: "web", value: "https://www.comune.bologna.it/quartiereborgopanigale" },
    },
    {
      icon: "people-outline",
      title: "Sportello Sociale Navile",
      subtitle: "Via Saliceto 5 · Già seguiti dai servizi sociali: 051 4151311 · serviziosocialenavile@comune.bologna.it · mar e gio 8:15–17:30 (ultimo accesso 17:15)",
      action: { type: "web", value: "https://www.comune.bologna.it/quartierenavile" },
    },
    {
      icon: "people-outline",
      title: "Sportello Sociale Porto – Saragozza",
      subtitle: "Via della Grada 2/2 · Tel. 051 6498421 · serviziosocialeporto@comune.bologna.it · mar e gio 8:15–17:30",
      action: { type: "tel", value: "0516498421" },
    },
    {
      icon: "people-outline",
      title: "Sportello Sociale San Donato – San Vitale",
      subtitle: "Via Anna Grassetti 4 · Già seguiti dai servizi sociali: area anziani non autosufficienti 051 6337549; area adulti, famiglie con minori e disabili 051 2196370 · serviziosocialesanvitale@comune.bologna.it · mar e gio 8:15–17:30 (ultimo accesso 17:15)",
      action: { type: "web", value: "https://www.comune.bologna.it/quartieresanvitale" },
    },
    {
      icon: "people-outline",
      title: "Sportello Sociale Santo Stefano",
      subtitle: "Via Santo Stefano 119 · Già seguiti dai servizi sociali: 051 2197030 · serviziosocialesantostefano@comune.bologna.it · mar e gio 8:15–17:30 (ultimo accesso 17:15)",
      action: { type: "web", value: "https://www.comune.bologna.it/quartieresantostefano" },
    },
    {
      icon: "people-outline",
      title: "Sportello Sociale Savena",
      subtitle: "Via Lombardia 36 · Già seguiti dai servizi sociali: 051 6279381 · serviziosocialesavena@comune.bologna.it · mar e gio 8:15–17:30 (ultimo accesso 17:15)",
      action: { type: "web", value: "https://www.comune.bologna.it/quartieresavena" },
    },
    {
      icon: "medkit-outline",
      title: "AUSL Bologna",
      subtitle: "Esenzione ticket per patologia e invalidità, scelta del medico e servizi sanitari del territorio",
      action: { type: "web", value: "https://www.ausl.bologna.it" },
    },
  ],

  trasporto:
    "Chiedi ai Servizi Sociali del Comune quali servizi di trasporto sociale sono attivi. Puoi rivolgerti anche alle associazioni di volontariato della zona (Croce Rossa, Pubbliche Assistenze, Misericordie) e alle associazioni che trovi nella sezione Associazioni.",

  esenzioneTicket: {
    label: "AUSL Bologna · Esenzioni ticket",
    url: "https://www.ausl.bologna.it",
  },

  daVerificare: true,
  dimostrativo: true,
};
