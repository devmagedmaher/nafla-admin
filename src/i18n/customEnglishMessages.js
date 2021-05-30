

const customArabicMessages = {

  menu: {
    home: 'Home',
  },


  choices: {
    response_type: {
      text: 'Text',
    },
    selection_policy: {
      random: 'Random',
      sequential: 'Sequential',
      multiline: 'Multiline',
    },
  },

  
  resources: {
    'dialog-nodes': {
      name: 'Dialogs',
      fields: {
        respond: {
          response_type: 'Response type',
          selection_policy: 'Selection policy',
          values: 'responses',
        },
        text: 'response',
      },
      tabs: {
        general: 'General',
        responses: 'Responses',
      },
    },
  
    intents: {
      name: 'intents',
      tabs: {
        general: 'General',
        examples: 'Examples',
      },
    }
  },

}


export default customArabicMessages;