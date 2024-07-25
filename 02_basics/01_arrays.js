// arrays

const array = [10, 12, 15, 18, 21];
// console.log(array[0]); // => 10 
const arr = ["ironMan", "spiderMan", "captainAmerica"];
// console.log(arr[0]); // => ironMan 

// arrays method 
array.push(18);
// console.log(array);
// console.log(array.length);
// console.log(array.pop()) // => removes last element from array
array.unshift(14);// insert at start
// console.log(array);
array.shift(); // removers first element from array and return it
// console.log(array);

// console.log(array.includes(9)); // if exist then return true else false
// console.log(array.indexOf(10)); // 0 return the index of element if available else give -1.

const newArray = array.join(); // => join method add all elements of an array  into string 
// console.log(newArray); // =>  10, 12, 15, 15, 21, 18   in string form 
// console.log(typeof (newArray)); // => String  




// ****** slice and splice 


let n1 = [0, 1, 2, 3, 4, 5, 6, 7];
console.log(`n1 : ${n1}`);   //   => n1 : 0, 1, 2, 3, 4, 5, 6, 7
let p1 = n1.slice(1, 5); // => slice doesnot changes the original array ; here means 1-4 index not including 5
console.log(`p1 : ${p1}`); // => p1 : 1, 2, 3, 4
console.log(`n1 : ${n1}`);  // => n1 : 0, 1, 2, 3, 4, 5, 6, 7




let n2 = [0, 1, 2, 3, 4, 5, 6, 7];

console.log(`n2 : ${n2}`); // => n2: 0, 1, 2, 3, 4, 5, 6, 7

let p2 = n2.splice(1, 5); // splice changes the original array ; here means 1-5 all included 
console.log(`p2 : ${p2}`) // => p2: 1, 2, 3, 4, 5
console.log(`n2 : ${n2}`); // =>    n2 : 0, 6, 7 








