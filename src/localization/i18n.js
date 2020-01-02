import { addMessages, init, locale } from 'svelte-i18n';

import en from './en.json';
import es from './es.json';

addMessages('en', en);
addMessages('es', es);

init({
    fallbackLocale: 'en',
    initialLocale: {
        navigator: true,
        fallback: 'en'
    }
});