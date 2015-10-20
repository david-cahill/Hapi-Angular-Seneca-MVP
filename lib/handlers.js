'use strict';

var _ = require('lodash');

module.exports = function(server, role) {

  function doAct (request, reply, cmd, param, user) {
    var msg = {cmd: cmd, role: role};

    if (request.payload) {
      msg = _.extend(msg, request.payload);
    }
    if (request.query) {
      msg = _.extend(msg, request.query);
    }

    if (param) {
      var paramsMsg = {};
      var params = _.isArray(param) ? param : [param];
      _.each(params, function (p) {
        if (request.params[p]) paramsMsg[p] = request.params[p];
      });
      msg = _.extend(msg, paramsMsg);
    }

    if (user) {
      msg = _.extend(msg, user);
    } else if (request.user) {
      msg = _.extend(msg, request.user);
    }
    
    request.seneca.act(msg, function(err, resp) {
      if (err) return reply(err).code(500);

      var code = 200;
      // This is a legacy seneca-web response
      if (resp && resp.http$) {
        if (resp.http$.status) code = resp.http$.status;
        if (resp.http$.redirect) return reply.redirect(resp.http$.redirect);
      }
      reply(resp).code(code);
    });
  }

  var actHandler = function (cmd, param) {
    return function (request, reply) {
      doAct(request, reply, cmd, param);
    };
  };

  return {
    doAct: doAct,
    actHandler: actHandler
  };
};