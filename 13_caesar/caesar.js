//String.fromCharCode('97') returns 'a'
//String.charCodeAt(index) returns UTF-16 code of the character at given 'index'
const caesar = function(str,shift) {
    shift = shift % 26;
    let res = str;
    let strarr = [...new Set(str)];
    for(let i=0; i<strarr.length; i++) {
        let charcode = strarr[i].charCodeAt(0);
        let newcharcode = '';
        if(charcode>=97 && charcode<=122) {
            newcharcode = charcode + shift;
            if(newcharcode>122) {newcharcode = 96 + (newcharcode - 122);};
            if(newcharcode<97) {newcharcode = 123 - (97 - newcharcode);};
            res = res.replaceAll(strarr[i],String.fromCharCode(newcharcode));
        };
        if(charcode>=65 && charcode<=90) {
            newcharcode = charcode + shift;
            if(newcharcode>90) {newcharcode = 64 + (newcharcode - 90);};
            if(newcharcode<65) {newcharcode = 91 - (65 - newcharcode);};
            res = res.replaceAll(strarr[i],String.fromCharCode(newcharcode));
        };
    };
    console.debug('--> My result: ',res);
    return res;
};

// Do not edit below this line
module.exports = caesar;