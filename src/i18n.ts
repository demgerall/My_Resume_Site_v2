import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

const resources = {
    en: {
        translation: {
            'Welcome to React': 'Welcome to React and react-i18next',
        },
    },
    ru: {
        translation: {
            'Welcome to React': 'Bienvenue à React et react-i18next',
        },
    },
};

i18n.use(LanguageDetector)
    .use(initReactI18next)
    .init({
        resources,
        fallbackLng: ['en', 'ru'],
        lng: 'en',
        interpolation: {
            escapeValue: false,
        },
        detection: {
            order: ['navigator', 'htmlTag'],
            caches: ['localStorage'],
        },
    });

export default i18n;
