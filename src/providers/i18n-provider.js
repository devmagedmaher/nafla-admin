import polyglotI18nProvider from 'ra-i18n-polyglot';
import i18nMessages from '../i18n';
import { locales } from '../constants/config';


const i18nProvider = polyglotI18nProvider(locale => 
  i18nMessages[locale], // get locale messages object
  locales.default, // default locale
  { allowMissing: true } // disable polyglot wrnings.
);


export default i18nProvider;