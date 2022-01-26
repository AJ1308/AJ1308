// let contador = 1
// let num = 0
//Operadores logicos:
//AND = &&
//OR = ||
//NOT = !
//COMPARAR ==

// while (contador < 5) {
//   let dato = prompt("Introduce  número del 1 al 10:", "");
//   let num = parseInt(dato);

//   document.write(`El número introducido es ${num} </br>`);
//   // ` -> "Alt + 96" or  "alt gr + }" or "tecla a lado de 'P'"
//   // document.write("El número introducido es "+num+"</br>");

//   document.write(` El contador es ${contador} </br> `);

//   contador++; //contador = contador + 1;
// }

// document.write(`</br><h2>
//     Fin del Programa </br>
//     contador ya NO es menor que 5.   
//     </h2>`);

// document.write(`</br> Último número introducido es ${num}`);

//-------------------------------------------------------------------------------
// AND => &&
// OR => ||  => ALT + 1

//   VERDADERO AND FALSO
// while ((num != 7 && contador < 5) || num == 11) {
//     let dato = prompt("Introduce  número del 1 al 10:", "");
//     num = parseInt(dato);

//     document.write(`El número introducido es ${num} </br>`);
//     // ` -> "Alt + 96" or  "alt gr + }" or "tecla a lado de 'P'"
//     // document.write("El número introducido es "+num+"</br>");

//     document.write(` El contador es ${contador} </br> `);

//     contador++; //contador = contador + 1;
//   }
//   document.write(`</br><h2>
//       Fin del Programa </br>
//       contador ya NO es menor que 5.   
//       </h2>`);

//   document.write(`</br> Último número introducido es ${num}`);

//-----------------------------------------------------------
let contador = 1; // numerico
let dia = ""; // string
let feriado = ""; // Booleana
let fiesta = ""; // Booleana

while (true) {
  dia = prompt("¿Que día es hoy?");
  feriado = prompt("¿Es feriado?");

  document.write(`Ingresaste: ${dia}, y `);
  document.write(`${feriado} es feriado : `);

  if (dia == "Lunes" || dia == "Martes" || dia == "Miercoles") {
    document.write(`Si trabajas,`);
    if (dia == "Lunes" && feriado == "si") {
      document.write(` pero te pagan el doble`);
    }
    if (dia == "Martes" && feriado == "si") {
      document.write(` pero te pagan el triple`);
    }
    if (dia == "Miercoles" && feriado == "no") {
      document.write(` pero te tienen que dar un dia libre`);
    }
  }
  if (dia == "Sabado" || dia == "Domingo") {
    fiesta = prompt("¿Saliste de fiesta?");

    document.write(`No trabajas es FDS,`);
    if ((dia == "Domingo" && feriado == "si") || fiesta == "si") {
      document.write(`y nadie te puede obligar a trabajar`);
    }
  }
  document.write(`</br>`);

  let accion = prompt("¿Deseas continuar?");
  if (accion != "si") {
    break;
  }
}

document.write(`<br>Finalizo el programa`);
