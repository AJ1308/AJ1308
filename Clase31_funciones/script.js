// //CAJA DE HERRAMIENTAS =
// function verEstado(estado) {
//   console.log("El estado de la madera es:", estado);
// }
// function martillar(mesa) {
//   console.log("Estoy martillando una", mesa, "Para probar su resistencia");
//   mesa_final = "Mesa resistente (Prueba exitosa)";
//   return mesa_final;
// }
// function atornillar(piezas_orificios, n_tornillos) {
//   console.log("Estoy atornillando", madera, "con", n_tornillos, "tornillos");
//   madera = "Mesa ensamblada";
//   return madera;
// }
// function cortar(madera) {
//   console.log("Estoy serruchando un", madera);
//   let piezas = "piezas de madera de " + madera;
//   return piezas;
// }
// function taladrar(piezas, broca) {
//   console.log("Estoy taladrando un", piezas, "con una broca de:", broca);
//   piezas_orificios = piezas + " con orificios de " + broca;
//   return piezas_orificios;
// }
// //-----------------------------------------
// //Programa principal
// //Paso 0: Comprar madera
// let madera = "Roble";
// //Construcción de madera
// verEstado(madera);
// //Paso 1: Cortar la madera
// madera = cortar(madera);
// verEstado(madera);

// //Paso 2:Hacer huecos
// let broca = "3/8";
// madera = taladrar(madera, broca);
// verEstado(madera);

// //Paso 3: Unir piezas
// let n_tornillos = 20;
// atornillar(madera, n_tornillos);
// verEstado(madera);

// //Paso 4: Golpear mesa
// martillar(madera);

//================================================================
//Declaracion de la función tablaDelUno()

function tablaDelCinco() {
  for (let i = 0; i <= 10; i++) 
  document.write( n, " x ", i, "=", n * i,"<br><br>" );
}

let n = prompt("Ingresa un número :)")

tablaDelCinco();
for (let i = 0; i <3 ; i++);