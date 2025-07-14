import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import LanguageDetector from 'i18next-browser-languagedetector'

import homePT from './pt/home.json'
import homeEN from './en/home.json'
import headerPT from './pt/header.json'
import headerEN from './en/header.json'
import publicationDetailPT from './pt/publicationDetail.json'
import publicationDetailEN from './en/publicationDetail.json'
import publicationsPT from './pt/publications.json'
import publicationsEN from './en/publications.json'



i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      pt: {
        home: homePT,
        header: headerPT,
        publication_detail: publicationDetailPT,
        publications:publicationsPT
        // ...
      },
      en: {
        home: homeEN,
        header: headerEN,
        publication_detail: publicationDetailEN,
        publications:publicationsEN

        // ...
      },
    },
    fallbackLng: 'en',
    ns: ['home', 'header','publication_detail','publications'], // nomes dos arquivos
    defaultNS: 'home',
    interpolation: {
      escapeValue: false,
    },
  })

export default i18n
