// Sul telefono (app installata) i dati non vengono cancellati dal browser: niente da fare.
// La versione per il sito web è in persistenza.web.ts (Metro la sceglie da solo sul web).

export type Sistema = "ios" | "android" | "altro";

export const chiediPersistenza = async (): Promise<boolean> => true;
export const staInstallata = (): boolean => true;
export const sistema = (): Sistema => "altro";
export const invitoRimandato = (): boolean => true;
export const rimandaInvito = (_giorni?: number): void => {};
