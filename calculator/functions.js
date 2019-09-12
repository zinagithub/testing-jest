const functions = {
  add: (num1, num2) => {
    if (num1 && num2) {
      return num1 + num2;
    } else {
      if (num1 && !num2) {
        return num1;
      } else {
        return 0;
      }
    }
  },
  sub: (num1, num2) => {
    if (num1 && num2) {
      return num1 - num2;
    } else {
      if (num1 && !num2){
        return num1;
      } else {
        return 0;
      }
    }
  },
  multiply: (num1, num2) => {
    if (num1 && num2){
      return num1 * num2;
    } else {
      if (num1 && !num2) {
        return num1;
        } else {
            return 0;
        }
    }
  },
  devide: (num1, num2) => {
    if (num1 && num2 && num2 !== 0) {
      return num1 / num2;
    } else {
        if (num1 && !num2) {
          return 'infinity';
        } else {
        return 0;
        }
    }
  }
};
module.exports = functions;
