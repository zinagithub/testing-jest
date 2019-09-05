const functions = {
	add : (num1, num2) => (num1 && num2) ? num1 + num2 : (num1 && !(num2)) ? num1 : 0  ,
	
	sub : (num1, num2) => (num1 && num2) ? num1 + num2 : (num1 && !(num2)) ? num1 : 0  

};
module.exports = functions;