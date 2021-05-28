/*
=======================================
         SECCION EMACSCRIPT 9
=======================================

OPERADOR DE REPOSO
Puede extraer las propiedades de un 
objeto que aún no se ha construido.
Nos permite excluir ciertos datos y 
conservar una union de los demás.
*/
const obj = {
    name: 'Miguel',
    age: 24,
    country: 'CO'
};
let { name, ...all } = obj;
console.log(all)


/*
UNION DE PROPIEDADES POR PROPAGACIÓN
Une las propiedades de diferentes 
objetos.
*/
const obj1 = {
    ...obj,
    height: 1.71
}
console.log(obj1)


/*
PROMISE FINALLY
Podemos ver cuando ha finalizado el 
llamado y podremos ejecutar alguna 
función.
*/
const helloWorld = () => {
    return new Promise((resolve, reject) => {
        (true)
            ? setTimeout(() => resolve('Hola, mundo!'), 3000)
            : reject(new Error('Test error.'))
    });
}
helloWorld()
    .then(response => console.log(response))
    .catch(error => console.log(error))
    .finally(() => console.log(`E\' acabao\'`))


/* 
REGEX
*/
const regexDate = /([0-9]{4})-([0-9]{2})-([0-9]{2})/
const match = regexDate.exec('2021-05-28');
const year = match[1]
const month = match[2]
const day = match[3]
console.log(`El ${day} del mes ${month} del año ${year}`)
