'use strict';

var _ = require('lodash');

exports.register = function (server, options, next) {
  options = _.extend({ basePath: '/api/1.0' }, options);
  var handlers = require('./handlers.js')(server, 'item');

  server.route([{
    method: 'GET',
    path: options.basePath + '/item/get-id',
    handler: handlers.actHandler('get-id')
  }]);

  next();
};

exports.register.attributes = {
  name: 'item-attributes'
};