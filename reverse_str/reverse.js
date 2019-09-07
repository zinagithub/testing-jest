function reverse(str) {
	if (str)
		return str.split('').reverse().join('');
	else 
		return '';
}

module.exports = reverse;