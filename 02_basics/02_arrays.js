const marvel_heroes = ["ironMan", "Thor", "spiderMan"];
const dc_heroes = ["superMan", "batMan", "flash"];

// marvel_heroes.push(dc_heroes);
// console.log(marvel_heroes); //   => [ 'ironMan', 'Thor', 'spiderMan', [ 'superMan', 'batMan', 'flash' ] ]

// console.log(marvel_heroes.concat(dc_heroes)); // => [ 'ironMan', 'Thor', 'spiderMan', 'superMan', 'batMan', 'flash' ]


//  also can use spread (...var name)

let all_heroes = [...marvel_heroes, ...dc_heroes];
// console.log(all_heroes);//   => [ 'ironMan', 'Thor', 'spiderMan', 'superMan', 'batMan', 'flash' ]


let ar = [1, 2, 3, [4, 5, 6, 7], 8, 9, [10, 11, [12, 13]]];
let real_ar = ar.flat(Infinity);
// console.log(real_ar);                  // [
// 1, 2, 3,  4,  5,  6,
// 7, 8, 9, 10, 11, 12,
//    13
//  ]



// from()   =>  creates an array from iterable object
// console.log(Array.from("Arpan")); // => [ 'A', 'r', 'p', 'a', 'n' ]
// console.log(Array.from({ name: "Arpan" })) //=>  []
// console.log(Array.isArray("Arpan"))// => false

// console.log(Array.isArray(new Array(5))); // => true
// console.log(Array.isArray(new Int16Array([15, 33]))); // => false   



let s1 = 100;
let s2 = 200;
let s3 = 300;
//             returns a new array from the set of elements
// console.log(Array.of(s1, s2, s3)); // => [ 100, 200, 300 ]


