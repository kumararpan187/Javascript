// object using constructor

const data = new Object();  // singleton object

data.id = 224;
data.name = "Sam";
// console.log(data); // => { id: 224, name: 'Sam' }


//----------------------------------------------------------------------------------------------------------------

const userData = {
    id: 224018,
    name: "Arpan",
    fullName: {
        fullName: {
            firstName: "Arpan",
            lastName: "kumar"
        }
    }
}
// console.log(userData.fullName.fullName);

// ---------------------------------------------------------------------------------------------------------------

let obj1 = { 1: 'a', 2: 'b', 3: 'c' };
let obj2 = { 4: 'd', 5: 'e', 6: 'f' };

// const obj3 = { obj1, obj2 };
// console.log(obj3);      // => {
//     obj1: { '1': 'a', '2': 'b', '3': 'c' },
//     obj2: { '4': 'd', '5': 'e', '6': 'f' }
//   }


// const obj3 = Object.assign(obj1, obj2);
// console.log(obj3); // => { '1': 'a', '2': 'b', '3': 'c', '4': 'd', '5': 'e', '6': 'f' }

// or use spread method **

const obj3 = { ...obj1, ...obj2 };
// console.log(obj3); //{ '1': 'a', '2': 'b', '3': 'c', '4': 'd', '5': 'e', '6': 'f' }

//----------------------------------------------------------------------------------------------------------------



// console.log(Object.keys(data)); // => [ 'id', 'name' ]
// console.log(Object.values(data)); // => [224, 'Sam' ]
// console.log(Object.entries(data)); // => [ [ 'id', 224 ], [ 'name', 'Sam' ] ]




const course = {
    courseName: "javaScript",
    price: 999,
    instructor: "hitesh-chai aur code"

}

// course.instructor
// course.instructor
// course.instructor            =>  instead of writing multiple multiple times just use destructure

const { instructor } = course;
console.log(instructor);


