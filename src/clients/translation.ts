import { LRUCache } from 'lru-cache'

export interface TranslationClient {
    translate(value: string, language: string): Promise<string>;
}

export class MockTranslationClient {

    translate(value: string, language: string): Promise<string> {
        if (language == 'en') {
            return Promise.resolve(value);
        }

        const chars = value.split("");
        chars.reverse()
        return Promise.resolve(chars.join(""));
    }
}

export class GoogleTranslationClient {

    constructor(
        private readonly apiKey: string,
        private readonly baseUrl: string = "https://translation.googleapis.com/language/translate/v2",
        private readonly cache = new LRUCache<string, string>({ max: 1000 }),
    ) { }

    async translate(value: string, language: string): Promise<string> {
        if (language == 'en') {
            return value;
        }

        const key = `${language}.${value}`;
        const hit = this.cache.get(key);

        if (hit) {
            return hit;
        }

        const query = new URLSearchParams({
            q: value,
            source: 'en',
            target: language,
            key: this.apiKey,
        });
        const url = `${this.baseUrl}?${query.toString()}`;
        console.log(url);
        const response = await fetch(url);
        const { data } = await response.json();
        const { translations } = data;
        const { translatedText } = translations[0];

        this.cache.set(key, translatedText);
        return translatedText;
    }
}
