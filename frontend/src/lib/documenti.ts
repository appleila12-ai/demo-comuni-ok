// Aiuti condivisi per creare PDF e file da scaricare (lettere, calendario).
// Tutto avviene sul dispositivo: nessun dato viene inviato a un server.

import { Platform } from "react-native";
import * as Print from "expo-print";
import * as Sharing from "expo-sharing";
import * as FileSystem from "expo-file-system/legacy";

import { addVaultFile } from "@/src/lib/vault";

export function escapeHtml(t: string): string {
  return String(t ?? "")
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

/** Crea il PDF: sul web apre la stampa (Salva come PDF), su telefono lo condivide. */
export async function creaPdf(html: string, nomeFile: string): Promise<void> {
  if (Platform.OS === "web") {
    await Print.printAsync({ html });
    await addVaultFile(nomeFile);
    return;
  }
  const { uri } = await Print.printToFileAsync({ html });
  const dest = `${FileSystem.documentDirectory}${Date.now()}_${nomeFile}`;
  await FileSystem.copyAsync({ from: uri, to: dest });
  await addVaultFile(nomeFile, dest);
  if (await Sharing.isAvailableAsync()) {
    await Sharing.shareAsync(dest, { mimeType: "application/pdf", UTI: "com.adobe.pdf" });
  }
}

/** Scarica un file di testo (es. calendario .ics). */
export async function scaricaFile(nomeFile: string, contenuto: string, mime: string): Promise<void> {
  if (Platform.OS === "web") {
    const blob = new Blob([contenuto], { type: `${mime};charset=utf-8` });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = nomeFile;
    document.body.appendChild(a);
    a.click();
    a.remove();
    setTimeout(() => URL.revokeObjectURL(url), 2000);
    return;
  }
  const dest = `${FileSystem.documentDirectory}${nomeFile}`;
  await FileSystem.writeAsStringAsync(dest, contenuto);
  if (await Sharing.isAvailableAsync()) {
    await Sharing.shareAsync(dest, { mimeType: mime });
  }
}

/** Pagina HTML semplice e sobria per una lettera stampabile. */
export function paginaLettera(corpoHtml: string, titolo: string): string {
  return `<!doctype html><html lang="it"><head><meta charset="utf-8">
<title>${escapeHtml(titolo)}</title>
<style>
  @page { size: A4; margin: 22mm 20mm; }
  body { font-family: Georgia, "Times New Roman", serif; font-size: 12.5pt; line-height: 1.55; color: #222; }
  .mitt { margin-bottom: 18px; }
  .dest { margin: 18px 0 18px 50%; }
  .ogg { font-weight: bold; margin: 18px 0; }
  p { margin: 0 0 10px; }
  .firma { margin-top: 36px; margin-left: 50%; }
  .all { margin-top: 24px; font-size: 11pt; }
  .nota { margin-top: 40px; font-family: Arial, sans-serif; font-size: 8.5pt; color: #777; border-top: 1px solid #ddd; padding-top: 6px; }
</style></head><body>${corpoHtml}</body></html>`;
}
