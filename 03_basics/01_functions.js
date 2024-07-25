// functions 

function addTwoNnumber(num1, num2) {
    return num1 + num2;
    // let result = num1 + num2;
    // return result;
}

let result = addTwoNnumber(5, 3);
// console.log(` result : ${result}`);



//------------------------------------------------------------------------------------------------------------


function userLoginMessage(username) {
    if (!username) {
        console.log(`Please enter username`);
        return
    }
    return `${username} just logged in!`
};

// console.log(userLoginMessage('Arpan'));  

// console.log(userLoginMessage()); // => undefined just logged in!  if - the if condition is not in above function



//---------------------------------------------------------------------------------------------------------


function calculateCartPrice(...price) {
    return price;
}

// console.log(calculateCartPrice(100, 120, 54, 78)); // =>  [ 100, 120, 54, 78 ]

// function calculateCartPrice(p1, p2, ...price) {
//     return price;
// }
// console.log(calculateCartPrice(100, 50, 14, 789, 2000)); // => here p1 =100 ,p2=50 and other values carried to ...prices
// [ 14, 789, 2000 ]  




//**************************************************************************************************** */

const user = {
    username: "Arpan",
    money: 200
}

function handleObject(anyObject) {
    console.log(`username is ${anyObject.username} and money is ${anyObject.money}`);
}

// handleObject(user); // or 
// handleObject({
//     username: "Arpan",
//     money: 200
// })

