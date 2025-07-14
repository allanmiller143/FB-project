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
import contactPT from './pt/Contact.json'
import contactEN from './en/Contact.json'
import newsDetailPT from './pt/news_detail.json'
import newsDetailEN from './en/news_detail.json'
import newsPT from './pt/news.json'
import newsEN from './en/news.json'
import teamPT from './pt/team.json'
import teamEN from './en/team.json'

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      pt: {
        home: homePT,
        header: headerPT,
        publication_detail: publicationDetailPT,
        publications:publicationsPT,
        contact:contactPT,
        news_detail:newsDetailPT,
        news: newsPT,
        team:teamPT
        // ...
      },
      en: {
        home: homeEN,
        header: headerEN,
        publication_detail: publicationDetailEN,
        publications:publicationsEN,
        contact:contactEN,
        news_detail: newsDetailEN,
        news: newsEN,
        team:teamEN

        // ...
      },
    },
    fallbackLng: 'en',
    ns: ['home', 'header','publication_detail','publications','contact','news_detail', 'news', 'team'], // nomes dos arquivos
    defaultNS: 'home',
    interpolation: {
      escapeValue: false,
    },
  })

export default i18n
