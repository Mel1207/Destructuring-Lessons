'use strict'

const laptopModels = [
    'Asus',
    'Lenovo',
    'Razer',
    'MSI',
    'Acer',
    function specsCreator(coreProcessor, ram, rom, brandName) {
        return `Thank you for purchasing ${brandName} ${coreProcessor}, ${ram}, ${rom} of internal storage, happy gaming!`
    } 
]

// basic instatiation of array with function
console.log(laptopModels[5]('Core I9', '32gb', '2TB', laptopModels[0]))

// basic destructuring array
console.log(laptopModels[0])
console.log(laptopModels[1])
console.log(laptopModels[2])
console.log(laptopModels[3])
console.log(laptopModels[4])
console.log(laptopModels[5])

// destrucured array
const [model1, model2, model3, model4, model5] = laptopModels
console.log(model1, model2, model3, model4, model5)