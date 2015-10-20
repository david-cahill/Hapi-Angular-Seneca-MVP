'use strict';

var path = require('path');
var _ = require('lodash');
var requireindex = require('requireindex');
var controllers = requireindex(__dirname);

module.exports.register = function (server, options, next) {
  // Serve public files
  _.each(controllers, function (controller) {
    server.route(controller);
  });

  server.route({
    method: 'GET',
    path: '/',
    handler: function (request, reply) {
      reply.view('index', request.locals);
    },
    config: { cache: { expiresIn: 60 * 1000 } }
  });

  server.route({
    method: 'GET',
    path: '/components/{filename*}',
    handler: {
      directory: {
        path: path.join(__dirname, '../public/components')
      }
    },
    config: { cache: { expiresIn: 60 * 1000 } }
  });

  server.route({
    method: 'GET',
    path: '/css/{filename*}',
    handler: {
      directory: {
        path: path.join(__dirname, '../public/css')
      }
    },
    config: { cache: { expiresIn: 60 * 1000 } }
  });

  server.route({
    method: 'GET',
    path: '/img/{filename*}',
    handler: {
      directory: {
        path: path.join(__dirname, '../public/img')
      }
    },
    config: { cache: { expiresIn: 60 * 1000 } }
  });

  server.route({
    method: 'GET',
    path: '/js/{filename*}',
    handler: {
      directory: {
        path: path.join(__dirname, '../public/js')
      }
    },
    config: { cache: { expiresIn: 60 * 1000 } }
  });

  server.route({
    method: 'GET',
    path: '/favicon.ico',
    handler: {
      file: {
        path: path.join(__dirname, '../public/favicon.ico')
      }
    },
    config: { cache: { expiresIn: 60 * 1000 } }
  });

};

//Required by Hapijs
module.exports.register.attributes = {
  name: 'attributes'
};
