//FA = Funcion A
const FA = function () {
  console.log("Funcion A ejecutada");
};
//FB = Function B
const FB = function () {
  console.log("Funcion B ejecutada");
};

function activandoFuncion(fx) {
  console.log("Funcion C ejecutada");
  fx(); // callback
}
//MAIN
activandoFuncion(FA);
activandoFuncion(FB);

/**EJEMPLO */
//Hacer una ensalada
//1. Seleccionar vegetales
//2. Cortar vegetales
//3. Mezclarlos
//4. Aderezar los ingredientes
let vegetales = ["zanahoria", "lechuga", "tomate"];

//Funciones
const cutVegetales = function () {
  console.log("Cortar:", vegetales);
};
const mezclarVegetales = function (cortar=cutVegetales) {
  cortar();
  console.log("Mezclar:", vegetales);
};
const aderezarVegetales = function (mezclar, cortar) {
  mezclar(cortar);
  console.log("Aderezando", vegetales);
};
function doSalad(_vegetales) {
  aderezarVegetales(mezclarVegetales,cutVegetales);
}
//Main
doSalad()

/**Usando callbacks */
//Funciones
function myDisplayer(some){
  console.log(some);
}
function myCalculator(num1,num2,myCallback){
  let sum = num1 + num2
  myCallback(sum)
}
//Main
myCalculator(5,4,myDisplayer)

// CALCULANDO EL AREA DEL TRIANGULO

const sumar = function (x,y){
  return x + y
}
function mult(x,y){
  return x * y
}
const div = (x,y) => {
  return x / y
}

function areaTriangulo(sum_callback, mult_callback,div_callback){
  let area = 0;
  let base = 10, altura = 20 ;

  area = div_callback( mult_callback(base,altura),2)

  return area;
}
// MAIN

console.log( areaTriangulo(sumar,mult,div) )

console.log("===================");
//TRAER USERS
function traerUsers (callback){
console.log("loading...");
setTimeout(() => {
  //traer lista de usuarios
  let response = ["Daniel","Nicolle","Laura"]
  callback(response)
}, 3000); //= 3seg
}
function MostrarUsers (users){
  console.log(users);
}
//Main
traerUsers(MostrarUsers)

console.log("=====================================");
// CALLBA


//receta de panqueques
let estado = "Ingredientes";

// Hacer un panqueque
// 1. Mezclar ingredientes
// 2. Hornear
// 3. Decorar
// 4. Comer

// Funciones

function mezclar() {
  estado = "Mezcla lista";
  console.log(estado);
  hornear(decorar);
}
function hornear(_decorar) {
  console.log("Horneando...");
  setTimeout(() => {
    estado = "Panqueque horneado";
    console.log(estado);
    _decorar(comer);
  }, 2000);
}
function decorar(_comer) {
  console.log("Decorando...");
  setTimeout(() => {
    estado = "Panqueque decorado";
    console.log(estado);
    _comer();
  }, 2000);
}

function comer() {
  console.log(estado, "y listo para comer");
}

function prepararPaqueque() {
  estado = "Listo para empezar";
  console.log(estado);
  mezclar();
}

prepararPaqueque();