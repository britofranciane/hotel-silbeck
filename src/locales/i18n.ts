import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import enTranslations from './en/translation.json';
import esTranslations from './es/translation.json';
import ptBrTranslations from './pt-br/translation.json';

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
