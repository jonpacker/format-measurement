function guessPrecision(number) {
  var parts = String(number).split('.')
  if (parts.length == 1) return 0;
  else return parts[1].length > 2 ? 2 : parts[1].length;
}

function formatNumber(number) {
  return number.toFixed(guessPrecision(number));
}

var metricWeight = {
  '1000': function(num) { return formatNumber(num / 1000) + ' kg' },
  '0': function(num) { return formatNumber(num) + ' g' }
};

var metricVolume = {
  '1000': function(num) { return formatNumber(num / 1000) + ' L' },
  '0': function(num) { return formatNumber(num) + ' mL' }
};

function createFormatter(formatters) {
  var breakpoints = Object.keys(formatters).map(parseFloat).sort().reverse();
  return function(num) {
    var i = 0;
    var formatter = breakpoints[i];
    while (formatter > num) formatter = breakpoints[++i];
    return formatters[formatter](num);
  };
};

exports.metric = {
  weight: createFormatter(metricWeight),
  volume: createFormatter(metricVolume)
};
