import { ReactElement, useContext, useMemo, useState } from 'react';
import { LanguageContext } from '../contexts';
import { TranslationClient, MockTranslationClient } from '../clients/translation';

export interface TextProps {
  client?: TranslationClient;
  value: string;
}

export default function Text({ client, value }: TextProps): ReactElement {
  const translationClient = client ?? new MockTranslationClient();
  const [translation, setTranslation] = useState<string>(value);
  const { currentLanguage } = useContext(LanguageContext);

  useMemo(
    () => setTranslation(translationClient.translate(value, currentLanguage)),
    [currentLanguage, setTranslation, value],
  )

  return (
    <>{translation}</>
  );
}
