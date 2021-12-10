// console.log("Area del trapecio")
// //alert ("Hello")
// let mi_nombre = "Angel"
// let edad = 0

// mi_nombre = prompt("Ingresa tu nombre")
// console.log("Tu nombre es:", mi_nombre)
// edad = prompt("Ingresa tu edad")

// console.log(typeof edad)
// edad = parseInt(edad)
// console.log("Tu edad dentro de 5 años será:" + (edad+5))
// nota = prompt("Ingresa tu nota");
// nota = parseInt(nota);
// //                        If    ){verdadero} ELSE {falso}

//Operador ternario: (condición)? verdadero: falso //No recomendado
// if (nota < 5) {
//     //1 a 4
//   calificacion = "Insuficiente";
// } 
// else if (nota < 6) {
//     //5
//   calificacion = "Suficiente";
// } else if (nota < 8) {
//     //6 y 7
//   calificacion = "Bien";
// } else if (nota <= 9) {
//     //8 y 9
//   calificacion = "notable";
// } else {
//   calificacion = "Sobresaliente";
// }
// console.log("Mi nota es", calificacion);

// //If and Else
// if (nota < 5) {
//   calificacion = "suspendido";
// } else {
//   calificacion = "aprobado";
// }
// console.log("mi nota es:", nota)
// console.log("Estoy", calificacion);

//Condicion Switch
nota = prompt("Ingresa tu nota");
nota = parseInt(nota)
console.log("He realizado mi examen. Mi resultado es el siguiente: ", nota)
switch (nota) {
  case 10:
    calificacion = "Sobresaliente";
    break;
  case 9:
  case 8:
    calificacion = "Notable";
    break;
  case 7:
  case 6:
    calificacion = "Bien";
    break;
  case 5:
    calificacion = "Suficiente";
        break;
        case 4:
    case 3:
    case 2:
    case 1:
    case 0:
        calificacion= "Insuficiente"
        break
        default:
            calificacion = "Nota errónea"
            break
}
console.log ("HMi nota es", calificacion)