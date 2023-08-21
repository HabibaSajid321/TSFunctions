"use strict";
// without function keyword we can use arrow function 
// a function without any name is called anonymous function
let arrowsum = (num1, num2) => {
    return num1 + num2;
};
let sum = arrowsum(10, 20);
console.log(sum);
// we can also define return type
// we can also use it without {} we dont need to write return keyword.
// Example
let subNum = (num3, num4) => num3 - num4;
console.log(subNum(99, 90));
// we can also find the type of any function or any data type
console.log(typeof subNum);
console.log(typeof sum);
console.log(typeof arrowsum);
