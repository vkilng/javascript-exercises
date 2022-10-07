const palindromes = function (str) {
    str = str.replace(/[^a-zA-Z]/g,'');
    str = str.toLowerCase();
    console.debug("--> This should the refined string: ",str);
    let res = "";
    for(let i=str.length-1; i>=0; i--) {
        res = res + str[i];
    }
    return (res==str);
};

// Do not edit below this line
module.exports = palindromes;
