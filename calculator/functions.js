const functions = {
  add : (num1, num2) => (num1 && num2) ? num1 + num2 : (num1 && !(num2)) ? num1 : 0,
  sub : (num1, num2) => (num1 && num2) ? num1 - num2 : (num1 && !(num2)) ? num1 : 0,
  multiply : (num1, num2) => (num1 && num2) ? num1 * num2 : (num1 && !(num2)) ? num1 : 0,
  devide   : (num1, num2) => (num1 && num2 && num2 !== 0) ? num1 / num2 : 
        (num1 && !num2 ? 'infinity' : 0),
};
module.exports = functions;
