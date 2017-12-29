const Boom = require('boom');
const Config = require('../../../config');

module.exports = (settings) => {
  const exportEndpoint = {};
  const path = settings.path || `${Config.get('/apiUrlPrefix')}/${settings.name}`;
  const urls = settings.urls;

  exportEndpoint.register = (server, options, next) => {
    const routes = [];

    const createRoutes = (url) => {
      const params = url.params || '';

      url.requests.forEach((proposedRequest) => {
        const method = proposedRequest.method || 'GET';
        const supportedMethod = {
          method,
          path: path + params,
          handler(request, reply) {
            let response;

            if (proposedRequest.statusCode && !proposedRequest.response) {
              response = Boom.create(proposedRequest.statusCode);
            } else if (settings.statusCode && !proposedRequest.statusCode) {
              response = Boom.create(settings.statusCode);
            } else {
              server.log('info', `Received payload:${JSON.stringify(request.payload)}`);

              if (typeof proposedRequest.response === 'string') {
                // eslint-disable-next-line global-require
                response = require(`../../..${proposedRequest.response}`);
              } else {
                response = proposedRequest.response;
              }
            }

            if (proposedRequest.statusCode && proposedRequest.response) {
              return reply(response).code(proposedRequest.statusCode);
            }
            return reply(response);
          },
        };
        routes.push(supportedMethod);
      });

      const unsupportedMethods = {
        method: '*',
        path: path + params,
        handler(request, reply) {
          let response;

          if (settings.statusCode) {
            response = Boom.create(settings.statusCode);
          } else {
            response = Boom.methodNotAllowed();
          }

          return reply(response);
        },
      };

      routes.push(unsupportedMethods);
    };

    urls.forEach(createRoutes);
    server.route(routes);
    next();
  };

  exportEndpoint.register.attributes = {
    name: settings.name,
    path,
    urls,
  };

  return exportEndpoint;
};
