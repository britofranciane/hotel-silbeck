import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import enTranslations from './locales/en/translation.json';
import esTranslations from './locales/es/translation.json';
import ptBrTranslations from './locales/pt-br/translation.json';

i18n.use(initReactI18next).init({
  resources: {
    pt: {
      translation: ptBrTranslations
    },
    en: {
      translation: enTranslations
    },
    es: {
      translation: esTranslations
    }
  },
  lng: 'pt',
  fallbackLng: 'pt',
  interpolation: {
    escapeValue: false
  }
});

export default i18n;
