import React from "react";
import { createMuiTheme } from '@material-ui/core/styles';
import jsonapiClient from "ra-jsonapi-client";
import simpleRestProvider from 'ra-data-simple-rest';
import i18nMessages from './i18n/i18nMessages';
import polyglotI18nProvider from 'ra-i18n-polyglot';
import { Admin, Resource, ListGuesser } from 'react-admin';
import { DialogNodeList, DialogNodeEdit, DialogNodeCreate } from "./pages/dialog-nodes";
import { IntentList, IntentEdit, IntentCreate } from './pages/intents';

import DialogIcon from '@material-ui/icons/Forum';
import IntentIcon from '@material-ui/icons/BubbleChart';

const theme = createMuiTheme({
  
  direction: 'rtl',

  palette: {

    secondary: {
      main: '#33f',
    },

  },

});

// const dataProvider = jsonapiClient('http://localhost:3001/api/admin');
const dataProvider = simpleRestProvider('http://localhost:3001/api/admin');

const i18nProvider = polyglotI18nProvider(locale => 
  i18nMessages[locale], // get locale messages object
  'ar', // default locale
  { allowMissing: true } // disable polyglot wrnings.
);

const App = () => {
  return (
    <Admin
      title='Nfla Bot Manager'
      theme={theme}
      dataProvider={dataProvider}
      i18nProvider={i18nProvider}
    >
      <Resource
        name='dialog-nodes'
        icon={DialogIcon}
        list={DialogNodeList}
        edit={DialogNodeEdit}
        create={DialogNodeCreate}
      />

      <Resource
        name='intents'
        icon={IntentIcon}
        list={IntentList}
        edit={IntentEdit}
        create={IntentCreate}
      />
    </Admin>
  );
}

export default App;