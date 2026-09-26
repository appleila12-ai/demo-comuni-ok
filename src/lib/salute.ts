// Salute vicino a te: prenotazioni (CUP regionale), farmacie di turno (per provincia),
// guardia medica. Link ufficiali verificati a settembre 2026: da ricontrollare ogni anno.

import { comune } from "@/src/config/comune";

export type SanitaRegione = {
  cup: string;
  url: string;
  tel: string | null;
  nota: string;
  /** Numero europeo 116117 per la guardia medica */
  g116117: "si" | "no" | "parziale";
  g116117nota?: string;
};

export type FarmacieTurno = { titolo: string; url: string } | null;

export const SANITA_REGIONI: Record<string, SanitaRegione> = {
  "Abruzzo": {
    "cup": "Sportello CUP online della Regione Abruzzo",
    "url": "https://sanitaonline.regione.abruzzo.it/portaleservizi/#/portaleservizisanitari/dettaglio/dettagliocuponline",
    "tel": "800 827 827",
    "nota": "Si entra con SPID, CIE o con tessera sanitaria e codice via SMS. Serve la ricetta elettronica. Per l'ASL di L'Aquila il numero è 800 862 862.",
    "g116117": "si"
  },
  "Campania": {
    "cup": "Sinfonia Salute – CUP regionale",
    "url": "https://sinfonia.regione.campania.it/preview/cup",
    "tel": null,
    "nota": "Si prenota con SPID o CIE, anche dall'app Sinfonia Salute. Al telefono chiama il CUP della tua ASL.",
    "g116117": "no"
  },
  "Emilia-Romagna": {
    "cup": "CUPWEB",
    "url": "https://www.cupweb.it/",
    "tel": null,
    "nota": "Si prenota anche con l'app ER Salute o in farmacia. Numero verde informativo della Regione: 800 033 033.",
    "g116117": "no"
  },
  "Lazio": {
    "cup": "ReCUP – Prenota Smart",
    "url": "https://prenotasmart.regione.lazio.it/main/home",
    "tel": "06 9939",
    "nota": "Si può prenotare anche nelle farmacie aderenti.",
    "g116117": "si"
  },
  "Liguria": {
    "cup": "Prenoto Salute",
    "url": "https://prenotosalute.regione.liguria.it/",
    "tel": "010 538 3400",
    "nota": "Bastano codice fiscale, ultime cifre della tessera sanitaria e ricetta elettronica.",
    "g116117": "parziale",
    "g116117nota": "Il 116117 è attivo per ora solo nel Tigullio (prefisso 0185)."
  },
  "Lombardia": {
    "cup": "Prenota Salute",
    "url": "https://www.prenotasalute.regione.lombardia.it/",
    "tel": "800 638 638",
    "nota": "Basta la ricetta elettronica con codice fiscale e tessera sanitaria; si prenota anche in farmacia.",
    "g116117": "si"
  },
  "Marche": {
    "cup": "CUP Marche",
    "url": "https://mycupmarche.it/prenotazionecittadino/",
    "tel": "800 098 798",
    "nota": "Il numero verde è gratuito da rete fissa; da cellulare 071 9998010. C'è anche l'app SaluteMarche.",
    "g116117": "no"
  },
  "Piemonte": {
    "cup": "CUP Unico Piemonte",
    "url": "https://cup.sistemapiemonte.it/",
    "tel": "800 000 500",
    "nota": "Bastano codice fiscale e numero della ricetta elettronica.",
    "g116117": "si"
  },
  "Puglia": {
    "cup": "PugliaSalute – Prenotazioni",
    "url": "https://www.sanita.puglia.it/gestione-prenotazione",
    "tel": null,
    "nota": "Servono tessera sanitaria e ricetta elettronica. Al telefono chiama il CUP della tua ASL.",
    "g116117": "no"
  },
  "Sardegna": {
    "cup": "CUP Web Sardegna",
    "url": "https://cupweb.sardegnasalute.it/",
    "tel": "1533",
    "nota": "Serve la ricetta elettronica.",
    "g116117": "parziale",
    "g116117nota": "Il 116117 è attivo in gran parte dell'isola (non ancora nell'area di Cagliari)."
  },
  "Sicilia": {
    "cup": "SovraCUP Regionale",
    "url": "https://sovracup.regione.sicilia.it/",
    "tel": null,
    "nota": "Si prenota con SPID o CIE e ricetta elettronica. Al telefono chiama il CUP della tua ASP.",
    "g116117": "no"
  },
  "Toscana": {
    "cup": "Prenotazioni online CUP 2.0",
    "url": "https://prenota.sanita.toscana.it/",
    "tel": null,
    "nota": "Bastano codice fiscale e ricetta elettronica; anche con l'app Toscana Salute o in farmacia.",
    "g116117": "si"
  },
  "Trentino-Alto Adige": {
    "cup": "TreC+",
    "url": "https://trec.trentinosalute.net/",
    "tel": "0461 379400",
    "nota": "Si prenota online con SPID o CIE, sul sito o sull'app TreC+.",
    "g116117": "si"
  },
  "Umbria": {
    "cup": "CUP Umbria online",
    "url": "https://cup.regione.umbria.it/cup/",
    "tel": "800 636363",
    "nota": "Si prenota anche con l'app UmbriaFacile e nelle farmacie aderenti.",
    "g116117": "parziale",
    "g116117nota": "Il 116117 è attivo per ora nel Distretto del Perugino."
  },
  "Veneto": {
    "cup": "Prenotazioni online – Sanità km zero",
    "url": "https://salute.regione.veneto.it/servizi/prenotazioni-online",
    "tel": null,
    "nota": "Si prenota con SPID o CIE dal Fascicolo sanitario o dall'app Sanità km zero. Al telefono chiama il CUP della tua ULSS.",
    "g116117": "si"
  }
};

export const FARMACIE_TURNO: Record<string, FarmacieTurno> = {
  "CH": null,
  "TE": {
    "titolo": "Ordine dei Farmacisti di Teramo",
    "url": "https://www.ordinefarmate.it/cittadino/turni-delle-farmacie.html"
  },
  "SA": {
    "titolo": "Ordine dei Farmacisti di Salerno (calendari ASL)",
    "url": "https://www.ordinefarmacistisalerno.it/ordine/archivio-asl.html"
  },
  "BO": {
    "titolo": "AUSL di Bologna",
    "url": "https://www.ausl.bologna.it/cit/farm/farmacie-orari-di-apertura-e-turni-diurni-notturni"
  },
  "FC": {
    "titolo": "Federfarma Forlì-Cesena",
    "url": "https://www.forli-cesena.federfarma.it/Home/Servizi-al-cittadino/Turni-farmacie-Forli-Cesena.aspx"
  },
  "MO": {
    "titolo": "AUSL di Modena",
    "url": "https://www.ausl.mo.it/trova-farmacie/"
  },
  "RA": {
    "titolo": "AUSL della Romagna – Ravenna",
    "url": "https://www.auslromagna.it/luoghi/farmacie/farmacie-turno-ravenna"
  },
  "RM": {
    "titolo": "Federfarma Roma",
    "url": "https://www.federfarmaroma.com/farmacie_aperte.php"
  },
  "GE": {
    "titolo": "ASL3 Genovese",
    "url": "https://www.asl3.liguria.it/turni-farmacie.html"
  },
  "IM": {
    "titolo": "ASL1 Imperiese",
    "url": "https://www.asl1.liguria.it/turni-farmacie.html"
  },
  "SP": {
    "titolo": "ASL5 Spezzino",
    "url": "https://www.asl5.liguria.it/PerilCittadino/Farmacie.aspx"
  },
  "SV": {
    "titolo": "ASL2 Savonese",
    "url": "https://www.asl2.liguria.it/farmacie/turni-farmacie-territorio.html"
  },
  "BG": {
    "titolo": "Federfarma Bergamo",
    "url": "https://www.federfarma.bergamo.it/turni"
  },
  "CO": {
    "titolo": "Farmacia Aperta – Federfarma Lombardia",
    "url": "https://farmacia-aperta.eu/"
  },
  "LC": {
    "titolo": "Federfarma Lecco",
    "url": "https://www.federfarma.lecco.it/"
  },
  "MB": {
    "titolo": "ATS Brianza",
    "url": "https://www.ats-brianza.it/mnhome-farmacie-di-turno"
  },
  "MI": {
    "titolo": "Federfarma Milano",
    "url": "https://www.federfarmamilano.it/servizi/cerca_farmacia.asp"
  },
  "MN": {
    "titolo": "Farmacia Aperta – Federfarma Lombardia",
    "url": "https://farmacia-aperta.eu/"
  },
  "PV": {
    "titolo": "Farmacia Aperta – Federfarma Lombardia",
    "url": "https://farmacia-aperta.eu/"
  },
  "SO": {
    "titolo": "Farmacia Aperta – Federfarma Lombardia",
    "url": "https://farmacia-aperta.eu/"
  },
  "AN": {
    "titolo": "Ordine dei Farmacisti di Ancona",
    "url": "https://www.ordinefarmacistian.it/farmacie/turni.html"
  },
  "AP": {
    "titolo": "Ordine dei Farmacisti di Ascoli Piceno e Fermo",
    "url": "https://www.farmacistiap-fm.it/cittadino/turni-delle-farmacie.html"
  },
  "PU": {
    "titolo": "Ordine dei Farmacisti di Pesaro e Urbino",
    "url": "https://www.ordfarmacistips.it/farmacie/farmacie-di-turno.html"
  },
  "AT": {
    "titolo": "Comune di Asti (città di Asti)",
    "url": "https://www.comune.asti.it/schede-informative/farmacie-turno"
  },
  "CN": {
    "titolo": "Ordine dei Farmacisti di Cuneo",
    "url": "https://www.ordinefarmacisti.it/turni-farmacie.html"
  },
  "TO": {
    "titolo": "Federfarma Torino",
    "url": "https://www.federfarmatorino.it/farmacie-di-turno/"
  },
  "BA": {
    "titolo": "ASL Bari – PugliaSalute",
    "url": "https://www.sanita.puglia.it/web/asl-bari/farmacie-di-turno"
  },
  "BR": {
    "titolo": "ASL Brindisi – PugliaSalute",
    "url": "https://www.sanita.puglia.it/web/asl-brindisi/gestione-farmacie-di-turno"
  },
  "SS": {
    "titolo": "Federfarma Sassari",
    "url": "https://www.federfarmasassari.it/turni"
  },
  "TP": {
    "titolo": "ASP Trapani",
    "url": "https://www.asptrapani.it/servizi/menu/dinamica.aspx?ID=54607&bo=true"
  },
  "AR": {
    "titolo": "Federfarma Arezzo",
    "url": "https://www.arezzo.federfarma.it/"
  },
  "FI": {
    "titolo": "Comune di Firenze (turni dell'Ordine)",
    "url": "http://wwwext.comune.fi.it/farmacie/farmacie.html"
  },
  "LU": {
    "titolo": "FarmaLucca – Federfarma Lucca",
    "url": "https://www.farmalucca.it/farmacie-di-turno"
  },
  "MS": {
    "titolo": "Ordine dei Farmacisti di Massa-Carrara",
    "url": "https://www.ordinefarmacistimassacarrara.it/farmacie/calendario-giornaliero-turni/carrara-massa-fosdinovo.html"
  },
  "PI": {
    "titolo": "Federfarma Pisa",
    "url": "https://www.federfarmapisa.it/farmacie-di-turno/"
  },
  "TN": {
    "titolo": "Federfarma Trento",
    "url": "https://www.trento.federfarma.it/Home/Servizi-al-cittadino/Turni-farmacie.aspx"
  },
  "PG": {
    "titolo": "Federfarma Umbria",
    "url": "https://www.umbria.federfarma.it/Home/Servizi-al-cittadino/Turni-farmacie.aspx"
  },
  "TV": {
    "titolo": "Ordine dei Farmacisti di Treviso",
    "url": "https://ordinefarmacistitreviso.it/per-il-cittadino/elenco-farmacie-e-turni"
  },
  "VE": {
    "titolo": "Federfarma Venezia",
    "url": "https://www.federfarmave.it/index.php/farmacie-di-turno/"
  },
  "VI": {
    "titolo": "Federfarma Vicenza",
    "url": "https://www.federfarmavicenza.eu/farmacie-di-turno-in-provincia-di-vicenza/"
  },
  "VR": {
    "titolo": "Ordine dei Farmacisti di Verona",
    "url": "https://www.ordinefarmacisti.vr.it/turni-farmacie/"
  }
};

/** I dati sanitari del Comune attivo (regione e provincia prese dal Comune). */
export function saluteDelComune() {
  return {
    regione: SANITA_REGIONI[comune.regione] ?? null,
    farmacie: FARMACIE_TURNO[comune.provincia] ?? null,
    asl: comune.esenzioneTicket,
  };
}
