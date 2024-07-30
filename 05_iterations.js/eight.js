let num = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const initialValue = 0;

const Reduce = num.reduce((accumulator, currentValue) => accumulator + currentValue, initialValue);

// or 

const r = num.reduce(function (acc, curr) {
    return acc + curr;
}, 0);
console.log(r); // => 55
