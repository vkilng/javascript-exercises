const findTheOldest = function(arr) {
    let today = new Date();
    let oldest_name = "";
    let oldest_age = 0;
    arr.forEach((elemobj) => {
        if(typeof elemobj.yearOfDeath == "undefined") {
            elemobj.yearOfDeath = today.getFullYear();
        }
        let age = elemobj.yearOfDeath - elemobj.yearOfBirth;
        if(age > oldest_age) {
            oldest_age = age;
            oldest_name = elemobj.name;
        };
    });
    return {name:oldest_name};
};

// Do not edit below this line
module.exports = findTheOldest;
