var male = require('../');
var should = require('should');
require('mocha');

var isMale = require('./fixtures/is-male.json');
var isFemale = require('./fixtures/is-female.json');

describe('male', function() {
  it('should match a male genome', function() {
    male(isMale).should.equal(true);
  });
  it('should not match a female genome', function() {
    male(isFemale).should.equal(false);
  });
});
