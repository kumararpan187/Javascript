const name = "Arpan";
let age = 21;

// console.log(`My name is ${name} and i am ${age}.`);
// console.log(name.length);

const gameName = new String("cricket"); // => new String returns a object String 
// console.log(gameName[2]);   // => i
// console.log(gameName.toUpperCase()); // => Cricket
// console.log(gameName); // => [String : 'cricket']   
// console.log(name); // => Arpan
// console.log(gameName.charAt(2)); //  => i 
// console.log(gameName.indexOf('t')); // => 6 

const newString = gameName.substring(0, 4);
// console.log(newString); // => cric

const anotherString = gameName.slice(-2);
// console.log(anotherString); // => et

const newStr = "    Asus-Vivobook    ";
// console.log(newStr);        // =>         Asus-Vivobook
// console.log(newStr.trim()); // => Asus-Vivobook


const url = "https://arpan.com/arpan%20Asus";
// console.log(url.replace('%20', "_")); // => "https://arpan.com/arpan_Asus"
