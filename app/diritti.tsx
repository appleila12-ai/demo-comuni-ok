// "I tuoi diritti": un solo ingresso. Se la persona ha già risposto al
// questionario apre i suoi risultati, altrimenti le fa le domande.

import { useEffect } from "react";
import { ActivityIndicator, View } from "react-native";
import { useRouter } from "expo-router";

import { colors } from "@/src/theme";
import { listReports } from "@/src/lib/reports";

export default function Diritti() {
  const router = useRouter();
  useEffect(() => {
    listReports().then((l) => {
      router.replace((l.length > 0 ? `/risultati/${l[0].id}` : "/valutazione") as any);
    });
  }, [router]);
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center", backgroundColor: colors.background }}>
      <ActivityIndicator color={colors.brandPrimary} />
    </View>
  );
}
