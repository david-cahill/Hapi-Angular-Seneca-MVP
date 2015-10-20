'use strict'

var expect = require('chai').expect,
seneca = require('seneca')(),
lab = exports.lab = require('lab').script();

seneca.use(require(__dirname + '/../services/item.js').bind(seneca));

lab.experiment('Item', function () {
  
  lab.test('Get item id', function (done) {
    seneca.act({role: 'item', cmd: 'get-id'}, function (err, result) {
      if (err) return done(err);
      expect(result.id).to.equal(1234);
      return done();
    });
  });
});