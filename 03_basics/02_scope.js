// if (true) {
//     let a = 10;
//     let b = 20;
//     const c = 30;
//     // var d = 40; //   never use var   because it creates scope problem 
//     console.log(`inner scope value of a : ${a}`);
// }
let a = 100;

// console.log(a);


function one() {
    const userName = "Arpan Kumar"

    function two() {
        const website = "youtube"             // outer function can't have access to variables of inner function
        console.log(userName);                // while inner function can have access to uter function variable
    }


    // console.log(website);
    two();

}

// one()


//-----------------------------------------------------


if (true) {
    const username = "Arpan";
    if (username === "Arpan") {
        const website = "youtube"
        // console.log(username + website);
    }
    // console.log(website); // error  -> inner scope
}

// console.log(username);  // error => inner scope of if 


//************************************************************************************************* */


// addOne(5);      // will exexcute even initialization is below the calling 

function addOne(num) {
    return num + 1;
}

// addTwo(4);     // error due to hoisting , depends on how we declare function     
const addTwo = function (num) {
    return num + 2;
}
