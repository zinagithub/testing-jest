const capitalize = (myStr) => {
	if (myStr) { 
     let arrStr = myStr.split('');
     let index = arrStr.findIndex(elm => elm != " " && /[A-Z]|[a-z]/.test(elm));
     if (index != -1)
		arrStr[index] = arrStr[index].toUpperCase();
     return arrStr.join('');
 }else
    return '';
}
module.exports = capitalize;