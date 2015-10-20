'use strict';

function itemService () {
  var seneca = this;
  var plugin = 'item';

  seneca.add({role: plugin, cmd: 'get_id'}, cmd_get_id);

  function cmd_get_id (args, done) {
    return done(null, {id: 1234});
  }

}

module.exports = itemService;
