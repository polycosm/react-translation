import { createContext } from 'react';

export const DEFAULT_LANGUAGE = 'en';

export const DEFAULT_LANGUAGE_OPTIONS = {
    en: 'English',
    es: 'Español',
    fr: 'Français',
};

export interface LanguageState {
    currentLanguage: string;
    setCurrentLanguage: (language: string) => void;
}

export const LanguageContext = createContext<LanguageState>({
    currentLanguage: DEFAULT_LANGUAGE,
    setCurrentLanguage: () => { },
});
