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

export function translate(value: string, language: string): string {
  if (language == 'en') {
    return value;
  }

  const chars = value.split("");
  chars.reverse()
  return chars.join("");
}
