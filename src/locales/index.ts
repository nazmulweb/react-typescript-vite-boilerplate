import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import en from './lang/bn.json';
import bn from './lang/en.json';
// import { themeConfig } from '../configs/theme.config';

const resources = {
  en: {
    translation: en,
  },
  bn: {
    translation: bn,
  },
};

i18n.use(initReactI18next).init({
  resources,
  fallbackLng: 'en',
  lng: 'en',
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
