import i18next from 'i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import enTranslations from '../locales/en/translation.json';
import esTranslations from '../locales/es/translation.json';
import itTranslations from '../locales/it/translation.json';
import ptTranslations from '../locales/pt/translation.json';
import enDataPracticeURL from '../wordlist/en/ldt-items-practice.csv';
import enDataValidatedURL520 from '../wordlist/en/item_bank_v5_520.csv';
import enDataValidatedURL from '../wordlist/en/item_bank_v5.csv';
import enDataNewURL from '../wordlist/en/ldt-new-items-v3.csv';
import esDataPracticeURL from '../wordlist/es/ldt-items-practice_esp.csv';
import esDataValidatedURL from '../wordlist/es/preliminary-item-bank_esp.csv';
import itDataPracticeURL from '../wordlist/it/ldt-items-practice_ita.csv';
import itDataValidatedURL from '../wordlist/it/preliminary-item-bank_ita.csv';
import ptDataPracticeURL from '../wordlist/pt/ldt-items-practice_por.csv';
import ptDataValidatedURL from '../wordlist/pt/preliminary-item-bank_por.csv';

import { processCSV } from './config/corpus';

export const wordlist = {
  en: {
    dataPracticeURL: enDataPracticeURL,
    dataValidatedURL: enDataValidatedURL,
    dataNewURL: enDataNewURL,
    dataValidatedURL2: enDataValidatedURL520,
  },
  es: {
    dataPracticeURL: esDataPracticeURL,
    dataValidatedURL: esDataValidatedURL,
    dataNewURL: '',
    dataValidatedURL2: '',
  },
  it: {
    dataPracticeURL: itDataPracticeURL,
    dataValidatedURL: itDataValidatedURL,
    dataNewURL: '',
    dataValidatedURL2: '',
  },
  pt: {
    dataPracticeURL: ptDataPracticeURL,
    dataValidatedURL: ptDataValidatedURL,
    dataNewURL: '',
    dataValidatedURL2: '',
  },
};

const languageDetector = new LanguageDetector();

languageDetector.addDetector({
  name: 'defaultToEnglish',
  // eslint-disable-next-line no-unused-vars
  lookup(_options) {
    return 'en';
  },
});

// To change the language with a querystring, append "?lng=LANGUAGE" to the the URL
// LANGUAGE here refers to the language code
// Ex. For Spanish: https://roar-swr-demo.web.app/?lng=es
// With multiple querystrings: https://roar-swr-demo.web.app/?mode=demo&lng=es

i18next
  .use(LanguageDetector)
  .on('languageChanged', processCSV)
  // .on('initialized', handleLanguageDetection)
  .init({
    debug: false,
    // which langauage codes to use. Ex. if 'en-US' detected, will use 'en'
    load: 'languageOnly',
    fallbackLng: 'en',
    detection: {
      order: ['defaultToEnglish', 'querystring'],
    },
    resources: {
      en: {
        translation: enTranslations,
      },
      es: {
        translation: esTranslations,
      },
      it: {
        translation: itTranslations,
      },
      pt: {
        translation: ptTranslations,
      },
    },
  });

// FOR LANGUAGE SELECT TRIAL

// export let islangaugeUndefined = false

// function handleLanguageDetection() {
//     if (!i18next.language) islangaugeUndefined = true
// }
