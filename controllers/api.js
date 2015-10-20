'use strict';

var path = require('path');
var _ = require('lodash');
var requireindex = require('requireindex');
var controllers = requireindex(__dirname);

module.exports.register = function (server, options, next) {
  server.route({
    method: 'GET',
    path: '/api/1.0/test-api-route',
    handler: { act: 'role: api, cmd: test-api-route' }
  });
};

//Required by Hapijs
module.exports.register.attributes = {
  name: 'api-attributes'
};