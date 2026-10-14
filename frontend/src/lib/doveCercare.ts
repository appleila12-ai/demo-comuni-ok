// "Dove cercare": per ogni Regione, le pagine ufficiali dove trovare bonus e contributi per la disabilità
// e le parole da cercare. È un punto di partenza, NON l'elenco dei bandi aperti: non sappiamo quali siano
// aperti, in scadenza o chiusi. Mappa raccolta il 13/10/2026; gli indirizzi sono pagine dei siti ufficiali
// delle Regioni e delle Province autonome trovate con la ricerca web. Da ricontrollare ogni 3 mesi.

export type LinkRegione = { label: string; url: string };

export type DoveCercare = {
  link: LinkRegione[];
  /** Parole da cercare sul sito della Regione */
  cerca: string;
};

export const DOVE_CERCARE: Record<string, DoveCercare> = {
  Abruzzo: {
    link: [{ label: "Regione Abruzzo", url: "https://www.regione.abruzzo.it" }],
    cerca: "disabilità, assegno di cura, caregiver",
  },
  Basilicata: {
    link: [{ label: "Regione Basilicata · Assegno di cura", url: "https://www.regione.basilicata.it/?servizi-online=assegno-di-cura" }],
    cerca: "non autosufficienza, assistenza domiciliare",
  },
  Calabria: {
    link: [
      {
        label: "Regione Calabria · Assistenza socio-sanitaria e socio-assistenziale",
        url: "https://www.regione.calabria.it/dipartimento-salute-e-welfare/settori-del-dipartimento/uoa-investimenti-sanitari/",
      },
    ],
    cerca: "gravissima disabilità, caregiver, vita indipendente",
  },
  Campania: {
    link: [{ label: "Regione Campania", url: "https://www.regione.campania.it" }],
    cerca: "assegno di cura, disabilità grave, Dopo di noi",
  },
  "Emilia-Romagna": {
    link: [
      {
        label: "Regione Emilia-Romagna · Assegno di cura",
        url: "https://sociale.regione.emilia-romagna.it/persone-con-disabilita/assistenza/assegno-di-cura",
      },
    ],
    cerca: "contributi caregiver, mobilità, assistenza",
  },
  "Friuli-Venezia Giulia": {
    link: [
      {
        label: "Regione FVG · Interventi sociali e sociosanitari",
        url: "https://www.regione.fvg.it/rafvg/cms/RAFVG/salute-sociale/interventi-socio-sanitari/",
      },
    ],
    cerca: "Fondo gravissimi, sostegno alla famiglia",
  },
  Lazio: {
    link: [{ label: "Regione Lazio · Disabilità", url: "https://www.regione.lazio.it/cittadini/sociale-famiglie/disabilita" }],
    cerca: "caregiver, non autosufficienza, vita indipendente",
  },
  Liguria: {
    link: [
      {
        label: "Regione Liguria · Misure per la non autosufficienza",
        url: "https://poliss.regione.liguria.it/cittadini/servizi-sociosanitari/servizi-sociosanitari-per-competenza-territoriale/269-misure-per-la-non-autosufficienza",
      },
    ],
    cerca: "bandi FILSE e contributi per assistenza",
  },
  Lombardia: {
    link: [
      {
        label: "Regione Lombardia · Sostegno per la disabilità gravissima",
        url: "https://www.regione.lombardia.it/politiche-sociali-e-abitative/disabilita/politiche-e-misure-per-la-disabilita/sostegno-per-la-disabilit--gravissima-misura-sostegno",
      },
    ],
    cerca: "misure per cittadini, famiglie e caregiver",
  },
  Marche: {
    link: [{ label: "Regione Marche · Disabilità", url: "https://www.regione.marche.it/Regione-Utile/Sociale/Disabilit%C3%A0" }],
    cerca: "assegno di cura, disabilità gravissima, caregiver",
  },
  Molise: {
    link: [
      {
        label: "Regione Molise · Assistenza socio-sanitaria",
        url: "https://www.regione.molise.it/flex/cm/pages/ServeBLOB.php/L/IT/IDPagina/438",
      },
    ],
    cerca: "assistenza domiciliare e contributi sociali",
  },
  Piemonte: {
    link: [
      {
        label: "Regione Piemonte · Assistenza alle persone con disabilità",
        url: "https://www.regione.piemonte.it/web/temi/diritti-politiche-sociali/disabilita/salute-interventi-socio-sanitari/assistenza-alle-persone-disabilita",
      },
    ],
    cerca: "caregiver, sostegno alla domiciliarità, ausili",
  },
  Puglia: {
    link: [
      {
        label: "Regione Puglia · Patto di cura 2025-2026",
        url: "https://press.regione.puglia.it/-/al-via-il-patto-di-cura-2025-2026.-stanziati-20-milioni-di-euro-per-le-persone-con-disabilit%C3%80-gravissima",
      },
    ],
    cerca: "Patto di cura, caregiver, assistenza personale",
  },
  Sardegna: {
    link: [{ label: "Regione Sardegna · Ritornare a casa", url: "https://sus.regione.sardegna.it/sus/searchprocedure/details/409" }],
    cerca: "Ritornare a casa PLUS, piani personalizzati L. 162/98",
  },
  Sicilia: {
    link: [
      {
        label: "Regione Siciliana · Disabilità gravissima",
        url: "https://www.regione.sicilia.it/la-regione-informa/regione-20-milioni-persone-disabilita-gravissima",
      },
    ],
    cerca: "bonus disabilità, gravissimi, caregiver",
  },
  Toscana: {
    link: [
      {
        label: "Regione Toscana · Sostegno ai disabili",
        url: "https://www.regione.toscana.it/-/leggi-progetti-e-finanziamenti-su-sostegno-ai-disabili",
      },
    ],
    cerca: "vita indipendente, gravissime disabilità, contributi per l'autonomia",
  },
  "Trentino-Alto Adige": {
    link: [
      { label: "Provincia di Trento · Il Progetto di Vita", url: "https://www.provincia.tn.it/Servizi/Servizi-offerti-da-altri-enti/Il-Progetto-di-Vita" },
      {
        label: "Provincia di Bolzano · Assegno di cura",
        url: "https://news.provincia.bz.it/it/news/tutte-le-informazioni-utili-sull-assegno-di-cura",
      },
    ],
    cerca: "Trento: contributi per invalidità, assistenza e progetti di vita. Bolzano: prestazioni per persone non autosufficienti e sostegno ai familiari",
  },
  Umbria: {
    link: [
      {
        label: "Regione Umbria · Assegni per l'assistenza domiciliare",
        url: "https://www.regione.umbria.it/notizie/-/asset_publisher/54m7RxsCDsHr/content/disabilita-gravissime-conferma-assegni-assistenza-domiciliare?read_more=true",
      },
    ],
    cerca: "non autosufficienza, caregiver, inclusione",
  },
  "Valle d'Aosta": {
    link: [
      {
        label: "Regione Valle d'Aosta · Contributi finanziari e assistenza economica",
        url: "https://www.regione.vda.it/servsociali/contributi_finanziari_e_assistenza_economica/default_i.asp",
      },
    ],
    cerca: "contributi per disabilità e assistenza alla persona",
  },
  Veneto: {
    link: [
      {
        label: "Regione Veneto · Impegnative di cura domiciliare",
        url: "https://salute.regione.veneto.it/assistenza-sociosanitaria-/persone-con-disabilit%C3%A0/domiciliarit%C3%A0-(icd)---impegnative-di-cura-domiciliari",
      },
    ],
    cerca: "impegnativa di cura domiciliare, caregiver e mobilità",
  },
};

/** Parole da cercare nel sito di qualunque Regione */
export const PAROLE_GENERALI =
  "bonus disabilità 2026, assegno di cura 2026, contributo caregiver familiare 2026, disabilità gravissima 2026, vita indipendente 2026, abbattimento barriere architettoniche 2026, ausili e strumenti tecnologici 2026, Dopo di noi 2026";

export const PORTALE_NAZIONALE: LinkRegione = {
  label: "Dipartimento per le politiche in favore delle persone con disabilità · Avvisi e bandi",
  url: "https://www.disabilita.governo.it/it/avvisi-e-bandi/",
};
