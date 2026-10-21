// Contatti utili dell'agenda: la persona scrive i riferimenti che le servono
// (medico, assistente sociale, patronato…). Restano SOLO su questo dispositivo.
// TutelApp non propone numeri propri: i recapiti dell'ente sono nella pagina "Aiuti e contatti".

export const CONTATTI_KEY = "tutelapp:contatti";

export type RuoloContatto = "medico" | "sociale" | "patronato" | "associazione" | "specialista" | "altro";

export type Contatto = {
  id: string;
  ruolo: RuoloContatto;
  nome: string;
  /** Solo cifre, + e spazi */
  telefono?: string;
  nota?: string;
};

export const RUOLI: { ruolo: RuoloContatto; etichetta: string; icon: string }[] = [
  { ruolo: "medico", etichetta: "Medico di famiglia", icon: "medkit-outline" },
  { ruolo: "sociale", etichetta: "Assistente sociale", icon: "people-outline" },
  { ruolo: "patronato", etichetta: "Patronato o CAF", icon: "document-text-outline" },
  { ruolo: "associazione", etichetta: "Associazione", icon: "heart-outline" },
  { ruolo: "specialista", etichetta: "Medico specialista", icon: "pulse-outline" },
  { ruolo: "altro", etichetta: "Altro", icon: "person-outline" },
];

export const etichettaRuolo = (r: RuoloContatto) => RUOLI.find((x) => x.ruolo === r)?.etichetta ?? "Contatto";

/** "348 726 0322", "+39 0187 12345" → pulito; null se non sembra un numero */
export function pulisciTelefono(t: string): string | null {
  const solo = t.replace(/[^\d+\s]/g, "").replace(/\s+/g, " ").trim();
  const cifre = solo.replace(/\D/g, "");
  if (cifre.length < 6 || cifre.length > 15) return null;
  return solo;
}

/** Indirizzo per far partire la chiamata */
export const linkChiamata = (t: string) => `tel:${t.replace(/[^\d+]/g, "")}`;

/** Legge l'elenco salvato scartando le voci rovinate */
export function leggiContatti(raw: string | null | undefined): Contatto[] {
  if (!raw) return [];
  try {
    const v = JSON.parse(raw);
    if (!Array.isArray(v)) return [];
    return v.filter(
      (c) =>
        c &&
        typeof c.id === "string" &&
        typeof c.nome === "string" &&
        c.nome.trim() !== "" &&
        RUOLI.some((r) => r.ruolo === c.ruolo),
    );
  } catch {
    return [];
  }
}
