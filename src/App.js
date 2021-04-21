import * as React from "react";
import { Admin, Resource, ListGuesser } from 'react-admin';
import jsonapiClient from "ra-jsonapi-client";
import { DialogNodeList } from "./dialog-nodes";
import { IntentList } from './intents';

const dataProvider = jsonapiClient('http://localhost:3000/api/admin', {
  total: 'total-count',
});

const App = () => {
  return (
    <Admin dataProvider={dataProvider}>
      <Resource name='dialog-nodes' list={DialogNodeList} />
      <Resource name='intents' list={IntentList} />
    </Admin>
  );
}

export default App;