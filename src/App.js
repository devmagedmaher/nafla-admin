import React, { useEffect } from "react";
import { createMuiTheme } from '@material-ui/core/styles';
import config from './config';
import simpleRestProvider from 'ra-data-simple-rest';
import authProvider from './authProvider';
import i18nMessages from './i18n/i18nMessages';
import polyglotI18nProvider from 'ra-i18n-polyglot';
import { Admin, Resource, fetchUtils, useLocale } from 'react-admin';
import { DialogNodeList, DialogNodeEdit, DialogNodeCreate } from "./pages/dialog-nodes";
import { IntentList, IntentEdit, IntentCreate } from './pages/intents';

import DialogIcon from '@material-ui/icons/Forum';
import IntentIcon from '@material-ui/icons/BubbleChart';
import Dashboard from "./dashbaord";
import Chat from "./chat";
import Menu from './menu';
import Layout from "./layout";
import changeDir from "./utils/change-direction";
import mapObjectToArray from "./utils/map-object-to-array";

const theme = createMuiTheme({
  
  // direction: 'rtl',

  palette: {

    // type: 'dark',

  },

});

const httpClient = (url, options = {}) => {
  if (!options.headers) {
      options.headers = new Headers({ Accept: 'application/json' });
  }
  const token = localStorage.getItem('authToken');
  if (token) {
    options.headers.set('Authorization', `Bearer ${token}`);
  }
  return fetchUtils.fetchJson(url, options);
};

const dataProvider = simpleRestProvider(`${config.api.baseUrl}/admin`, httpClient);

const i18nProvider = polyglotI18nProvider(locale => 
  i18nMessages[locale], // get locale messages object
  config.locales.default, // default locale
  { allowMissing: true } // disable polyglot wrnings.
);

const App = () => {

  useEffect(() => {
    changeDir(config.locales.default);
  }, []);

  return (<>
    <Admin
      dashboard={Dashboard}
      title='Nfla Bot Manager'
      theme={theme}
      // menu={Menu}
      layout={Layout}
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
  </>);
}

export default App;