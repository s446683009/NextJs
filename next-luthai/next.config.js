const { i18n } = require('./next-i18next.config')
const BASE_URL =process.env.NODE_ENV === "production"?'/next':'';

module.exports = {
  i18n,
  basePath: BASE_URL, //node
}

