const getTheTitles = function(arr) {
    let res = [];
    arr.forEach((elemobj) => {
        res.push(elemobj.title);
    });
    return res;
};

// Do not edit below this line
module.exports = getTheTitles;
