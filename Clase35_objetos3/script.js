/**EJERCICIO 1 */
let nums = [1, 220, 80, 73, 72, 12, 241, 90, 5555, 84, 101, 21]; //Se declara la variable
function mayor(numeros) {
  //Se coloca la funcion utilizada para calcular el numero mayor
  return Math.max.apply(null, nums); //Se retorna la funcion mediante math y apply, en donde se indicara
  //que no hay otro objeto que llame a la funcion apply
}
console.log(nums);
console.log("El numero mayor es:", mayor(nums));

/**SOLUCION */
// FUNCIONES
function searchBigNumber(_array) {
  //Inicializar variables
  let numero_mayor = -Infinity;
  //Proceso
  for (let i = 0; i < _array.length; i++) {
    // 1022 > -infinito?
    if (_array[i] > numero_mayor) {
      numero_mayor = _array[i];
    }
  }
  //Return
  return numero_mayor;
}

// MAIN
//           0   1    2     3    4   5 ...                           12
let array = [100, 405, 1022, 15, 23, 233, 5, 482, 45, 854, 499, 12];

console.log("El numero mayor es :", searchBigNumber(array));

/**EJERCICIO 2 */
let str = "Para cada auto, necesitamos un mecanico";
function longWord(str) {
  words = str.split(" "); //Se separan las palabras para luego poder ser contabilizadas, letra por letra
  let wordLong = ""; //Utilizada para almecenar la palabra mas larga
  for (let word of words) {
    if (word.length > wordLong.length) {
      //Se comparan las longitudes de las iteraciones y por lo tanto
      //se guardara en la funcion wordLong
      wordLong = word;
    }
  }
  return wordLong; //Retorna lo que hay en la funcion
}
console.log(str);
console.log("La palabra mas larga es:", longWord(str));
/**SOLUCION */
// Funciones

function getLargestWord(_texto) {
  let words = _texto.split(" "); // arreglo de palabras
  let max_length = 0; // tamaño maximo
  let max_word = ""; // palabra larga

  for (let i = 0; i < words.length; i++) {
    const palabra = words[i];
    if (max_length < palabra.length) {
      max_word = palabra;
      max_length = palabra.length;
    }
  }
  return max_word;
}

function getShortestWord(_texto) {
  let words = _texto.split(" "); // arreglo de palabras
  let min_length = Infinity; // tamaño minimo
  let min_word = ""; // palabra corta

  for (let i = 0; i < words.length; i++) {
    const palabra = words[i];
    // Infinity > 8 , 8 > 3 , 3 > 3 , 3 > 7
    if (min_length > palabra.length) {
      min_word = palabra;
      min_length = palabra.length;
    }
  }
  return min_word;
}

// Main

let texto =
  "Tratemos con una palabra grande para ver su longitud otorrinolaringología";
// obtener la palabra mas grande de un texto
let largest_word = getLargestWord(texto);
console.log(largest_word);
// mostrar el tamaño de esa palabra
console.log(largest_word.length);

let shortest_word = getShortestWord(texto);
console.log(shortest_word);
// mostrar el tamaño de esa palabra
console.log(shortest_word.length);

/**EJERCICIO 3 */
let frase1 = "anita lava la tina";
let frase2 = "amor a roma";
let frase3 = "ligar es ser ágil";

function palindromo(frase1) {
  size = frase1.length;
  if (size === 0) {
    return false;
  }
  for (i = 0; i < size / 2; i++) {
    if (frase1[i] === frase1[size - 1 - i]) {
      return false;
    }
  }
  return true;
}
console.log(palindromo(frase1));
/**SOLUCION */

// Funciones

function isPalindromo(_frase) {
  let frase_sin_espacios = _frase.replaceAll(" ", "");

  let array_chars = frase_sin_espacios.split("");
  //array_chars = [...frase_sin_espacios];
  //array_chars = Array.from(frase_sin_espacios);

  let reverse_array = array_chars.reverse();

  let frase_invertida = reverse_array.join(""); // Juntar los caracteres en un String

  //   if ( frase_sin_espacios == frase_invertida ) {
  //     return true;
  //   } else {
  //     return false;
  //   }
  return frase_sin_espacios == frase_invertida; // TRUE or FALSE
}
// Main

// arreglo de carecteres
let frase = "anita lava la tina";

// return TRUE or FALSE si es palindromo
let resultado = isPalindromo(frase);

console.log(
  `La frase ${frase}`,
  resultado ? "ES" : "NO ES", // if(resultado== true) "ES" else "No es"
  "un Palindromo"
);

