export interface TranslationClient {
    translate(value: string, language: string): string;
}

export class MockTranslationClient {

    translate(value: string, language: string): string {
        if (language == 'en') {
            return value;
        }

        const chars = value.split("");
        chars.reverse()
        return chars.join("");
    }
}
