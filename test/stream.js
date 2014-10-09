var male = require('../');
var es = require('event-stream');
var should = require('should');
var fs = require('fs');

var path = require('path');
require('mocha');

var isMale = require('./fixtures/is-male.json');
var isFemale = require('./fixtures/is-female.json');

describe('male', function() {

    it('should match a male genome', function(done) {
      var query = male();
      var stream = query.stream();
      es.readArray(isMale).pipe(stream);
      stream.on('end', function(){
        query.matches().length.should.equal(4);
        query.percentage().should.equal(200);
        done();
      });
    });

});
