// Versione per il sito web: nessun avviso sul telefono.
// (Metro sceglie da solo questo file sul web: il pacchetto delle notifiche non entra nel sito.)
// Sul sito i promemoria passano dal calendario (.ics) in "Le mie scadenze".

import type { Promemoria } from "@/src/lib/promemoria";

export type StatoPermesso = "concesso" | "negato" | "da-chiedere" | "non-disponibile";

export const notificheDisponibili = () => false;
export const statoPermesso = async (): Promise<StatoPermesso> => "non-disponibile";
export const chiediPermesso = async (): Promise<boolean> => false;
export const riprogramma = async (_lista: Promemoria[]): Promise<number> => 0;
export const annullaTutti = async (): Promise<void> => {};
export const ascoltaTocchi = (_vai: (route: string) => void): (() => void) => () => {};
