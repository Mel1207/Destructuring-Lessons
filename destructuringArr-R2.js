'use strict'

const laptopModels = [
    'Asus',
    'Lenovo',
    'Razer',
    'MSI',
    'Acer',
    function specsCreator(coreProcessor, ram, rom, brandName) {
        return `Thank you for purchasing ${brandName} ${coreProcessor}, ${ram}GB RAM, ${rom}TB of internal storage, happy gaming!`
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
// console.log(laptopModels[5]) // function for array specsCreator

// destrucured array
const [model1, model2, model3, model4, model5, productModel] = laptopModels
console.log(model1, model2, model3, model4, model5)

// if we want to skip an array just leave empty name variable
const [laptop1, ,laptop3, , laptop5] = laptopModels
console.log(laptop1)
console.log(laptop3)
console.log(laptop5)

// lets run laptop function array
const runFunction = productModel('I7', 16, 2, model3)
console.log(runFunction)

// lets do some tricks
const modelList = [model1, model2, model3, model4, model5]
console.log(modelList)

const displayModels = (...models) => {
    return models
}

console.log(displayModels(...modelList))

