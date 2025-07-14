// src/i18n.js
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

import translationPT from './pt/translation.json';
import translationEN from './en/translation.json';

const resources = {
  pt: { translation: translationPT },
  en: { translation: translationEN },
};

i18n
  .use(LanguageDetector) // detecta idioma automaticamente
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: 'pt',
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
