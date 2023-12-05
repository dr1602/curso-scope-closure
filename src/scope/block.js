function fruits() {
    if (true) {
        var fruitOne = 'Apple'; // function scope
        let fruitTwo = 'Orange'; // block scope
        const fruitThree = 'Strawberrie'; // block scope

        console.log(fruitTwo);
        console.log(fruitThree);
    }

    console.log(fruitOne);
    
}

fruits()

var nombre = undefined
console.log(nombre)
nombre = "Andres"

console.log(nombre) //undefined
var nombre = 'Andres'

console.log(nombre)
let nombre = 'Andres' // ReferenceError: nombre es not defined

if(true) {
    var saludo = 'hola'
    let despedida = 'chao'
}
console.log(saludo)
console.log(despedida)

var saludo = undefined
if (true){
  saludo = "hola"
  let despedida = "chao"
}
console.log(saludo)
// "hola"
console.log(despedida) 
// ReferenceError: despedida is not defined

var x = 1
{
    var x = 2
    console.log(x) //2
}
console.log(x) //2

//# Hoisting
var x = 1
var x = undefined // redeclaración
{
  x = 2 // reasignación
  console.log(x)  // 2
}
console.log(x) // 2

let x = 1
{
  let x = 2
  console.log(x) // 2
}

let x = 5
{
  console.log(x) //5
}

let x = 5
{
  console.log(x) // ReferenceError: Cannot access 'x' before initialization
  let x = 10 
}

function example() {
    for (var i =0; i < 10; i++){
        setTimeout(function(){
        console.log(i)
        }, 1000)
    }
}
example()
// 10 veces 10

function example() {
    var i = undefined 
   
     for (i =0; i < 10; i++){
       setTimeout(function(){
         console.log(i)
       }, 1000)
     }
}
   
example()
// 10 veces 10