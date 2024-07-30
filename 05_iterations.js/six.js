const coding = ['java', 'python', 'javascript', 'ruby', 'cpp'];

const values = coding.forEach((item) => item);
// console.log(values);  // => undefined because forEach doesn't return any values


const myNum = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// const val = myNum.filter((num)  => num >= 5);        // => [5, 6, 7, 8, 9, 10]
const val = myNum.filter((num) => {
    // console.log(num)                       //=> 1,2,3,4,5,6,7,8,9,10
    return num > 4;
})
// console.log(val);  // => [5, 6, 7, 8, 9, 10]    
