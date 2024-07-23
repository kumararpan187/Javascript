const score = 100;
// console.log(score);  // => 100

const balance = new Number(100);
// console.log(balance); // => [Number: 100]

// console.log(balance.toString().length); // => 3
// console.log(balance.toFixed(2)); // => 100.00



// This number has exponent 0, so it will never use exponential notation
let num = 5.123456;

// console.log(num.toPrecision()); // '5.123456'
// console.log(num.toPrecision(5)); // '5.1235'
// console.log(num.toPrecision(2)); // '5.1'
// console.log(num.toPrecision(1)); // '5'

// // This number has exponent -4, so it will never use exponential notation
// num = 0.000123;

// console.log(num.toPrecision()); // '0.000123'
// console.log(num.toPrecision(5)); // '0.00012300'
// console.log(num.toPrecision(2)); // '0.00012'
// console.log(num.toPrecision(1)); // '0.0001'

// // This number has exponent 3, so it will use exponential notation if precision is less than 4
// num = 1234.5;
// console.log(num.toPrecision(1)); // '1e+3'
// console.log(num.toPrecision(2)); // '1.2e+3'
// console.log(num.toPrecision(6)); // '1234.50'

// // This number has exponent -7, so it will always use exponential notation
// num = 0.00000012345;
// console.log(num.toPrecision(1)); // '1e-7'
// console.log(num.toPrecision(10)); // '1.234500000e-7'

const thousands = 1000000000
// console.log(thousands.toLocaleString('en-in')); // => 1,00,00,00,000







/************************************************************************************************************* */



// Maths

// console.log(Math.abs(-4)); // => - -> + only => 4
// console.log(Math.round(4.6)); // => 5
// console.log(Math.ceil(1.1))// => 2
// console.log(Math.floor(2.9))// => 2
// console.log(Math.min(4, 7, 2, 9))// => 2
// console.log(Math.max(7, 18, 10, 45)) // => 45


// console.log(Math.random()); // => >=0 < 1 between values randomly

// for range 
// 1-10
// console.log((Math.random() * 10) + 1); // here one value got 10.19828250----- not in range so 
// console.log(Math.floor(Math.random() * 10) + 1); // now got 10,10,8 etc


// now to get in some specific range
// 20 -> 40
const min = 20;
const max = 40;
// console.log(Math.floor(Math.random() * (max - min + 1)) + min);


