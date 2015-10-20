'use strict';

var Hapi = require('hapi');
var Chairo = require('chairo');
var path = require('path');

var server = new Hapi.Server();
var port = 4000;

function reportError (pluginName) {
  return function (error) {
    if (error) {
      console.error('Error: The following hapi plugin failed to load: ' + pluginName);
      throw error;
    }
  };
}

server.connection({ 
  port: port
});

server.views({
  engines: { dust: require('hapi-dust') },
  path: path.join(__dirname, './public/templates'),
  partialsPath: path.join(__dirname, './public/templates')
});

server.register({ register: require('./controllers') }, reportError('controllers'));

var itemApi = require('./lib/item');

server.register(itemApi, function (err) {
  if (err) console.log(err);
});

server.register({ register: Chairo, options: {} }, function (err) {
  reportError('Chairo')(err);

  var itemService = require('./services/item').bind(server.seneca)();
  
  server.start(function() {
    console.log('Listening on http://localhost:' + port);
  });
});
