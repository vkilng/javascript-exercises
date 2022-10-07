const sumAll = function(start,end) {
    if (typeof(start) == typeof(end) && typeof(start) == "number" && start>0 && end>0) {
        if(start > end) {
            let temp = 0;
            temp = start;
            start = end;
            end = temp;
        }
        return (end*(end+1)/2)-((start-1)*(start)/2);
    }
    return 'ERROR';
};

// Do not edit below this line
module.exports = sumAll;
