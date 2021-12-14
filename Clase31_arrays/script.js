//Forma tradicional
// let array = new Array("a", "b", "c");
// console.log(array);
// let cadena_de_texto = `Mi perro dijo "Guau"`;

// //Mediante literales
// let array2 = ["a", "b", "c"]; //Arreglo de 3 elementos
// console.log(array2);

// //Inicializar un arreglo
// let empty = []; //Arreglo Vacio(0)
// console.log(empty);

// let mixto = ["texto", 123, true]; //Arreglo mixto
// console.log(mixto);

// let razas = ["poodle", "labrador", "hushky", "doberman"];
// razas.push("Schnauzer")
// array.pop()
// const nro_razas = razas.length; // 4
// console.log("Numero de razas: ", nro_razas);
// // 4 - 1 = 3
// razas[nro_razas - 1]; //
// //      4         -  1  = 3
// razas[razas.length - 1]; // doberman
// //console.log(name_var[position])
// console.log()

//Propiedad o atributo => obj.propiedad
//Función o método => obj.funcion()
//obj . metodo
//--------------------------------------------------------------------------------
/**Arreglos */
let baraja = [`5 picas`, `4 diamante`, `5 trebol`, `A corazones`];
console.log(baraja);
baraja.push("6 corazones"); //Agrega la final el 6 corazones
console.log(baraja); //['5 espadas', '4 diamante', '5 trebol', 'A corazones', '6 corazones']
let carta = baraja.pop(); //Elimina la carta final: 6 corazones
console.log(carta); //6 corazones
let carta2 = baraja.pop(); //Elimina la carta final: A corazones
console.log(carta2); //A corazones
console.log(baraja); //['5 espadas', '4 diamante', '5 trebol']
baraja.unshift("A picas"); //Añade al principio el A picas
console.log("Despues de añadir al comienzo", baraja); //['A picas', '5 espadas', '4 diamante', '5 trebol']
let carta3 = baraja.shift(); //Elimina la carta inicial: A picas
console.log(carta3); //A picas
let carta4 = baraja.shift(); //Elimina la carta inicial: 5 picas
console.log(carta4); //5 picas
console.log(baraja); //['4 diamante', '5 trebol']
//----------------------------------------------------------------------------------------
/**Push y Concat */
let barajaA = new Array("A diamantes", "4 corazones", "2 trébol", "4 trébol");
let barajaB = new Array("5 diamantes", "Q trebol", "8 corazones");

let barajaC = barajaA.concat(barajaB);
console.log("Baraja A:", barajaA);
console.log("Baraja B:", barajaB);
console.log("Baraja C:", barajaC);
//----------------------------------------------------------------------------------------
const fruits = [
  "Apple",
  "Banana",
  "Mango",
  "Grape",
  "Orange",
  "Pear",
  "Cherry",
];
/**slice*/
let sub_frutas = fruits.slice(1, 5);
console.log(fruits);
console.log(sub_frutas);

console.warn("splice");
/**Splice */
let spliced_fruits = fruits.splice(1, 4);
console.log(spliced_fruits);
console.log(fruits);

console.info("Sear. and compro.")
/**Búsqueda y comprobación */
const sports = [
"Golf", 
"Basketball",
"Tenis", 
"Surfing",
"Arqueria",
"Karate",
"Ciclismo"];
const colores ="rojo, azul, verde"

if(Array.isArray(sports)){
    console.log("Esto es un arreglo")
}
