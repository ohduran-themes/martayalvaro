import i18n from 'i18next';
import detector from "i18next-browser-languagedetector";
import { initReactI18next } from 'react-i18next';

import en from './locale/en';
import es from './locale/es';
import cat from './locale/cat';

i18n
  .use(detector)
  .use(initReactI18next)
  .init({
  resources: {
    es,
    en,
    cat
  },
  fallbackLng: 'es',
  debug: process.env.NODE_ENV !== 'production',
  ns: ['translations'],
  defaultNS: 'translations',
  keySeparator: false,
  interpolation: {
    escapeValue: false,
    formatSeparator: ',',
  },
  react: {
    wait: true,
  },
});

export default i18n;
