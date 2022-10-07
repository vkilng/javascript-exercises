const leapYears = function(year) {
    let res = false;
    if(year%4 == 0) {
        if(year%100 == 0) {
            if(year%400 == 0) {
                res = true;
            };
        } else {
            res = true;
        }
    };
    return res;
};

// Do not edit below this line
module.exports = leapYears;
