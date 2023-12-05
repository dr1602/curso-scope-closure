'use strict';

pi = 3.141592365;
console.log(pi);

// var pi; // undefined 
// 3.141592365
// al menos sin strict

function myFunction() {
    'use strict';

    return pi = 3.141592365
}

console.log(myFunction());

// pi is no defined