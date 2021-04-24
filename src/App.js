import React from "react";
import { createMuiTheme } from '@material-ui/core/styles';
import simpleRestProvider from 'ra-data-simple-rest';
import authProvider from './authProvider';
import i18nMessages from './i18n/i18nMessages';
import polyglotI18nProvider from 'ra-i18n-polyglot';
import { Admin, Resource, ListGuesser, fetchUtils } from 'react-admin';
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

const httpClient = (url, options = {}) => {
  if (!options.headers) {
      options.headers = new Headers({ Accept: 'application/json' });
  }
  const auth = JSON.parse(localStorage.getItem('auth'));
  if (auth && auth.token) {
    options.headers.set('Authorization', `Bearer ${auth.token}`);
  }
  return fetchUtils.fetchJson(url, options);
};

const dataProvider = simpleRestProvider('http://localhost:3001/api/admin', httpClient);

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
      authProvider={authProvider}
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