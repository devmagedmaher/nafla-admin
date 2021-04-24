
const isDev = process.env.NODE_ENV !== "production";

export { isDev };


const config = {
  api: {
    baseUrl: isDev ? 'http://localhost:3001/api' : 'https://nfla1-rest-api.herokuapp.com/api',
  }
}

export default config;