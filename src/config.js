
const isDev = process.env.NODE_ENV !== "production";

const api = {
  baseUrl: isDev ? 'http://192.168.1.97:3001/api' : 'https://nfla1-rest-api.herokuapp.com/api',
};

const locales = {
    default: 'ar',
    ar: {
      name: 'العربية',
    },
    en: {
      name: 'English',
    }
};


export {

  isDev,
  api,
  locales,

}

const config = {
  
  isDev,
  api,
  locales,

}

export default config;