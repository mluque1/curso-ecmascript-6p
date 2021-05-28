/*
=======================================
         SECCION EMACSCRIPT 8
=======================================
---------------------------------------
CLASE 1: Object.entries, Object.values,
Padding y Trailing-Comas
---------------------------------------

OBJECTS ENTRIES
Devuelve un objeto como una matriz.
*/
const data = {
    frontend: 'Miguel',
    backend: 'Isabel',
    desing: 'Ana',
}
const entries = Object.entries(data);
console.log(entries);
console.log(entries.length);


/*
OBJECT VALUES
Transforma lo valores de un objeto en 
un array.
*/
const data = {
    frontend: 'Miguel',
    backend: 'Isabel',
    desing: 'Ana',
}
const values = Object.values(data);
console.log(values);
console.log(values.length);


/*
PADDING
Sirve para añadir más caracteres a un 
string al inicio o al final
*/
const string = 'Hello';
console.log(string.padStart(7, 'hi,'));
console.log(string.padEnd(12, ' --'));
const st2 = 'Muñaño';
const len = st2.length;
const lenSearch = 8;
const res = lenSearch-len;
console.log(st2.padEnd(len + (res/2), '-').padStart(len + res, '-'))


/*
TRAILING COMAS
Nos permite añadir comas al final de 
cada valor del objeto que puede 
significar que exista más valores o no
*/
const obj = {
    name: 'Miguel',
}




/*
---------------------------------------
        CLASE 2: Async y Await
---------------------------------------


*/
const helloWorld = () => {
    return new Promise((resolve, reject) => {
        (false)
         ? setTimeout(() => resolve('Hello World! '), 3000)
         : reject(new Error('Test error'));
        
    });
}

const helloAsync = async () => {
    const hello = await helloWorld();
    console.log(hello);
}
helloAsync();

const anotherFunction = async () => {
    try{
        const hello = await helloWorld();
        console.log(hello);
    } catch (error){
        console.log(error);
    }
}
anotherFunction();