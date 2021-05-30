

const customArabicMessages = {

  menu: {
    home: 'الرئيسية',
  },

  pages: {
    home: {
      welcome_message: 'مرحبا بك في لوحة التحكم.',
    },
  },


  choices: {
    response_type: {
      text: 'نص',
    },
    selection_policy: {
      random: 'عشوائي',
      sequential: 'متسلسل',
      multiline: 'متعدد الأسطر',
    },
  },

  
  resources: {
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
      tabs: {
        general: 'عام',
        responses: 'الردود',
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
      tabs: {
        general: 'عام',
        examples: 'امثلة',
      },
      create: {
        title: 'إنشاء مقصد',
      },
    }
  },


  ra: {

    notification: {
      deleted: "جاري حذف العنصر |||| جاري حذف %{smart_count} من العناصر",
      success: 'تمت العملية بنجاح',
    }

  }

}


export default customArabicMessages;