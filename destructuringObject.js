'use strict'

const pcBuild = {
    processor: ['Intel Pentium 10','Intel Core i3', 'Intel core I7', 'Intel Core I9' ],
    GPU: {
        brand: 'NVIDIA',
        series: 'GTX 1660',
        type: 'Super',
        memory: '8gb'
    },
    RAM: {
        brandName: 'TFORCE Delta',
        variant: 8,
        items: '1 Stick',
        
    },
    motherBoard: {
        brandName: 'ASUS ROG',
        series: 'Strix'
    },
    storage: [1, 2],

    orderFunction: function({processorNameIndex, gpuMemory, ramSticks, storageIndex}) {
        console.log(`your order is ${this.processor[processorNameIndex]}, and GPU is ${this.GPU.brand} ${this.GPU.series}, ${this.GPU.type}, ${gpuMemory} + ${this.RAM.brandName}, ${this.RAM.variant}gb x ${ramSticks}, mobo is ${this.motherBoard.brandName} ${this.motherBoard.series} + ${this.storage[storageIndex]}TB HDD`)
    }
}

// lets try run 1 method
pcBuild.orderFunction({
    processorNameIndex: 3,
    gpuMemory: '8gb',
    ramSticks: '4pcs',
    storageIndex: 1
})

const {processor, GPU, RAM, motherBoard, storage} = pcBuild;
console.log(processor, GPU, RAM, motherBoard, storage) 

// opening nested object inside an object GPU object
const {brand, series, type, memory} = GPU
console.log(brand, series, type, memory)

// RAM object + assigning default values
const {brandName = 0, variant = 0, items = 0, checlist = 0} = RAM
console.log(brandName, variant, items, checlist)

const {brandName: moboBrand, series: moboSeries} = motherBoard
console.log(moboBrand, moboSeries)