import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import en from './assets/locales/en.json';
import pt from './assets/locales/pt.json';
import I18nextBrowserLanguageDetector from 'i18next-browser-languagedetector';

i18n
    .use(I18nextBrowserLanguageDetector) // Habilita o uso do detector de idioma
    .use(initReactI18next) // Habilita o suporte do react-i18next
    .init({
        resources: {
            en: { translation: en },
            pt: { translation: pt },
        },
        fallbackLng: 'en', // Idioma padrão caso o detector falhe
        detection: {
            // Configurações para o detector de idioma
            order: ['navigator', 'localStorage', 'cookie', 'querystring', 'sessionStorage', 'htmlTag'],
            caches: ['localStorage', 'cookie'], // Onde armazenar o idioma detectado
        },
        interpolation: {
            escapeValue: false, // Não escapa valores, pois React já faz isso
        },
    });

export default i18n;
