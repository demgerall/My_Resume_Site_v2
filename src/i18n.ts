import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import Backend from 'i18next-http-backend';

i18n.use(Backend)
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
        backend: {
            loadPath: '/My_Resume_Site_v2/locales/{{lng}}/{{ns}}.json',
        },
        fallbackLng: ['en', 'ru'],
        load: 'languageOnly',
        detection: {
            order: ['navigator', 'htmlTag'],
            caches: ['localStorage'],
        },
    });

export default i18n;
