

const isDev = process.env.NODE_ENV !== "production";
const host = isDev ? 'http://192.168.1.97:3001' : 'http://3.67.161.207:3001';


const config = {

  /**
   * the localeStorage auth key name
   * 
   */
  LOCAL_AUTH_KEY: 'authToken',
  LOCAL_WORKSPACE_KEY: 'workspaceId',
  

  /**
   *  api config
   * 
   */
  api: {
    baseUrl: host + '/api',
    adminUrl: host + '/api/admin',
    authUrl: host + '/api/admin/auth',
  },


  /**
   * locales config
   */
  locales: {
    default: 'ar',
    ar: {
      name: 'العربية',
    },
    en: {
      name: 'English',
    }
  },

}


const { LOCAL_AUTH_KEY, LOCAL_WORKSPACE_KEY, api, locales } = config;

export {
  isDev,
  LOCAL_AUTH_KEY,
  LOCAL_WORKSPACE_KEY,
  host,
  api,
  locales,
}

export default config;