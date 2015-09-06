'use strict';

var path = require('path');
var _ = require('lodash');
var requireindex = require('requireindex');
var controllers = requireindex(__dirname);

module.exports.register = function (server, options, next) {
  server.route({
    method: 'GET',
    path: '/',
    handler: function (request, reply) {
      reply.view('index', request.locals);
    }
  });

  // Serve public files
  server.route({
    method: 'GET',
    path: '/components/{filename*}',
    handler: {
      directory: {
        path: path.join(__dirname, '../public/components')
      }
    }
  });

  server.route({
    method: 'GET',
    path: '/css/{filename*}',
    handler: {
      directory: {
        path: path.join(__dirname, '../public/css')
      }
    }
  });

  server.route({
    method: 'GET',
    path: '/img/{filename*}',
    handler: {
      directory: {
        path: path.join(__dirname, '../public/img')
      }
    }
  });

  server.route({
    method: 'GET',
    path: '/js/{filename*}',
    handler: {
      directory: {
        path: path.join(__dirname, '../public/js')
      }
    }
  });

  server.route({
    method: 'GET',
    path: '/favicon.ico',
    handler: {
      file: {
        path: path.join(__dirname, '../public/favicon.ico')
      }
    }
  });

};

//Required by Hapijs
module.exports.register.attributes = {
  name: 'attributes'
};
