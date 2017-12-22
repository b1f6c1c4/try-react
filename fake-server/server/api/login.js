const SetupEndpoint = require('./setup/setup.js');

module.exports = SetupEndpoint({
  name: 'login',
  urls: [{
    requests: [{
      method: 'POST',
      response: {
        message: 'ok',
        token: 'jwt',
      },
    }],
  }],
});
