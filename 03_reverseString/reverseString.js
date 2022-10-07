const reverseString = function(str) {
    if(str==''){return '';};
    let res = '';
    for(let i=str.length-1; i>=0; i--) {
        res = res + str[i];
    };
    return res;
};

// Do not edit below this line
module.exports = reverseString;
