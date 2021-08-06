'use strict'
const laptopList = document.querySelector('.laptopList');
const btnAddBrand = document.querySelector('.btn-submit');
const inputBrand = document.querySelector('.brand-input');

let laptopModels = [
    'Asus',
    'Lenovo',
    'Razer',
    'MSI',
    'Acer',
]

const specsCreator = (coreProcessor, ram, rom, brandName) => {
    return `Thank you for purchasing ${brandName} ${coreProcessor}, ${ram}GB RAM, ${rom}TB of internal storage, happy gaming!`
} 

const laptopProcessors = [
    'i3',
    'i5',
    'i7',
    'i9',
    'r3',
    'r5',
    'r7',
    'r9'
]

let brandNames = [];

const numbers = [
    100,
    200,
    300,
    400,
    500,
    600,
    700
]

// laptopModels.forEach(laptop => {
//     const createLi = document.createElement('li');
//     createLi.textContent = laptop
//     laptopList.appendChild(createLi).className = 'listed'
// })


laptopModels.forEach(brand => {
    const createLi = document.createElement('li');
    createLi.textContent = brand
    laptopList.appendChild(createLi).className = 'listed'
})

btnAddBrand.addEventListener('click', (e) => {
    e.preventDefault();

    

    if(inputBrand.value === '') {
        alert('please add brand')
    } else {
        const branNew = inputBrand.value;
        laptopModels.push(branNew)

        // console.log(branNew)
        console.log(laptopModels)

        
    }

    inputBrand.value = ''
    
})



