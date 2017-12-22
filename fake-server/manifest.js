const Confidence = require('confidence');
const Config = require('./config');
const Fs = require('fs');
const Path = require('path');

const criteria = {
  env: process.env.NODE_ENV,
};

const pathToEndpointConfigFiles = 'fake-server/server/api';

const manifest = {
  $meta: 'Hapi server config used by glue to compose the server.',
  server: {
    debug: {
      request: ['error'],
    },
    connections: {
      routes: {
        security: true,
        cors: {
          origin: ['*'],
          credentials: true,
        },
      },
      router: {
        stripTrailingSlash: true,
        isCaseSensitive: false,
      },
    },
  },
  connections: [{
    port: Config.get('/port/web'),
    labels: ['web'],
  }],
  registrations: [{
    plugin: {
      register: 'good',
      options: {
        ops: {
          interval: 15000,
        },
        reporters: {
          console: [{
            module: 'good-squeeze',
            name: 'Squeeze',
            args: [{
              log: '*',
              response: '*',
            }],
          }, {
            module: 'good-console',
            args: [{ format: 'YYYY-MM-DDTHH:mm:ss.SSS' }],
          }, 'stdout'],
        },
      },
    },
  }],
};

// Add plugins to manifest.registration for every endpoint in ./server/api
Fs.readdirSync(pathToEndpointConfigFiles).filter((file) => /^[^.].*\.js$/.test(file)).map((file) => Path.join(pathToEndpointConfigFiles, file)).filter((file) => Fs.statSync(file).isFile()).forEach((file) => {
  const plugin = { plugin: `./server/api/${Path.parse(file).name}` };
  manifest.registrations.push(plugin);
});

const store = new Confidence.Store(manifest);
exports.get = (key) => store.get(key, criteria);
exports.meta = (key) => store.meta(key, criteria);
