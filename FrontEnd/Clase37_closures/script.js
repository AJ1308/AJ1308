//Closure: funcion incr()
const incr = (function () {
  let num = 0;
  return function () {
    num++;
    return num;
  };
})();

console.log(typeof incr); //'Function'
console.log(incr()); //1
console.log(incr()); //2
console.log(incr()); //3

function creaSuma(x) {
  return function (y) {
    return x + y;
  };
}
let suma5 = creaSuma(5);
let suma10 = creaSuma(10);
console.log(suma5(2));
console.log(suma10(10));

//Ejercicios
/** */
/**Ejercicio 1 */

/**Ejercicio 2*/
let sentence = "El lunes es un gran dia para programar";
let WordToReplace = "lunes";
let replacerWord = "viernes";

function replace() {
  let newSentence = sentence.replace(WordToReplace, replacerWord);
  return newSentence;
}
console.log(sentence);
console.log(replace());

/**Ejercicio 3 */
function minus (numeros){
  if (Array.isArray(numeros)){
    return false
  }
  let total = numeros [0]
  if(total){
    return 0
  }

  for (let i=0;i<numeros.lenght;i++){
    total -= numeros[i]
  }
  return total
}

console.log(minus([7,3,2,1]));
// /**Funciones como objetos */
// let code = prompt("Ingrese una instrucción"); // alert("HOLA")
// const fx = new Function(code);
// fx();
// /**Función autoajustable */
// (function () {
//   console.log("Hola!!");
// })()
//   /**Función autoejecutable con parámetros */
// (function (name){
//   console.log(`Hola ${name}`);
// })("Angel")
