const fibonacci = function(n) {
    n = parseInt(n);
    if(n<1) {return 'OOPS';};
    if(n==1 || n==2) {return 1;};
    nminusone = 1; nminustwo = 1;
    let temp = 0;
    for(let i=3; i<=n-1; i++) {
        temp = nminustwo;
        nminustwo = nminusone + nminustwo;
        nminusone = temp;
    };
    return (nminusone+nminustwo);
};

// Do not edit below this line
module.exports = fibonacci;
