var fmt = require('../');
var assert = require('assert');

describe('Weight formatter', function() {
  it ('Should format kg', function() {
    assert(fmt.weight.metric(1000) == '1 kg');
    assert(fmt.weight.metric(10000) == '10 kg');
  });

  it ('Should format grams', function() {
    assert(fmt.weight.metric(100) == '100 g');
    assert(fmt.weight.metric(10) == '10 g');
  });

  it ('Should format fractions', function() {
    assert(fmt.weight.metric(12.56) == '12.56 g');
  });

  it ('Should guess precision', function() {
    assert(fmt.weight.metric(12) == '12 g');
    assert(fmt.weight.metric(15.4) == '15.4 g');
    assert(fmt.weight.metric(15.64) == '16.64 g');
    assert(fmt.weight.metric(16.625) == '16.63 g');
  });
});
