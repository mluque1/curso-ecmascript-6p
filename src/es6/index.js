/*
=======================================
         SECCION EMACSCRIPT 6
=======================================
---------------------------------------
CLASE 1: Default Params y Concatenación
---------------------------------------

DEFAULT PARAMS
*/
function newFunction(name, age, country) {
    var name = name || 'Miguel';
    var age = age || 24;
    var country = country || 'CO';

    console.log(name, age, country);
}

//<es6>
function newFunction2(name = 'Miguel', age = 24, country = 'CO'){
    console.log(name, age, country);
}
newFunction2();
newFunction2('Juanito', 23, 'MX');
//</es6>


/*
CONCATENACIÓN
*/
let hello = 'Hello';
let world = 'World';
let epicPhrase = hello +  ' ' + world;
console.log(epicPhrase);

//<es6>
let epicPhrase2 = `${hello} ${world}`;
console.log(epicPhrase2);
//</es6>




/*
---------------------------------------
CLASE 2: LET y CONST, Multilínea, 
Spread Operator y Desestructuración
---------------------------------------

MULTILINEA
*/
let lorem = "Incididunt ut labore et dolore magna aliqua.\n"
+ "otra frase que necesitamos";

//<es6>
let lorem2 = `Incididunt ut labore et dolore magna aliqua.
otra frase que necesitamos`;
//</es6>
console.log(lorem);
console.log(lorem2);


/*
DESESTRUCTURACIÓN
*/
let person = {
    'name':'Miguel',
    'age':24,
    'country':'CO'
}
console.log(person.name, person.age, person.country);

//<es6>
let { age, country } = person;
console.log( age, country);
//</es6>


/*
SPREAD OPERATOR
*/
//<es6>
let team1 = ['Oscar', 'Julian', 'Miguel'];
let team2 = ['Juanita','Eustaquia','Camila'];
let education = ['David', ...team1, ...team2, 'Romualdo'];
console.log(education);
//</es6>


/*
LET Y CONST
LET: Solo disponible en el bloque de código
*/
{
    var globalVar = 'Global Var';
}

{
    let globalLet = 'Global Let';
    console.log(globalLet); //Funciona
}
console.log(globalVar);
console.log(globalLet); //No funciona

/*
CONST: Constante no modificable.
*/
const A = 'A';
A = 'b'; //error




/*
---------------------------------------
CLASE 3: Arrow Functions, Promesas y 
Parámetros en objetos
---------------------------------------

OBJETOS
*/
let name = 'Miguelino';
let age = 24;
obj = { name: name, age: age };

//<es6>
obj2 = { name, age };
console.log(obj)
console.log(obj2)
//</es6>


/*
ARROW FUNCTIONS
*/
const PEOPLE = [
    { name: 'Miguel', age: 24 },
    { name: 'Oscar', age: 32 },
    { name: 'Yesica', age: 27 }
]
let listOfNames = PEOPLE.map(function(item){
    console.log(item.name)
})

//<es6>
let listOfNames2 = PEOPLE.map(item => console.log(item.name));

const listOfNames3 = ( { name, age } ) =>  `${name}, ${age} years old.`;
console.log(listOfNames3(PEOPLE[0]));

const listOfNames4 = ( {name} ) => console.log(name);

const square = num => num*num;
//</es6>


/*
PROMESAS
*/
const helloPromise = () => {
    return new Promise((resolve, reject) => {
        if(true) {
            resolve('Hey!')
        } else {
            reject('Ups!')
        }
    });
}
helloPromise()
    .then(response => console.log(response))
    .then(() => console.log('Hola!'))
    .catch(error => console.log(error))




/*
---------------------------------------
CLASE 4: Clases, Módulos y Generadores
---------------------------------------

CLASES
*/
class Calculator {
    constructor() {
        this.valueA = 0;
        this.valueB = 0;
    }

    sum(valueA, valueB){
        this.valueA = valueA;
        this.valueB = valueB;
        return this.valueA + this.valueB;
    }

}
const calc = new Calculator();
console.log(calc.sum(2, 2));

const hello = require('./module');
console.log(hello());


/*
GENERADORES
Función especial que retorna una serie
de valores según un algoritmo definido.
*/
function* helloWorld() {
    if(true){
        yield 'Hello, ';
        console.log('1');
    }
    if(true){
        yield 'World!';
    }
};
const generatorHello = helloWorld();
console.log(generatorHello.next().value);
console.log(' ')
console.log(generatorHello.next().value);
console.log(' ')
console.log(generatorHello.next().value);
