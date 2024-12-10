import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

// Importando traduções com base na estrutura da pasta
import enHome from './locales/home/home_EN.json';
import esHome from './locales/home/home_ES.json';
import ptHome from './locales/home/home_PT.json';
import chHome from './locales/home/home_CH.json';
import arHome from './locales/home/home_ARABE.json';

import enAbout from './locales/about/about_EN.json';
import esAbout from './locales/about/about_ES.json';
import ptAbout from './locales/about/about_PT.json';
import chAbout from './locales/about/about_CH.json';
import arAbout from './locales/about/about_ARABE.json';

import enSolution from './locales/solutions/solutions_EN.json';
import esSolution from './locales/solutions/solutions_ES.json';
import ptSolution from './locales/solutions/solutions_PT.json';
import chSolution from './locales/solutions/solutions_CH.json';
import arSolution from './locales/solutions/solutions_ARABE.json';

import enContacts from './locales/contact/contact_EN.json';
import esContacts from './locales/contact/contact_ES.json';
import ptContacts from './locales/contact/contact_PT.json';
import chContacts from './locales/contact/contact_CH.json';
import arContacts from './locales/contact/contact_ARABE.json';

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      en: {
        translation: {
          ...enHome,
          ...enAbout,
          ...enSolution,
          ...enContacts,
        },
      },
      es: {
        translation: {
          ...esHome,
          ...esAbout,
          ...esSolution,
          ...esContacts,
        },
      },
      pt: {
        translation: {
          ...ptHome,
          ...ptAbout,
          ...ptSolution,
          ...ptContacts,
        },
      },
      ch: {
        translation: {
          ...chHome,
          ...chAbout,
          ...chSolution,
          ...chContacts,
        },
      },
      ar: {
        translation: {
          ...arHome,
          ...arAbout,
          ...arSolution,
          ...arContacts,
        },
      },
    },
    fallbackLng: 'en', // Idioma padrão
    interpolation: {
      escapeValue: false, // Desabilita escape para evitar problemas com HTML
    },
  });

export default i18n;
