/*
=======================================
         SECCION EMACSCRIPT 10
=======================================

ARRAY FLAT
Devuelve cualquier matriz con sus 
sub-matrices de forma aplanada.
*/
let array = [1, 2, 3, [1, 2, 3, [1, 2, 3]]];
console.log(array.flat(2));


/*
ARRAY FLAT MAP
Permite mapear cada elemento, pasarle 
una función y aplanarlo según el 
resultado.
*/
let arr = [1, 2, 3, 4, 5];
console.log(arr.flatMap(value => [value, value*2]));


/*
TRIM START
Elimina los espacios en blanco de un 
string.
*/
let hello = '    h  e  l  l  o  !    ';
console.log(`Original:\t\t\'${hello}\'`);
console.log(`.trim():\t\t\'${hello.trim()}\'`);
console.log(`.trimEnd():\t\t\'${hello.trimEnd()}\'`);
console.log(`.trimLeft():\t\'${hello.trimLeft()}\'`);
console.log(`.trimRight():\t\'${hello.trimRight()}\'`);
console.log(`.trimStart():\t\'${hello.trimStart()}\'`);


/*
TRY CATCH
Ya no es necesario especificar en el 
catch la variable error.
*/
try{

} catch (error) {
    error;
}

//<es10>
  try{

  } catch {
    error;
  }
//</es10>


/*
FROM ENTRIES
Transforma clave:valor en un objeto
*/
let entries = [['name', 'Miguel'], ['age', 24]];
let objeto = Object.fromEntries(entries);
console.log(objeto);

const keys = Object.keys(objeto);
const values = Object.values(objeto);
console.log(keys, values);


/*
SYMBOL
*/
let descripcion = 'Hola, soy una descripción.';
let symbol = Symbol(descripcion);
console.log(symbol.description);