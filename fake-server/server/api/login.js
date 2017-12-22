const SetupEndpoint = require('./setup/setup.js');

module.exports = SetupEndpoint({
  name: 'login',
  urls: [{
    requests: [{
      method: 'POST',
      response: {
        message: 'ok',
        token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImFkbWluIiwiaWF0IjoxNTEzOTMzNzQyLCJhdWQiOiJ0cnktcmVhY3QiLCJpc3MiOiJ0cnktcmVhY3QifQ.cp9bmi_jdVsetN4WcHYKdgOEtaMCZcHKDMy2_jTtkik',
      },
    }],
  }],
});
