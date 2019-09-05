const capitalize = (myStr) => {
     let arrStr = myStr.split('');
     let index = arrStr.findIndex(elm => elm != " ");
     if (index != -1){
     	arrStr[index] = arrStr[index].toUpperCase();
     	return arrStr.join('');
     }
}
module.exports = capitalize;