const add = function(num1,num2) {
  return (num1+num2);
};

const subtract = function(num1,num2) {
  return(num1-num2);
};

const sum = function(arr) {
  let sum_ = 0;
  arr.forEach(element => {
    sum_ = sum_ + element;
  });
  return sum_;
};

const multiply = function(arr) {
  let prod = 1;
  arr.forEach((elem) => {prod = prod * elem;});
  return prod;
};

const power = function(num,exp) {
	return (num**exp);
};

const factorial = function(n) {
	let res = 1;
  if(n>1) {
    for(let i=n; i>=2; i--) {
      res = res * i;
    };
  };
  return res;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
