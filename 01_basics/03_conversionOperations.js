let score = "33";

// console.log(typeof score);
// console.log(typeof score);

// to get value in  number
let valueInNumber = Number(score);
// console.log(typeof valueInNumber);
// console.log(valueInNumber);

let b = "55abs";
// let b = null; // value=>0 ; type=object
// let b = true; // value=>1 ;if false then 0 ,type boolean
// let b = undefined; // type=> undefined ,value =>NaN
let value = Number(b);
// console.log(typeof value); // => number
// console.log(typeof b); // => String
// console.log(value); //  => NaN

let isLoggedIn = "arpan";
let booleanIsLoggedIn = Boolean(isLoggedIn);
// console.log(typeof booleanIsLoggedIn); //  => boolean
// console.log(booleanIsLoggedIn); //  => true

// ""  => false
// 0 => false
// 1 => true
// "arpan" => true

let number = 33;
let StringNumber = String(number);

// console.log(typeof StringNumber);  // => String
// console.log(StringNumber);      // =>33

/********************************************operations**********************************************************/

let num = 3;
let negNum = -num;
// console.log(negNum)   =>  -3

// console.log(2 + 2); // => 4
// console.log(2 - 2); // => 0
// console.log(2 * 2); // => 4
// console.log(2 / 2); // => 1
// console.log(2 ** 3); // => 8
// console.log(3 % 2); // => 0  gives remainder

let str1 = "Arpan";
let str2 = " Kumar";
let str3 = str1 + str2;
// console.log(str3);

// console.log("1" + 2); // => 12
// console.log(1 + "2"); // => 12
// console.log("1" + 2 + 2); // => 122
// console.log(1 + 2 + "2"); // =>32

// console.log(+""); // => 0

let gameCounter = 100;
gameCounter++;
// console.log(gameCounter); // => 101
