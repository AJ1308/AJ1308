// var a = 1;
// console.log(a);//Aqui se accede a la "a" global, que vale 1

// function x() {
//   console.log(a); //En esta linea el valor de "a" es undefined
// var a = 5;//Aqui creamos una variable "a" a nivel de funcion

//   console.log(a);//Aqui el valor de "a" es 5(a nivel de funcion)
//   console.log(window.a);//Aqui el valor de "a" es 1 (ámbito global)
// }
// x();//Aqui se ejecuta el codigo de la funcion x()
// console.log(a);//En esta linea el valor de "a" es 1

//------------------------------------------------------------
/**Opción 1: Bucle con let **/
//For(iniciar i; i< total; iterador en incremento/paso)
console.log("Antes: ", p) //Antes: undefined
for(let p =  0; p < 3; p++){//Durante: 0, 1, 2
console.log("-", p)}
console.log("Después: ", p)//Después: undefined
//++=incremento

/**Opción 2: Bucle con var */
console.log("Antes ", p) //Antes: undefined
for(var p = 0; p < 3; p++ ){ 
console.log("-", p)}//Durante: 0, 1, 2
console.log("Después: ", p)//Después: 3 (WTF!)