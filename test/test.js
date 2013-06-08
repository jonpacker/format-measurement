var fmt = require('../');
var assert = require('assert');

describe('Weight formatter', function() {
  it ('Should format kg', function() {
    assert.equal(fmt.metric.weight(1000), '1 kg');
    assert(fmt.metric.weight(10000) == '10 kg');
  });

  it ('Should format grams', function() {
    assert(fmt.metric.weight(100) == '100 g');
    assert(fmt.metric.weight(10) == '10 g');
  });

  it ('Should format fractions', function() {
    assert(fmt.metric.weight(12.56) == '12.56 g');
  });

  it ('Should guess precision', function() {
    assert(fmt.metric.weight(12) == '12 g');
    assert(fmt.metric.weight(15.4) == '15.4 g');
    assert.equal(fmt.metric.weight(15.64), '15.64 g');
    assert.equal(fmt.metric.weight(16.625), '16.63 g');
  });
});
