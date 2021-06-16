'use strict'

const bookArr = [
    'book1',
    'book2',
    'book3',
    'book4',
    'book5',
    [
        'Magazine',
        'Comics',
        'Dictionary',
    ], 
    function bookHandle (indexBook, timeBorrowed) {
        console.log(`You chose ${indexBook} to borrow on library at ${timeBorrowed}`)
    }
];

const [book1 = 'item1', , , , , , bookBorrowed = 'item1'] = bookArr;
const functionItem = bookBorrowed;

console.log(book1)
console.log(bookBorrowed(2, '10:00AM'))
console.log(functionItem(3, '2:00AM'))

// deconstruct similar but not the same, using index
// const sampleBook1 = bookArr[0]
// const sampleBook2 = bookArr[1]
// const sampleBook3 = bookArr[2]
// console.log(sampleBook1, sampleBook2, sampleBook3)

// // deconstruct an array 
// const [book1, book2] = bookArr;
// console.log(book1, book2)

// deconstruct array inside an array
// const [bookA, bookB, , , , [category1, category2, category3]] = bookArr;
// console.log(bookA, bookB)
// console.log(category1, category2, category3)

// selecting specific items in array
// const [bookX, ,bookY] = bookArr
// console.log(bookX, bookY)

// adding default values for an undefined item in array 
// const [a = 'book-001', b = 'book-001', c = 'book-001', d = 'book-001', e = 'book-001', [c1, c2, c3, c4], f = 'book-001'] = bookArr
// console.log(a,b,c,d,e,f) 
// kapag nakita sa array yung equal value ng variable na hinananap, it will not display the default value na sinet mo, pero if hindi makita ni machine sa array items mo yung exact value ng variable mo, automatic ididisplay ni js yung value na sinet mo