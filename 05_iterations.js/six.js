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


//********************************************************************************************************** */


const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1988, edition: 2006 },
    { title: 'Book Three', genre: 'Science', publish: 1983, edition: 2006 },
    { title: 'Book Four', genre: 'History', publish: 1989, edition: 2007 },
    { title: 'Book Five', genre: 'Fiction', publish: 1992, edition: 2011 },
    { title: 'Book Six', genre: 'Science', publish: 1995, edition: 2012 },
    { title: 'Book Seven', genre: 'Non-Fiction', publish: 2005, edition: 2013 },
    { title: 'Book Eight', genre: 'History', publish: 1999, edition: 2014 },
    { title: 'Book Nine', genre: 'Fiction', publish: 2001, edition: 2012 },

]

let userBooks = books.filter((book) => book.genre === 'Fiction');
// console.log(userBooks); //   => 
// [
//     { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
//     {
//       title: 'Book Five',
//       genre: 'Fiction',
//       publish: 1992,
//       edition: 2011
//     },
//     {
//       title: 'Book Nine',
//       genre: 'Fiction',
//       publish: 2001,
//       edition: 2012
//     }
//    ]

userBooks = books.filter((book) => book.publish >= 2000 && book.genre === 'Fiction')
console.log(userBooks);

// => [
//   {
//     title: 'Book Seven',
//     genre: 'Non-Fiction',
//     publish: 2005,
//     edition: 2013
//   },
//   {
//     title: 'Book Nine',
//     genre: 'Fiction',
//     publish: 2001,
//     edition: 2012
//   }
// ]

//******************************************************************************************************* */
