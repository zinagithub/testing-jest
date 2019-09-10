const capitalize = (myStr) => {
  if (myStr) {
    const arrStr = myStr.split('');
    const index = arrStr.findIndex(elm => elm !== ' ' && /[A-Z]|[a-z]/.test(elm));
    if (index !== -1) {
      arrStr[index] = arrStr[index].toUpperCase();
    }
    return arrStr.join('');
  }
  return '';
}

module.exports = capitalize;
