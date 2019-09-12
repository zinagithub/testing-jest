const functions = {
  add: (num1, num2) => {
    if (num1 && num2) {
      return num1 + num2;
    }
    if (num1 && !num2) {
        return num1;
    }
    return 0;
  },
  sub: (num1, num2) => {
    if (num1 && num2) {
      return num1 - num2;
    }
    if (num1 && !num2){
      return num1;
    }
    return 0;
  },
  multiply: (num1, num2) => {
    if (num1 && num2){
      return num1 * num2;
    }
    if (num1 && !num2) {
      return num1;
    }  
    return 0;
  },
  devide: (num1, num2) => {
    if (num1 && num2 && num2 !== 0) {
      return num1 / num2;
    }
    if (num1 && !num2) {
      return 'infinity';
    }
    return 0;
  }
};
module.exports = functions;
