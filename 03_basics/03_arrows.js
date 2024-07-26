const user = {
    userName: "Arpan",
    password: 1234,


    welcome: function () {
        console.log(`${this.userName} Welcome to the website`);
        console.log(this);   // { userName: 'Arpan', password: 1234, welcome: [Function: welcome] }
    }
}
// user.welcome();
// user.userName = "Kumar";
// user.welcome();

// console.log(this); { }// empty object in node but window object in browsers

// this keyword is not used in functions  , used for accessing  objects

function dis() {
    console.log(this); // => global object 

}
// dis(); // global object 


function test() {
    let user = "dummy1";
    console.log(this.user);
}
// test(); // undefined 

const test2 = function () {
    let user = "dummy2";
    console.log(this.user);
    console.log(this); // => { global object }
}
// test2(); // undefined 


const test3 = () => {
    let user = "dummy3";
    console.log(this.user);
    console.log(this); // =>  {} empty object in node
}
// test3(); // undefined

//********************************************************************************************* */


//arrow function
//    Syntax  () => {}


// explicit return 
const addTwo = (num1, num2) => {
    return num1 + num2;
}
// addTwo(4, 5); // => 9


// implicit return 
const addtwo = (num1, num2) => (num1 + num2);
// addtwo(5, 4); // => 9


const info = (name) => ({ username: "Arpan" });  // always use parenthesis to return object in implicit return function
// console.log(info());;  // => { username: 'Arpan' }

