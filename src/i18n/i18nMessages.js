import englishMessages from 'ra-language-english';
import arabicMessages from './arabicMessages';


arabicMessages.choices = {
  response_type: {
    text: 'نص',
  },
  selection_policy: {
    random: 'عشوائي',
    sequential: 'متسلسل',
    multiline: 'متعدد الأسطر',
  },
}

arabicMessages.resources = {

  'dialog-nodes': {
    name: 'المحادثات',
    fields: {
      title: 'العنوان',
      description: 'الوصف',
      conditions: 'شرط حدوث الرد',
      created: 'تاريخ الإنشاء',
      updated: 'تاريخ آخر تحديث',
      respond: {
        response_type: 'نوع الرد',
        selection_policy: 'طريقة الرد',
        values: 'الردود',
      },
      text: 'الرد',
    },
  },

  intents: {
    name: 'المقاصد',
    fields: {
      intent: 'اسم المقصد',
      description: 'الوصف',
      created: 'تاريخ الإنشاء',
      updated: 'تاريخ آخر تحديث',
      examples: 'الأمثلة',
      text: 'مثال'
    },
  }

}


const i18nMessages = {

  
  en: englishMessages,
  
  ar: arabicMessages,
  
}


export default i18nMessages;