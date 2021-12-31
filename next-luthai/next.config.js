const { i18n } = require('./next-i18next.config')
const BASE_URL = process.env.NODE_ENV === "production" ? '/next' : '/next';

module.exports = {
  i18n,
  assetPrefix: BASE_URL,
  basePath: BASE_URL, //node,
 
}

