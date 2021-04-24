import config from './config';


const LOCAL_AUTH_KEY = 'authToken';


const authProvider = {
  login: ({ username, password }) => {
    const request = new Request(`${config.api.baseUrl}/users/auth`, {
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
      .then(auth => {
        localStorage.setItem(LOCAL_AUTH_KEY, JSON.stringify(auth.token));
        return Promise.resolve();
      });
  },
  logout: () => {
    localStorage.removeItem(LOCAL_AUTH_KEY);
    return Promise.resolve();
  },
  checkError: ({ status }) => {
    if (status === 401 || status === 403) {
      localStorage.removeItem(LOCAL_AUTH_KEY);
      return Promise.reject();
    }
    return Promise.resolve();
  },
  checkAuth: () => {
    return localStorage.getItem(LOCAL_AUTH_KEY)
      ? Promise.resolve()
      : Promise.reject();
  },
  getPermissions: () => Promise.resolve(),
}


export default authProvider;