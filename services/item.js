'use strict'

function itemService () {
  var seneca = this;  
  seneca.add({role: 'item', cmd: 'get-id'}, function (args, done) {
    return done(null, {id: 1234});
  });
};

module.exports = itemService;
