/* eslint consistent-return:0 */

const express = require('express');
const session = require('express-session');
const nocache = require('nocache');
const Redis = require('ioredis');
const RedisStore = require('connect-redis')(session);
const logger = require('./logger');

const argv = require('./argv');
const port = require('./port');
const setup = require('./middlewares/frontendMiddleware');
const isDev = process.env.NODE_ENV !== 'production';
const ngrok = (isDev && process.env.ENABLE_TUNNEL) || argv.tunnel ? require('ngrok') : false;
const resolve = require('path').resolve;
const api = require('./app');
const app = express();

const redis = new Redis(process.env.REDIS_URL || 'localhost:6379');

// If you need a backend, e.g. an API, add your custom backend-specific middleware here
const sess = {
  name: 'try-react',
  secret: 'try-react',
  store: new RedisStore({
    client: redis,
  }),
  resave: false,
  saveUninitialized: true,
  cookie: {
    httpOnly: true,
    secure: false,
  },
};
if (process.env.NODE_ENV === 'production' &&
    process.env.REDIECT_URL) {
  app.set('trust proxy', 1);
  sess.cookie.secure = true;
}

app.use('/api', nocache(), session(sess), api);

// In production we need to pass these values in instead of relying on webpack
setup(app, {
  outputPath: resolve(process.cwd(), 'build'),
  publicPath: '/',
});

// get the intended host and port number, use localhost and port 3000 if not provided
const customHost = argv.host || process.env.HOST;
const host = customHost || null; // Let http.Server use its default IPv6/4 host
const prettyHost = customHost || 'localhost';

// Start your app.
app.listen(port, host, (err) => {
  if (err) {
    return logger.error(err.message);
  }

  // Connect to ngrok in dev mode
  if (ngrok) {
    ngrok.connect(port, (innerErr, url) => {
      if (innerErr) {
        return logger.error(innerErr);
      }

      logger.appStarted(port, prettyHost, url);
    });
  } else {
    logger.appStarted(port, prettyHost);
  }
});
