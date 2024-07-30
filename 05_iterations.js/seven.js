let num = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const newNum = num.map((num) => num + 10);
// console.log(newNum); // => [11,12,13,14,15,16,17,18,19,20]

const chaining = num.map((num) => num * 10) // => [0,20,30,40,50,60,70,80,90,100]
    .map((num) => num / 5)              // => [2,4,6,8,10,12,14,16,18,20]
    .filter((num) => num > 10);
console.log(chaining);                   // => [12,14,16,18,20];


