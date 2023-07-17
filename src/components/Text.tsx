import { ReactElement, useContext, useEffect, useState } from 'react';
import { LanguageContext } from '../contexts';
import { TranslationClient, GoogleTranslationClient } from '../clients/translation';

export interface TextProps {
  value: string;
}

const apiKey = process.env.REACT_APP_GOOGLE_TRANSLATION_API_KEY;
if (apiKey === undefined) {
  throw new Error('Please configure REACT_APP_GOOGLE_TRANSLATION_API_KEY');
}

const translationClient: TranslationClient = new GoogleTranslationClient(apiKey);

export default function Text({ value }: TextProps): ReactElement {
  const [translation, setTranslation] = useState<string>(value);

  const { currentLanguage } = useContext(LanguageContext);

  useEffect(
    () => {
      async function translate() {
        const result = await translationClient.translate(value, currentLanguage);
        setTranslation(result);
      }

      translate();
    },
    [value, currentLanguage, setTranslation, translationClient],
  )

  return (
    <>{translation}</>
  );
}
