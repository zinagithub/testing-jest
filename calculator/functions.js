const functions = {
	add : (num1, num2) => 
	{
		if (num1 && num2)
			return num1 + num2
		else 
			if (num1 && !(num2))
                return num1       
            else 
              return 0		
	}, 
	sub : (num1, num2) => num1 - num2
};
module.exports = functions;