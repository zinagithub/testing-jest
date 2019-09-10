function caesarCipher(s, k) {   
//var arrayS    = s.split("");
    k = k % 26;
const arraySbis = s.split("").map(function(elm){
    if (/[A-Z]|[a-z]/.test(elm) === false){
        return elm;
    }
    const min = minInterval(elm);
    const max = maxInterval(elm);
    if (elm.charCodeAt(0)+ k > max){
        let val1 =max - elm.charCodeAt(0);
        return  String.fromCharCode((min + (k -val1  - 1 ) )); 
    }
    else
        return String.fromCharCode(elm.charCodeAt(0) + k);
    
});    
    return (arraySbis.join(""));
}

function minInterval(elm){
   if (elm.toUpperCase()  === elm)
        return  65;
    else
        return 97;
}
function maxInterval(elm){
   if (elm.toUpperCase()  === elm)
        return 90;
    else
        return 122;
}
module.exports = caesarCipher;
