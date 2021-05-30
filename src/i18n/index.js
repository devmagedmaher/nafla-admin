import _ from 'lodash';
import englishMessages from 'ra-language-english';
import customEnglishMessages from './customEnglishMessages';
import arabicMessages from './arabicMessages';
import customArabicMessages from './customArabicMessages';


const i18nMessages = {
  
  en: _.merge(englishMessages, customEnglishMessages),
  
  ar: _.merge(arabicMessages, customArabicMessages),
  
}


export default i18nMessages;