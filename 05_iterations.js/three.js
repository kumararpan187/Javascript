// for of 

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// for (const num of arr) {
//     console.log(num);
// }



const greeting = "Welcome";
// for (i of greeting) {
//     console.log(`char is => ${i}`);
// }

//Map()
// => The Map object holds key-value pairs and remembers the original insertion order of the keys.
//  Any value (both objects and primitive values) may be used as either a key or a value.

const map = new Map();
map.set('IN', "India");
map.set('US', "United States");
map.set('UK', "United Kingdom");
// console.log(map);  // => Map {
//     'IN' => 'India',
//     'US' => 'United States',
//     'UK' => 'United Kingdom' 
//   }
// console.log(map.size); // => 3

// for (const key of map) {     // [ 'IN', 'India' ]
//     console.log(key);        // [ 'US', 'United States' ]
// }                            //  [ 'UK', 'United Kingdom' ]



// for (const [key, value] of map) {
//     console.log(key, ' :- ', value);   //  =>    IN  :-  India
// }                                         //  US  :-  United States
//                                           UK  :-  United Kingdom




//--------------------------------------------------------------------------------------------------------------
// map() => The map() method of Array instances creates a new array populated 
// with the results of calling a provided function on every element in the calling array.


const map1 = arr.map((x) => (x));
// console.log(map1);

//-------------------------------------------------------------------------------------------------------------


const obj1 = {
    game1: 'spiderman',
    game2: 'NFS'
}

// for (const [key, value] of obj1) {  // not applied to obj here gives error 
//     console.log(key, ':-', value);
// }