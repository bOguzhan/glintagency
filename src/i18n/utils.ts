import { ui, defaultLang } from "./ui";

export function getLangFromUrl(url: URL) {
    // Hardcode to English so all components get 'en'
    return defaultLang;
}

export function getUrlWithoutLang(url: URL) {
    // Since we are flattening the structure, the URL is already without lang
    return url.pathname;
}

export function useTranslations(lang: keyof typeof ui) {
    return function t(key: keyof (typeof ui)[typeof defaultLang]) {
        // Always pull from the English (defaultLang) dictionary
        return ui[defaultLang][key];
    };
}

export function useTranslatedPath(lang: keyof typeof ui) {
    return function translatePath(path: string, l: string = lang) {
        // Force it to return the path as-is, removing any '/en/' or '/it/' prefixes
        // This ensures links like {translatePath('/about')} result in '/about'
        return path.startsWith('/') ? path : `/${path}`;
    };
}