'use strict';

module.exports = [{
  method: 'GET',
  path: '/home/templates/{name*}',
  handler: function (request, reply) {
    reply.view('home/' + request.params.name, request.locals);
  }    
}];