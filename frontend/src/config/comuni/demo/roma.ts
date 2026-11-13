import type { ComuneConfig } from "../types";
import { INPS_TERZA_FASE } from "../percorso";
import { percorso } from "../percorso";

// Comune di Roma (RM) — VERSIONE DIMOSTRATIVA (completata il 13 ottobre 2026).
// Il Comune NON ha aderito a TutelApp: l'app lo segnala ai cittadini con un avviso.
// Il sito del Comune non è leggibile in automatico (robots). Fonti: pagina PUA di ASL Roma 1 (Distretti 1, 2, 3, 13, 14, 15),
// sito dell'Agenzia per la Vita Indipendente di Roma Capitale.
// Roma ha 15 Municipi e più ASL: qui c'è solo il PUA di ASL Roma 1. Gli altri Distretti (ASL Roma 2-6) vanno aggiunti.
// Da fare: recapiti dei Servizi Sociali di ogni Municipio (pua.mun02@comune.roma.it e pua.mun15@comune.roma.it sono citati nella pagina ASL), PUA delle altre ASL.
export const roma: ComuneConfig = {
  slug: "roma",
  tipo: "comune",
  nome: "Roma Capitale",
  nomeBreve: "Roma",
  delEnte: "di Roma Capitale",
  soggetto: "Il Comune",
  provincia: "RM",
  regione: "Lazio",

  ente: "Servizi Sociali",
  responsabile: "",
  indirizzo: "",
  telefono: "06 0606",
  email: "",
  pec: "",
  orari: "Sedi e orari cambiano per Municipio e Distretto: guarda la pagina del PUA",
  sitoWeb: "https://www.comune.roma.it",

  logo: null,

  theme: {
    warm: "#E6A07C",
    warmSoft: "#F8E4D8",
    warmDark: "#9A4A25",
    cream: "#F8F3EC",
  },

  puntiSupporto: [
    // Solo uffici, sportelli e servizi di accesso. Schede da ricollocare archiviate in docs.
    {
      icon: "people-outline",
      title: "Municipio VII · Progetto disabilità gravissima",
      subtitle: "Sede Appio, Via Tommaso Fortifiocca 71. Referente assistente sociale Daniela Ferrara, telefono 06 69609405, email daniela2.ferrara@comune.roma.it. Assegno di cura e contributo caregiver con valutazione multidimensionale e disponibilità delle risorse; servizio riservato ai residenti del Municipio VII.",
      action: { type: "web", value: "https://www.comune.roma.it/web/it/municipio-vii-uffici-e-contatti.page?contentId=UFF513958" },
    },
    {
      icon: "people-outline",
      title: "Municipio VIII · Segretariato Sociale e PUA",
      subtitle: "Coordinatrice Rosa Paolella. Telefoni 06 69611670 / 671; famiglie e minori 06 69611690; responsabile 06 69611624. Email pua.mun08@comune.roma.it. Sede e orari da verificare nella pagina istituzionale.",
      action: { type: "web", value: "https://www.comune.roma.it/web/it/amministrazione-trasparente-uffici.page?cpz=persone_anziane&mun=municipio_viii" },
    },
    {
      icon: "people-outline",
      title: "Municipio VIII · Domiciliarità, disabilità gravissima e Dopo di Noi",
      subtitle: "Referente assistente sociale Federica Cofani, tel. 06 69611623, email federica.cofani@comune.roma.it. Ufficio Assistenza Domiciliare Diretta, Disabilità Gravissima Diretta e Dopo Di Noi.",
      action: { type: "web", value: "https://www.comune.roma.it/web/it/amministrazione-trasparente-uffici.page?cpz=persone_anziane&mun=municipio_viii" },
    },
    {
      icon: "location-outline",
      title: "Municipio IX · Welfare di accesso, Segretariato Sociale e PUA",
      subtitle: "L'ufficio Welfare di Accesso ai Servizi Sociali e Sociosanitari accoglie persone con disabilità, minori, adulti e anziani, orienta verso Municipio e ASL Roma 2 e fornisce modulistica. Sede, telefoni e orari: verificare nella pagina ufficiale dell'ufficio.",
      action: { type: "web", value: "https://www.comune.roma.it/web/it/municipio-ix-uffici-e-contatti.page?contentId=UFF31871" },
    },
    {
      icon: "location-outline",
      title: "Municipio II · PUA e Segretariato Sociale",
      subtitle: "Ufficio PUA, Segretariato Sociale e Integrazione Socio Sanitaria. Telefoni 06 69602598 / 2605 / 2600 / 2599 e 06 77303708. Email pua.mun02@comune.roma.it. Responsabile indicata: Katia Vitri. Orari e sede operativa da verificare sul portale ufficiale.",
      action: { type: "web", value: "https://www.comune.roma.it/web/it/amministrazione-trasparente-uffici.page?cpz=persone_anziane&mun=municipio_ii" },
    },
    {
      icon: "people-outline",
      title: "Municipio II · Disabilità, SAISH, Dopo di Noi e caregiver",
      subtitle: "Il Municipio II distingue gli uffici per SAISH e progetti autismo, autonomia/Dopo di Noi e disabilità gravissima/caregiver. Controlla gli uffici e i contatti aggiornati prima di presentare domanda.",
      action: { type: "web", value: "https://www.comune.roma.it/web/it/municipio-ii-uffici-e-contatti.page" },
    },
    {
      icon: "location-outline",
      title: "Municipio III · Segretariato Sociale e prima accoglienza",
      subtitle: "Via Umberto Fracchia 45, piano terra; telefono 06 69604652 / 653; martedì 8:30–12:30, giovedì 8:30–12:30 e 14–16 (orari da newsletter istituzionale 06/2025: riconfermare). Contatto ufficio Irene Dettori, irene.dettori@comune.roma.it.",
      action: { type: "web", value: "https://www.comune.roma.it/web/it/amministrazione-trasparente-uffici.page?cpz=persone_anziane&mun=municipio_iii" },
    },
    {
      icon: "location-outline",
      title: "Municipio IV · Segretariato Sociale",
      subtitle: "Via Tiburtina 1163, ingresso B, piano terra; su appuntamento. Tel. 06 69605430 / 34 / 605; segretariatosociale.mun04@comune.roma.it. Orari dettagliati nella newsletter istituzionale 06/2025: confermarli prima di recarsi.",
      action: { type: "web", value: "https://www.comune.roma.it/web-resources/cms/documents/Newsletter_Spazio_Comune_2_giugno_2025.pdf" },
    },
    {
      icon: "location-outline",
      title: "Municipio V · PUA ASL Roma 2",
      subtitle: "Casa della Salute S. Caterina della Rosa, Via N. Forteguerri 4; tel. 06 51007426 / 8525; pua.distretto5@aslroma2.it. Orari dalla newsletter istituzionale 06/2025: mar 9–13 e 15–17, gio 9–15, ven 9–13. Confermare prima di recarsi.",
      action: { type: "web", value: "https://www.comune.roma.it/web-resources/cms/documents/Newsletter_Spazio_Comune_2_giugno_2025.pdf" },
    },
    {
      icon: "location-outline",
      title: "Municipio XII · Sportello Caregiver",
      subtitle: "Via Fabiola 14, primo piano, stanze 1.18/1.19. Martedì e mercoledì 8:30–13:00 e 14:00–17:00; altri giorni su appuntamento. Offre orientamento e raccoglie le domande di riconoscimento caregiver. Fonte Roma Capitale, 09/11/2026.",
      action: { type: "web", value: "https://www.comune.roma.it/web/it/dettaglio.page?contentId=UFF1037074" },
    },
    {
      icon: "people-outline",
      title: "Municipio VI · Ufficio Settore Disabilità",
      subtitle: "Viale Duilio Cambellotti 11. Segue SAISH adulti e minori, disabilità gravissima, caregiver, OEPAC, autismo, Dopo di Noi, vita indipendente e centri diurni. Referente: Annalisa Montagnoli, tel. 06 69608946. Fonte Roma Capitale, 09/11/2026.",
      action: { type: "web", value: "https://www.comune.roma.it/web/it/scheda-servizi.page?contentId=UFF28713" },
    },
    {
      icon: "location-outline",
      title: "Roma · Segretariato Sociale e PUA di tutti i Municipi",
      subtitle: "Indice ufficiale degli uffici dei Municipi I–XV per orientamento, assistenza e domande sociali. I recapiti specifici vanno verificati nella pagina di ciascun ufficio. Fonte Roma Capitale, 09/11/2026.",
      action: { type: "web", value: "https://www.comune.roma.it/web/it/scheda-servizi.page?contentId=INF87122" },
    },
    {
      icon: "location-outline",
      title: "Municipio I · PUA Eroi (Prati)",
      subtitle: "Casa della Comunità Eroi, Via Fra Albenzio 10. Lun–ven 8:30–12:30. Tel. 06 60105419 / 06 60105582 / 06 60105418; messaggi 338 5080024. Email segretariatosociale.mun1@comune.roma.it e pua1@aslroma1.it. Fonte Roma Capitale, 09/11/2026.",
      action: { type: "web", value: "https://www.comune.roma.it/web/it/dettaglio.page?contentId=UFF30480" },
    },
    {
      icon: "location-outline",
      title: "Municipio I · PUA Nuovo Regina Margherita (Trastevere)",
      subtitle: "Casa della Comunità Nuovo Regina Margherita, Via Roma Libera 76. Lun–ven 8:30–12:30. Tel. 06 60106473 / 475 / 484 / 485; messaggi 366 6603044. Email pua1@aslroma1.it. Fonte Roma Capitale, 09/11/2026.",
      action: { type: "web", value: "https://www.comune.roma.it/web/it/dettaglio.page?contentId=UFF30480" },
    },
    {
      icon: "location-outline",
      title: "Municipio I · PUA Esquilino (sede in apertura)",
      subtitle: "Via Luigi Luzzatti 8. La pagina istituzionale riporta martedì e giovedì 8:30–12:30, mercoledì 14:30–17:30, ma indica sede in via di apertura: verificare telefonicamente prima di andare. Fonte Roma Capitale, 09/11/2026.",
      action: { type: "web", value: "https://www.comune.roma.it/web/it/dettaglio.page?contentId=UFF30480" },
    },
    {
      icon: "people-outline",
      title: "Municipio I · Segretariato Sociale Petroselli",
      subtitle: "Via Luigi Petroselli 50, primo piano. Lun/mer/ven 9–13; mar/gio 9–13 e 14–16. Tel. 06 69601665; segretariatosociale.mun1@comune.roma.it. Orientamento, pratiche sociali, agevolazioni tariffarie e richieste sosta disabili. Fonte Roma Capitale, 09/11/2026.",
      action: { type: "web", value: "https://www.comune.roma.it/web/it/dettaglio.page?contentId=UFF30480" },
    },
    {
      icon: "home-outline",
      title: "Municipio I · Assistenza domiciliare SAISH e SAISA",
      subtitle: "SAISH: assistenza domiciliare per persone con disabilità; SAISA: per anziani con autonomia limitata. Il servizio sociale municipale valuta il bisogno insieme alla ASL e definisce il piano individuale. Chiedi accesso al PUA/Segretariato del Municipio I. Fonte Roma Capitale, 09/11/2026.",
      action: { type: "web", value: "https://www.comune.roma.it/web-resources/cms/documents/20240808_DIAPOSITIVE_Segretariato_Sociale_PUA.pdf" },
    },
    {
      icon: "location-outline",
      title: "Municipio X · Segretariato Sociale e PUA",
      subtitle: "Lunedì 9–12 e martedì 9–12 e 15–17: Via G. C. Passeroni 24 (sede dei Servizi Sociali del Municipio). Giovedì 9–12 e 15–17: Lungomare P. Toscanelli 230 (Casa della Salute di Ostia). Venerdì 9–12: Sportello Caregiver in Via Passeroni 24 e sportello generico in Via di Casal Bernocchi 73 (Casa di Comunità). Mercoledì: sportello LGBTQIA+ a Lungomare Toscanelli 230. Scrivi a segretariatosociale.mun10@comune.roma.it o a segretariato.pua10@gmail.com. Il numero di telefono non ci è stato indicato nella risposta: l'abbiamo chiesto il 13/11/2026 a segretariatosociale.mun10@comune.roma.it; finché manca, usa le email. Orari indicativi, possono cambiare: conferma all'ufficio prima di andare. Fonte: risposta dell'Ufficio PUA del Municipio X, 13/11/2026.",
    },
    {
      icon: "location-outline",
      title: "Municipio XI · Segretariato Sociale e PUA",
      subtitle: "Via della Magliana 296, primo piano. Tel. 06 69615669 / 06 69615678 / 06 69615507; pua.mun11@comune.roma.it. Orari di sportello: il sito del Comune ne riporta versioni diverse, quindi non li indichiamo. Li abbiamo chiesti il 12/11/2026 a pua.mun11@comune.roma.it: puoi chiederli anche tu allo stesso indirizzo. Fonte Roma Capitale, 12/11/2026.",
      action: { type: "web", value: "https://www.comune.roma.it/web/it/informazione-di-servizio.page?contentId=IDS549187" },
    },
    {
      icon: "location-outline",
      title: "Municipio XII · Segretariato Sociale e PUA",
      subtitle: "Via Panfilo Castaldi 28/B, piano terra. Lun e mer 8:30–13:00; mar e gio 8:30–17:00. Tel. 06 69616606 / 607 / 608; pua.mun12@comune.roma.it. Orari indicativi, possono cambiare: conferma all'ufficio prima di andare. Mancano le altre sedi (Via Longhena 98 e Via Ramazzini): sedi e orari non sono chiari sul sito e li abbiamo chiesti il 12/11/2026 a pua.mun12@comune.roma.it, a cui puoi scrivere anche tu. Fonte Roma Capitale, 12/11/2026.",
      action: { type: "web", value: "https://www.comune.roma.it/web/it/municipio-xii-uffici-e-contatti.page?contentId=UFF29748" },
    },
    {
      icon: "location-outline",
      title: "Municipio XIV · Segretariato Sociale e PUA",
      subtitle: "Piazza Santa Maria della Pietà 5, Padiglione 1 (dal 15/06/2026 la sede non è più il Padiglione 13). Lun, mer e ven 8:30–12:30; mar 14:00–16:00; gio 8:30–12:30 e 14:00–16:00. PUA tel. 06 60106805; altri recapiti 06 60106807 e 339 5694010; segretariatosociale.mun14@comune.roma.it. Fonte Roma Capitale, comunicazione del 09/06/2026, letta il 12/11/2026.",
      action: { type: "web", value: "https://www.comune.roma.it/web/it/informazione-di-servizio.page?contentId=IDS1598149" },
    },
    {
      icon: "location-outline",
      title: "Municipio XIII · Segretariato Sociale",
      subtitle: "Per orientamento e aiuto con le domande: 06 69618600 / 06 69618604; segretariatosociale.mun13@comune.roma.it. Consultare il sito municipale per appuntamento. Verifica 09/11/2026.",
      action: { type: "web", value: "https://www.comune.roma.it/web/it/bando-concorso.page?contentId=BEC1656054" },
    },
    {
      icon: "location-outline",
      title: "Municipio XV · PUA e bandi sociali",
      subtitle: "Informazioni PUA: pua.mun15@comune.roma.it. Gli avvisi del Municipio XV, compresi quelli per la disabilità, sono nella pagina ufficiale; verificare la scadenza del singolo avviso. Verifica 09/11/2026.",
      action: { type: "web", value: "https://www.comune.roma.it/web/it/bandi-e-concorsi.page?mun=municipio_xv&tem=disabilita" },
    },
    {
      icon: "location-outline",
      title: "Trova il PUA e i Servizi Sociali del tuo Municipio (I–XV)",
      subtitle: "Roma comprende 15 Municipi: per assegni di cura e assistenza occorre rivolgersi al proprio PUA o Servizio Sociale. La pagina ufficiale elenca i riferimenti municipali. Fonte verificata 09/11/2026.",
      action: { type: "web", value: "https://www.comune.roma.it/web/it/scheda-servizi.page?contentId=INF117423&pagina=5" },
    },
    {
      icon: "people-outline",
      title: "Punto Unico di Accesso (PUA), ASL Roma 1",
      subtitle: "Accoglienza e orientamento ai servizi sociali e sanitari, creato da Distretto e Municipio. Ci si va di persona, con una persona di fiducia, o per telefono e email. Sul sito trovi le sedi dei Distretti 1, 2, 3, 13, 14 e 15 con telefoni e orari",
      action: { type: "web", value: "https://www.aslroma1.it/punto-unico-accesso" },
    },
    {
      icon: "home-outline",
      title: "Agenzia per la Vita Indipendente di Roma Capitale",
      subtitle: "Informazioni e consulenze su assistenza, casa, fisco, invalidità, lavoro, mobilità e scuola, con sedi Roma 1, 2 e 3. Roma 1: via Prospero Santacroce 5, tel. 06 98261600 (int. 202) per prenotare un colloquio",
      action: { type: "tel", value: "0698261600" },
    },
    {
      icon: "medkit-outline",
      title: "ASL Roma 1",
      subtitle: "Esenzione ticket per patologia e invalidità, scelta del medico e servizi sanitari del territorio",
      action: { type: "web", value: "https://www.aslroma1.it" },
    },
  ],

  trasporto:
    "Chiedi ai Servizi Sociali del Comune quali servizi di trasporto sociale sono attivi. Puoi rivolgerti anche alle associazioni di volontariato della zona (Croce Rossa, Pubbliche Assistenze, Misericordie) e alle associazioni che trovi nella sezione Associazioni.",

  esenzioneTicket: {
    label: "ASL Roma 1 · Esenzione ticket: tesserino via email dal Distretto o di persona",
    url: "https://www.aslroma1.it/esenzione-ticket-per-malattie-croniche-e-o-invalidanti",
  },

  daVerificare: true,
  dimostrativo: true,
};

// Passi 4 e 5: voci già in scheda con fonte. Passo 2 senza voci: la pagina ASL Roma 1 "Invalidità civile" tratta la L. 210/92 e non indica sedi (letta il 28/10/2026).
roma.percorsoTerritorio = percorso(roma.puntiSupporto, roma.puntiSupporto.map((_, i) => i));

// Passo 1: provincia nella terza fase della sperimentazione INPS (dal 1° marzo 2026).
roma.percorsoTerritorio = { ...roma.percorsoTerritorio, 1: [INPS_TERZA_FASE] };
