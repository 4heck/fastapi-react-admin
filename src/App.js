import * as React from "react";
import { Admin, Resource } from 'react-admin';
import jsonServerProvider from 'ra-data-json-server';

import { UserList, UserCreate, UserShow } from './Users';

const App = () => (
  <Admin dataProvider={jsonServerProvider('http://127.0.0.1:9000')}>
    < Resource name="users" list={UserList} create={UserCreate} show={UserShow} />
  </Admin >
);

export default App;
