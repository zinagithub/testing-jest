function reverse(str) {
	if (str) {
      return str.split('').reverse().join('');
  }
  return '';
}

module.exports = reverse;
