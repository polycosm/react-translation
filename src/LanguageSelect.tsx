import { ChangeEvent, ReactElement, useContext } from 'react';

import { DEFAULT_LANGUAGE_OPTIONS, LanguageContext } from './translation';

export interface LanguageSelectProps {
  languages?: Record<string, string>;
}

export default function LanguageSelect({
  languages = DEFAULT_LANGUAGE_OPTIONS,
}: LanguageSelectProps): ReactElement {
  const { currentLanguage, setCurrentLanguage } = useContext(LanguageContext);

  function onChange(event: ChangeEvent<HTMLSelectElement>) {
    setCurrentLanguage(event.target.value);
  }

  return (
    <select onChange={onChange}>
      {Object.keys(languages).map((value) => (
        <option
          value={value}
          key={value}
          selected={value == currentLanguage}
        >
          {languages[value]}
        </option>
      ))}
    </select>
  );
}