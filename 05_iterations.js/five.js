const coding = ['js', 'ruby', 'java', 'python', 'c++'];

// coding.forEach(function (item) {
//     console.log(item);
// })           

// => js
// ruby
// java
// python
// c++

// **************************************************************************************************



// coding.forEach((item) => {
//     console.log(item);
// })

function print(item) {
    console.log(item);
}

// coding.forEach(print);


// **********************************************************************************************************

// coding.forEach((item, index, arr) => {
//     console.log(item, index, arr);
// })
// =>
// js 0 [ 'js', 'ruby', 'java', 'python', 'c++' ]
// ruby 1 [ 'js', 'ruby', 'java', 'python', 'c++' ]
// java 2 [ 'js', 'ruby', 'java', 'python', 'c++' ]
// python 3 [ 'js', 'ruby', 'java', 'python', 'c++' ]
// c++ 4 [ 'js', 'ruby', 'java', 'python', 'c++' ]


const data = [
    {
        language: 'java',
        fileName: 'java'
    },
    {
        language: 'python',
        fileName: 'py'
    },
    {
        language: 'javascript',
        fileName: 'js'
    }
]

data.forEach((item) => {
    console.log(` language ${item.language} and extension is ${item.fileName}`);
})