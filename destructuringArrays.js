const namesArray = [
    'mel', 
    'john', 
    'joey', 
    'james', 
    function greetNames (bossCEO, secretary, dev, frontEnd) {
        console.log(`ito ang team CIPH ${bossCEO} as CEO of CIPH, ${secretary} as secretary, ${dev} as lead developer and ${frontEnd} as front end lead`)
    }
];

// old way
const name1 = namesArray[0];
const name2 = namesArray[1];
const name3 = namesArray[2];
const name4 = namesArray[3];
console.log(name1)
console.log(name2)
console.log(name3)
console.log(name4)

// destructured array
const [nameX, nameY, nameZ, nameLast] = namesArray;
console.log(nameX)
console.log(nameY)
console.log(nameZ)
console.log(nameLast)

// if we want to skip items 
const [a, , b, c] = namesArray;
console.log(a, b, c)

// we can add default values if we are not sure kung anong makikita natin sa array
const [allias1 = 1, allias2 = 1, allias3 = 1, allias4 = 1, allias5 = 1, allias6 = 1] = namesArray;
console.log(allias1, allias2, allias3, allias4, allias6) // with this if one of the variables natin ay walang equal value sa loob ng array, ang lalabas na value ay yung value na sinet natin sa array so the output of this is 1


// lets try to run functions inside the array
// im running allias5 here kasi define na sya, pero before 1 lang ang value kasi yun ang default na nilagay ko
allias5(allias1, allias2, allias3, allias4),

// this is spread operator - im simply calling all the values of the array, this will work same as we run above
allias5(...namesArray)