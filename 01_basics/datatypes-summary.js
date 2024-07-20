//  1. primitive => call by value

// 7 types  => String , number , boolean ,bigInt , symbol , null , undefined




const score = 100;
const scoreValue = 100.5;
const isActive = true;
const v = null;
let email;


let id = Symbol("123");
let anotherId = Symbol("123");
// console.log(id === anotherId); // => false 






// JavaScript is a dynamically typed language. 
//This means that the type of a variable is determined at runtime, based on the value it holds.


// 2. reference /non-primitive 

// arrays , functions , objects 

// arrays => let arr =["ironMan","captainAmerica","spiderMan"];

//    Object   
let obj = {
    name: "Arpan ",
    surName: "Kumar",
    age: 21
};

//function =>
const myfun = function () {
    console.log("Hello ");
}



// typeof(variable);
//  =>         |------------------------------------------------|
//             |   typeof var                        result     |
//             |     undefined                "undefined"       |
//             |     null                        "object"       |
//             |     boolean                      "boolean"     |
//             |     number                       "number"      |
//             |    String                        "String"      |
//             |------------------------------------------------|


// ******************************************************************************************************
// memory    - Stack(primitive)   ;  Heap(non-primitive)



let favGame = "Cricket";

let anotherGame = favGame;
anotherGame = "chaiAurCode";
// console.log(favGame);
// console.log(anotherGame);


let userOne = {
    email: "arpanOne@gmail.com",
    upi: "arpanOne@ybl"
};

let userTwo = userOne;
userTwo.email = "updated@gmail.com";  // => both userOne and userTwo email will be updated to new one due to reference
// console.log(userOne);
// console.log(userTwo);

