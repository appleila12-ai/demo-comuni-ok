// Esenzione ticket per patologia cronica o malattia rara: ASL 3 Genovese.
// Fonti ufficiali (asl3.liguria.it), lette il 28/10/2026:
//  - pagina "Esenzione per patologia cronica o malattia rara" (ultima modifica 20/12/2022)
//  - pagina "Anagrafe sanitaria - sedi" (ultimo aggiornamento 13/10/2026)
// Indirizzi mail degli sportelli: la pagina dell'ASL li nasconde, quindi NON sono inseriti.
// Gli orari cambiano spesso: da ricontrollare spesso sulla pagina delle sedi.

export const ASL3_DATA_SEDI = "13/10/2026";

export const ASL3_PATOLOGIA_CRONICA = [
  "Certificazione di uno specialista di una struttura pubblica che attesti la patologia",
  "Oppure: certificazioni delle commissioni mediche degli ospedali militari",
  "Oppure: copia della cartella clinica rilasciata da una struttura ospedaliera pubblica",
  "Oppure: copia del verbale per il riconoscimento di invalidità",
  "Oppure: copia della cartella clinica di un istituto di ricovero accreditato nell'ambito del SSN",
];

export const ASL3_NOTA_VALUTAZIONE =
  "In tutti questi casi la documentazione viene valutata dal medico del Distretto.";

export const ASL3_MALATTIA_RARA = [
  "Certificazione di uno specialista del Centro di Riferimento o Presidio della rete regionale",
  "Il Centro o Presidio la rilascia con sistema informatico: poi basta andare allo sportello anagrafe del distretto per avere il tesserino con il codice della malattia",
];

export const ASL3_COME_SI_PRESENTA = [
  "Patologia cronica: si porta la certificazione agli Sportelli Anagrafe. Alla fine ti danno un tesserino con il codice della patologia in esenzione",
  "Malattia rara: la certificazione si presenta alla ASL di residenza (vedi sopra)",
];

export const ASL3_NOTA_MAIL =
  "Per le richieste inviate per mail l'ASL chiede: copia del documento d'identità, tessera sanitaria in PDF e un numero di telefono. Per i minori servono anche i documenti del genitore. L'indirizzo mail di ogni sportello è sulla pagina delle sedi dell'ASL.";

export const ASL3_NOTA_MANCA =
  "Questa scheda non dice nulla su moduli, deleghe o tutori: chiedi allo sportello cosa portare se la richiesta la fa un'altra persona.";

export type SedeAnagrafe = { nome: string; indirizzo: string; orari: string; tel?: string; nota?: string };

export const ASL3_SEDI: { distretto: string; sedi: SedeAnagrafe[] }[] = [
  {
    distretto: "Distretto 8 · Ponente",
    sedi: [
      { nome: "Genova Prà", indirizzo: "Via de Mari 1b (Villa de Mari)", orari: "Lun–Ven 8:30–12:30", tel: "010 849 8625 / 8701", nota: "I numeri si distribuiscono dalle 8:00 fino alle 11:30 circa, secondo i flussi di accesso." },
      { nome: "Genova Voltri · Casa della Comunità", indirizzo: "Piazza Odicini 4", orari: "Mar e Gio 8:30–12:30", tel: "010 849 9075 / 8757", nota: "Il servizio si fa anche a Prà nei giorni feriali, 8:30–12:30." },
      { nome: "Arenzano", indirizzo: "Piazza Golgi 26", orari: "Lun e Mer 8:30–12:30", tel: "010 849 9042" },
      { nome: "Cogoleto", indirizzo: "Via Isnardi 3", orari: "Mar 8:30–12:30", tel: "010 849 9563" },
      { nome: "Campo Ligure · ex Ospedale S. Michele Arcangelo", indirizzo: "Via Rossi 33", orari: "Lun e Mer 10:00–12:30; Ven 8:15–12:30", tel: "010 849 7840" },
      { nome: "Masone", indirizzo: "Via Massolo 2", orari: "Lun e Gio 10:30–12:30; Mar 8:15–12:30", tel: "010 849 7650" },
      { nome: "Rossiglione · ex Ospedale Barigione Pizzorni", indirizzo: "Via Roma 36", orari: "Mar e Ven 10:30–12:30; Mer 8:15–12:30", tel: "010 849 7750" },
    ],
  },
  {
    distretto: "Distretto 9 · Medio Ponente",
    sedi: [
      { nome: "Genova Sampierdarena · Casa della Comunità Fiumara", indirizzo: "Via Operai 80", orari: "Lun–Ven 8:15–12:30, secondo i flussi di accesso", tel: "010 849 7053 / 7252 / 7246" },
      { nome: "Genova Sestri Ponente · Casa della Comunità", indirizzo: "Via Soliman 7", orari: "Lun–Ven 8:00–12:30", nota: "Massimo 35 accessi diretti al giorno, con i numeri dalle 8:15." },
    ],
  },
  {
    distretto: "Distretto 10 · Valpolcevera – Valle Scrivia",
    sedi: [
      { nome: "Genova Bolzaneto · Casa della Comunità Valpolcevera", indirizzo: "Via P. Pastorino 32", orari: "Lun–Ven 8:15–12:30", tel: "010 849 9498 / 9474 / 9463", nota: "35 numeri per sportello, distribuiti dalle 7:30. Per le esenzioni per patologia serve prima l'autorizzazione dell'Ufficio del medico: lun e mer 8:15–12:15; mar e ven 10:30–12:30." },
      { nome: "Borgo Fornari · Casa della Comunità", indirizzo: "Corso Trento e Trieste 130", orari: "Lun, Mar e Gio 8:15–12:30", tel: "010 849 7892 / 7890 (lun–ven 8:15–12:30)", nota: "35 numeri per sportello, distribuiti dalle 7:30." },
    ],
  },
  {
    distretto: "Distretto 11 · Centro",
    sedi: [
      { nome: "Casa della Comunità", indirizzo: "Via Assarotti 35, piano terra", orari: "Lun–Ven 8:15–12:30", nota: "35 numeri per sportello." },
    ],
  },
  {
    distretto: "Distretto 12 · Valbisagno – Valtrebbia",
    sedi: [
      { nome: "Casa della Comunità", indirizzo: "Via Archimede 30", orari: "Lun–Ven, lo sportello apre 8:15–12:00 con 80 numeri, secondo i flussi di accesso" },
      { nome: "Casa della Comunità", indirizzo: "Via Struppa 150", orari: "Lun–Ven 10:00–11:30, solo su appuntamento telefonico fino al 31/12/2026", tel: "010 849 5858 (per prenotare, lun–ven 8:15–9:30)" },
      { nome: "Bargagli", indirizzo: "Via Martini 153/A", orari: "Lun, Mer, Gio e Ven 10:30–12:30, accesso limitato", tel: "010 849 6040" },
      { nome: "Torriglia", indirizzo: "Via della Provvidenza 60", orari: "Lun, Mar, Mer e Ven 10:30–12:30, accesso limitato", tel: "010 849 6070" },
    ],
  },
  {
    distretto: "Distretto 13 · Levante",
    sedi: [
      { nome: "Genova Quarto · Casa della Comunità", indirizzo: "Largo F. Cattanei 4", orari: "Mar–Gio 9:00–12:30", tel: "010 849 5766" },
      { nome: "Recco · Casa della Comunità", indirizzo: "Via Bianchi 1", orari: "Lun–Ven 8:15–12:30", tel: "010 849 6492 / 6493" },
    ],
  },
];

export const FONTE_ESENZIONE_ASL3 = "ASL 3 Genovese · pagine \"Esenzione per patologia cronica o malattia rara\" e \"Anagrafe sanitaria - sedi\"";
export const URL_ESENZIONE_ASL3 = "https://www.asl3.liguria.it/prenotazioni-e-ticket/esenzione-per-patologia-cronica-o-malattia-rara.html";
export const URL_SEDI_ASL3 = "https://www.asl3.liguria.it/territorio/servizi/cure-primarie/799-anagrafe-sanitaria-sedi.html";
