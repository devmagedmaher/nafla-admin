import { api, LOCAL_AUTH_KEY, LOCAL_WORKSPACE_KEY } from '../constants/config';
import { fetchUtils } from 'react-admin';


const authProvider = {
  
  /**
   * LOGIN Method
   * 
   */
  login: ({ username, password }) => {
    const request = new Request(`${api.authUrl}`, {
      method: 'POST',
      body: JSON.stringify({ username, password }),
      headers: new Headers({ 'Content-Type': 'application/json' }),
    });
    return fetch(request)
      .then(response => {
        if (response.status < 200 || response.status >= 300) {
          return Promise.reject();
        }
        return response.json();
      })
      .then(JSON.stringify)
      .then(auth => {
        localStorage.setItem(LOCAL_AUTH_KEY, auth);
        return Promise.resolve();
      });
  },
  
  
  /**
   * LOGOUT Method
   * 
   */
  logout: () => {
    localStorage.removeItem(LOCAL_AUTH_KEY);
    return Promise.resolve();
  },
  
  
  /**
   * CHECK AUTH Errors in responses
   * 
   */
  checkError: ({ status }) => {
    if (status === 401 || status === 403) {
      localStorage.removeItem(LOCAL_AUTH_KEY);
      return Promise.reject();
    }
    return Promise.resolve();
  },

  
  /**
   * CHECK AUTH
   * 
   */
  checkAuth: () => {
    return localStorage.getItem(LOCAL_AUTH_KEY)
      ? Promise.resolve()
      : Promise.reject();
  },
  
  
  /**
   * GET PERMISSIOns
   * 
   */
  getPermissions: () => Promise.resolve(),

}


/** 
 * set auth header before sending requests.
 * 
 */
 const httpClient = (url, options = {}) => {
  if (!options.headers) {
      options.headers = new Headers({ Accept: 'application/json' });
  }
  try {
    const auth = localStorage.getItem(LOCAL_AUTH_KEY)
    const { token } = JSON.parse(auth);
    if (token) {
      options.headers.set('Authorization', `Bearer ${token}`);
    }
  }
  catch (error) {
    console.log(error);
  }

  /** inject workspace id from localstorage */
  const workspace = window.localStorage.getItem(LOCAL_WORKSPACE_KEY);
  if (workspace) {

    try {
      const { id } = JSON.parse(workspace);
      options.headers.set('Workspace-Id', id);
    }
    catch(error) {
      console.log(error);
    }

  }

  return fetchUtils.fetchJson(url, options);
};


export { httpClient };

export default authProvider;