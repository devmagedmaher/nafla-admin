

export default {
  login: ({ username, password }) => {
    const request = new Request('http://localhost:3001/api/admin/users/auth', {
      method: 'POST',
      body: JSON.stringify({ username, password }),
      headers: new Headers({ 'Content-Type': 'application/json' }),
    });
    return fetch(request)
      .then(response => {
        if (response.status < 200 || response.status >= 300) {
          // throw new Error('Incorrect username or password');
          return Promise.reject();
        }
        return response.json();
      })
      .then(auth => {
        localStorage.setItem('authToken', JSON.stringify(auth.token));
        return Promise.resolve();
      });
  },
  logout: () => {
    localStorage.removeItem('authToken');
    return Promise.resolve();
  },
  checkError: ({ status }) => {
    if (status === 401 || status === 403) {
      localStorage.removeItem('authToken');
      return Promise.reject();
    }
    return Promise.resolve();
  },
  checkAuth: () => {
    return localStorage.getItem('authToken')
      ? Promise.resolve()
      : Promise.reject();
  },
  getPermissions: () => Promise.resolve(),
 }; 