import { ReactElement, useContext, useMemo, useState } from 'react';
import { LanguageContext, translate } from './translation';

export interface TextProps {
  value: string;
}

export default function Text({ value }: TextProps): ReactElement {
  const [translation, setTranslation] = useState<string>(value);
  const { currentLanguage } = useContext(LanguageContext);

  useMemo(
    () => setTranslation(translate(value, currentLanguage)),
    [currentLanguage, setTranslation, value],
  )

  return (
    <>{translation}</>
  );
}
