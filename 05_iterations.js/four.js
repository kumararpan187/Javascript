const myObj = {
    js: 'javaScript',
    cpp: 'c++',
    rb: 'ruby',
    swift: 'swift by apple'
}

// for (const key in myObj) {
//     console.log(`${key} shortcut is for ${myObj[key]}`);
// }

// => 
// js shortcut is for javaScript
// cpp shortcut is for c++
// rb shortcut is for ruby
// swift shortcut is for swift by apple

//****************************************************************************************************** */

const pr = ["java", "cpp", "c", "python", "javascript"]
// for (const key in pr) {
//     console.log(key);

// } // => 0
// 1                       here it gives key for arrays that  usually start with 0
// 2
// 3
// 4

//*********************************************************************************************************** */

// for (const key in pr) {
//     console.log(pr[key]);
// }

// java
// cpp
// c
// python
// javascript

//************************************************************************************************************* */

const map = new Map();
map.set('IN', "India");
map.set('US', "United States");
map.set('UK', "United Kingdom");
for (const key in map) {
    console.log(key);     // nothing will print 
}

//In JavaScript, Map objects are not iterated using the for...in loop, 
// because for...in is used to iterate over the enumerable properties of an object, not the entries in a Map.

//*************************************************************************************************************** */
