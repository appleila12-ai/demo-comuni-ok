// Pagina "Le mie scadenze" (la stessa sezione è anche dentro "La mia pratica").
import { useSezione } from "@/src/lib/statistiche";
import { Pagina } from "@/src/components/Pagina";
import { ScadenzeSezione } from "@/src/components/ScadenzeSezione";

export default function Scadenze() {
  useSezione("scadenze");
  return (
    <Pagina titolo="Le mie scadenze" testID="scadenze-screen">
      <ScadenzeSezione mostraTitolo={false} />
    </Pagina>
  );
}
