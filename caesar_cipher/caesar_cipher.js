function minInterval(elm) {
  if (elm.toUpperCase() === elm) {
    return 65;
  }
  return 97;
}
function maxInterval(elm) {
  if (elm.toUpperCase() === elm) {
    return 90;
}  
return 122;
}
function caesarCipher(s, k) {   
  const kk = k % 26;
  const arraySbis = s.split('').map( (elm) => {
    if (/[A-Z]|[a-z]/.test(elm) === false) {
      return elm;
}
  const min = minInterval(elm);
  const max = maxInterval(elm);
    if (elm.charCodeAt(0) + kk > max) {
      const val1 =max - elm.charCodeAt(0);
      return String.fromCharCode((min + (kk - val1  - 1 ) )); 
}
    else
      return String.fromCharCode(elm.charCodeAt(0) + kk);
    
});    
  return (arraySbis.join(''));
}

module.exports = caesarCipher;
