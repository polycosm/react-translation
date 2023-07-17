import { ReactElement, useCallback, useMemo, useState } from 'react';

import { DEFAULT_LANGUAGE, LanguageContext } from './contexts';
import { LanguageSelect, Text } from './components';

export default function App(): ReactElement {
  const [language, setLanguage] = useState<string>(DEFAULT_LANGUAGE);

  const setCurrentLanguage = useCallback(
    (value: string) => {
      setLanguage(value);
    },
    [setLanguage],
  )

  const contextValue = useMemo(
    () => {
      return {
        currentLanguage: language,
        setCurrentLanguage,
      };
    }, [language, setCurrentLanguage],
  );

  return (
    <LanguageContext.Provider value={contextValue}>
      <div className="App">
        <header className="App-header">
          <h1><Text value="Hello World" /></h1>
        </header>
        <div>
          <LanguageSelect />
          <p><Text value="This is an example." /></p>
        </div>
      </div>
    </LanguageContext.Provider >
  );
}
