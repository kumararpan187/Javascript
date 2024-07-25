//  two ways to declare objects 
// 1 literals - no singleton 
// 2 constructor -always singleton   using => (Object.create)


// object literals

const mySym = Symbol("key 1");
// use symbol in object   using[]

const jsUser = {
    [mySym]: "my key 1",
    name: "Arpan",
    "full Name": "Arpan Kumar",
    fullname: "rudh ",
    age: 21,
    location: "India"
};

// access values of object 

// console.log(jsUser.name); // Arpan 
// console.log(jsUser["name"]); // Arpan
// console.log(jsUser.full Name) //error 
// console.log(jsUser["full Name"]); // => Arpan Kumar
// console.log(jsUser.fullname); // => rudh 
// console.log(jsUser[mySym]); // => my key 1 

// to freeze value permanently so that no changes apply once declared use Object.freeze(variable);

// Object.freeze(jsUser);
// jsUser.fullname = "Arpan 1 Kumar"
// console.log(jsUser); // => {
//     name: 'Arpan',
//     'full Name': 'Arpan Kumar',
//     fullname: 'rudh ',
//     age: 21,
//     location: 'India',
//     [Symbol(key 1)]: 'my key 1'// =>  here it  is Symbbol if we not declare symbol in [] then it will be normal string
//   }




// adding function to object  treat it as variable 
jsUser.greeting = function () {
    console.log("Hello User");
}


jsUser.greetingTwo = function name() {
    console.log(`User ${this.name}`);
}



//console.log(jsUser.greeting());
// console.log(jsUser.greetingTwo());





// console.log(jsUser.greeting);  // [Function]
// console.log(jsUser.greetingTwo); //[Function]


// console.log(jsUser); // => {
//     name: 'Arpan',
//     'full Name': 'Arpan Kumar',
//     fullname: 'rudh ',
//     age: 21,
//     location: 'India',   
//     greeting: [Function],
//     [Symbol(key 1)]: 'my key 1'
//   }
