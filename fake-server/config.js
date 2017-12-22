const Confidence = require('confidence');
require('dotenv').load();

const criteria = {
  env: process.env.NODE_ENV,
};

const config = {
  $meta: 'General project wide config.',
  projectName: 'http-fake-backend',
  env: process.env.NODE_ENV,
  apiUrlPrefix: '/api',
  port: {
    web: process.env.PORT || 3000,
  },
};

const store = new Confidence.Store(config);
exports.get = (key) => store.get(key, criteria);
exports.meta = (key) => store.meta(key, criteria);
