const namesArr = [
    'Mel',
    'John',
    'MJ',
    function mentionNames (fullStack, backEnd, frontEnd) {
        console.log(`Hi there team! ${fullStack}: Fullstack Dev, ${backEnd}: Backend Dev, ${frontEnd}: Frontend Dev, how are we today ?, we got more projects to do!`);
    }
]

console.log(namesArr)

// old way of getting individual items in array by index
// const Mel = namesArr[0];
// const John = namesArr[1];
// const Mj = namesArr[2];
// console.log(Mel, John, Mj)

// destructuring Array
const [mel, john, mj] = namesArr;
console.log(mel, john, mj)

// skip some items in array
const [name1, , name3] = namesArr;
console.log(name1, name3)

// added default values in array - the value that we set in each variable will be the display incase hindi mahanap ni javascript yung equal value ng variables natin.
const [a1 = 0, a2 = 0, a3 = 0, a4 = 0, a5 = 0] = namesArr
// console.log(a1, a2, a3, a4, a5)

// lets call the function we created inside the array called mentionNames, inside the variable of a4
a4(...namesArr);

// we can also destructure nested array: an array inside of array
const numberArr = [1, 2, 3, [10, 20, 30]];
const [a, b, c, [x, y, z]] = numberArr; 

console.log(a, b, c, x, y, z)

// lets combine arrays using destructuring
const allArrays = [...namesArr, ...numberArr];
console.log(allArrays);