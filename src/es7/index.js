/*
=======================================
         SECCION EMACSCRIPT 7
=======================================

INCLUDES
*/
let numbers = [1, 2, 3, 7, 8];
let n = 9;
if( numbers.includes(n) ) {
    console.log(`Si se encuentra el valor ${n}`);
} else {
    console.log(`No se encuentra el valor ${n}`);
}


/*
POW
*/
let base = 6;
let exponent = 3;
let result = base ** exponent;
console.log(`${base} elevado a ${exponent} da: ${result}`)