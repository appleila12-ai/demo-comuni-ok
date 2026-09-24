// Illustrazioni TutelApp.
// Su telefono arrivano dal backend (su Expo Go gli asset impacchettati non
// venivano caricati dal tunnel); sul web sono incluse nell'app, così funzionano
// anche senza backend (es. demo su Netlify). I file sono identici.

import { ImageSourcePropType, Platform } from "react-native";

import { HA_BACKEND } from "@/src/config/servizi";

const BASE = `${process.env.EXPO_PUBLIC_BACKEND_URL}/api/assets/illustrations`;

const LOCALI: Record<string, ImageSourcePropType> = {
  home_hero: require("@/assets/images/illustrations/home_hero.jpg"),
  wizard_diagnosi: require("@/assets/images/illustrations/wizard_diagnosi.jpg"),
  wizard_lavoro: require("@/assets/images/illustrations/wizard_lavoro.jpg"),
  wizard_certificato: require("@/assets/images/illustrations/wizard_certificato.jpg"),
  diritti104: require("@/assets/images/illustrations/diritti104.jpg"),
  territorio: require("@/assets/images/illustrations/territorio.jpg"),
  trasporti: require("@/assets/images/illustrations/trasporti.jpg"),
  domiciliare: require("@/assets/images/illustrations/domiciliare.jpg"),
  fisioterapia: require("@/assets/images/illustrations/fisioterapia.jpg"),
  rsa: require("@/assets/images/illustrations/rsa.jpg"),
};

const img = (name: string): ImageSourcePropType =>
  Platform.OS === "web" || !HA_BACKEND ? LOCALI[name] : { uri: `${BASE}/${name}.jpg` };

export const IMAGES: Record<string, ImageSourcePropType> = {
  homeHero: img("home_hero"),
  wizardDiagnosi: img("wizard_diagnosi"),
  wizardLavoro: img("wizard_lavoro"),
  wizardCertificato: img("wizard_certificato"),
  diritti104: img("diritti104"),
  territorio: img("territorio"),
  trasporti: img("trasporti"),
  domiciliare: img("domiciliare"),
  fisioterapia: img("fisioterapia"),
  rsa: img("rsa"),
};
