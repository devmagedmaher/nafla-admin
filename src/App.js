import React from "react";
import { Admin, Resource } from 'react-admin';

import theme from './constants/theme';
import dataProvider from './providers/data-provider';
import authProvider from './providers/auth-provider';
import i18nProvider from './providers/i18n-provider';
import routes from './routes';

import Layout from "./layout/index";
import DialogNodeResourceProps from './resources/dialog-nodes';
import IntentResourceProps from './resources/intents';
import WorkspacesResourceProps from './resources/workspaces';


const App = () => {
  return (<>
    <Admin
      layout={Layout}
      
      customRoutes={routes}
      theme={theme}
      
      dataProvider={dataProvider}
      authProvider={authProvider}
      i18nProvider={i18nProvider}
    > 
      <Resource {...WorkspacesResourceProps} />
      <Resource {...DialogNodeResourceProps} />
      <Resource {...IntentResourceProps} />
    </Admin>
  </>);
}

export default App;