import { ReactElement, useState } from 'react';

import { DEFAULT_LANGUAGE, LanguageContext } from './translation';
import LanguageSelect from './LanguageSelect';
import Text from './Text';

export default function App(): ReactElement {
  const [currentLanguage, setCurrentLanguage] = useState<string>(DEFAULT_LANGUAGE);

  return (
    <LanguageContext.Provider value={{ currentLanguage, setCurrentLanguage }}>
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
