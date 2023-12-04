// 02 GLOBAL SCOPE
// variables

var a; // declarando la variable a

var b = 'b' // delcaramos y asignamos la variable b

b = 'bb' // reasignamos la variable b

var a = 'aa' // redeclaramos la varible

// Global scope
// Cualquier variable en el documento se hacen globales y se estancian en el objeto window.

var fruit = 'Apple'; // global
console.log(fruit);

function bestFruit() {
    console.log(fruit);
}

bestFruit();

// otra forma de crear una funcion global es cuando no tenemos cuidado al momento de declarar, NO la declaramos, y simplemente la asignamos, se vuelve global.

function countries () {
    country = 'Colombia'; //global
    console.log(country);
}

countries();
console.log(country);