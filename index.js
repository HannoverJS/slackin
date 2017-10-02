require('dotenv').config()

const slackin = require('slackin')

const {
  TOKEN,
  GCAPTCHA_SECRET,
  GCAPTCHA_SITEKEY,
  INTERVAL,
  PORT = 5000
} = process.env

slackin.default({
  org: 'hannoverjs',
  token: TOKEN,
  gcaptcha_secret: GCAPTCHA_SECRET,
  gcaptcha_sitekey: GCAPTCHA_SITEKEY,
  interval: INTERVAL
}).listen(PORT)
