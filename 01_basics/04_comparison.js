// console.log(2 > 1); // => true
// console.log(2 >= 1);// => true
// console.log(2 < 1);// => false
// console.log(2 == 1);// => flase
// console.log(2 != 1);// => true


// console.log("2" > 1); // => true    _
// console.log("2" < 1); // => false   _|- because JS converts string "2" in number before comparing to 1. so "2" becomes 2.


// console.log(null > 0); // => false  -----|equity == and comparison operator > < >= <= works differently 
// console.log(null == 0); // => false -----| comparisons converts null to a number ,treating it as 0 
// console.log(null >= 0); // => true
// console.log(null < 0);  // => false
// console.log(null <= 0); // => true 
// // console.log();  // => error  
// console.log(` null != 0 ${null != 0}`);// => true
// console.log(`null == null ${null == null}`); // => true 


// console.log(`undefined == 0 ${undefined == 0}`) // => false 
// console.log(`undefined > 0 ${undefined > 0}`) // => false
// console.log(`undefined < 0 ${undefined < 0}`) // => false
// console.log(`undefined >= 0 ${undefined >= 0}`)// => false -----| undefined is converted to NaN and then compared to 0
// console.log(`undefined <=0 ${undefined <= 0}`) // => false -----|
// console.log(`undefined == undefined ${undefined == undefined}`); // => true

