const SetupEndpoint = require('./setup/setup.js');

module.exports = SetupEndpoint({
  name: 'status',
  path: '/api',
  urls: [{
    requests: [{
      method: 'GET',
      response: {
        version: 'the-version',
        commitHash: 'the-hash',
      },
    }],
  }],
});
