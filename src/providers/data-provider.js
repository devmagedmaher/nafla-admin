import simpleRestProvider from 'ra-data-simple-rest';
import { api } from '../constants/config';
import { httpClient } from './auth-provider';


const dataProvider = (
  simpleRestProvider(`${api.adminUrl}`, httpClient)
);


export default dataProvider;