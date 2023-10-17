import i18n from "i18next";
import { initReactI18next } from "react-i18next";

i18n.use(initReactI18next).init({
  resources: {
    en: {
      translation: require("./locales/en.json"),
    },
    ar: {
      translation: require("./locales/ar.json"),
    },
  },
  lng: localStorage.getItem("app_lang") || "en",
  fallbackLng: localStorage.getItem("app_lang") || "en",
  debug: false,
});

export default i18n;
