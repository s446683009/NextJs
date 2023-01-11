const { i18n } = require('./next-i18next.config')
const BASE_URL = process.env.NODE_ENV === "production" ? '/backend' : '/backend';

module.exports = {
  i18n,
  assetPrefix: BASE_URL,
  basePath: BASE_URL, //node,
  env:{
    NEXTAUTH_URL: 'http://localhost:3000/backend/api/auth',
    NEXTAUTH_SECRET: 'aW1fO1dCwxOkjqfUKA7XfH/wKami9AMXAKWGi+FXBJ4=',
  },
  experimental: {
    appDir: true,
  },
}

