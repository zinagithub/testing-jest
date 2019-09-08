function analyze(array) {
  return {
    average: array.reduce((acc, val) => acc + val, 0) / array.length,
    min: Math.min(...array),
    max: Math.max(...array),
    length: array.length
  };
}

module.exports = analyze;