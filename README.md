# react-translation

An example of using React components to translate text.

Provides:

 - A `LanguageContext` for choosing a language.
 - A `TranslationClient` interface.
 - An example `LanguageSelect` component to choose a language.
 - An example `Text` component to render translated text.
 - An mock implemention of `TranslationClient`
 - A Google Cloud Translation API implementation of `TranslationClient`


## Google Cloud Translation API

To use with the Google Cloud Translation API, register for an account, generate an API Key,
and save the API key to a `.env` file as:

```
REACT_APP_GOOGLE_TRANSLATION_API_KEY="<API_KEY>"
```
