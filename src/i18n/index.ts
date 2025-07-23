import { createI18n} from "vue-i18n";
import en from './en.json'
import fr from './fr.json'

export const i18n = createI18n({
    locale: 'fr',
    fallbackLocale: 'en',
    messages: {
        en: en,
        fr: fr
    }
})