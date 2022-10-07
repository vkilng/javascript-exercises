const repeatString = function(str,num) {
    if(num<0) {
        return 'ERROR';
    }
    if(str=='') {
        return '';
    }
    let res = '';
    for(let i=0; i<num; i++) {
        res=res+str;
    };
    return res;
};

// Do not edit below this line
module.exports = repeatString;
