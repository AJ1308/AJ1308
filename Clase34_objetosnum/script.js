//Literales
const n1 = 4;

const n2 = 15.8;

//Objetos
const n3 = new Number(6);
const n4 = new Number(12.8);

//¿Numero finito?
console.log(Number.isFinite(42)); //True
console.log(Number.isFinite(Infinity)); //False
//¿Numero entero?
console.log(Number.isInteger(5)); //True
console.log(Number.isInteger(4.6)); //False, is decimal num
//¿Numero seguro?
console.log(Number.isSafeInteger(1e15)); //True
console.log(Number.isSafeInteger(1e16)); //False
//¿No es un numero?
console.log(isNaN(NaN)); //True
console.log(isNaN(5)); //False

console.log("========================================================");

/**REPRESENTACIÓN NÚMERICA */
let number = 1.5;
console.log(number.toExponential(2)); //1.50e+0
console.log(number.toFixed(2)); //1.50
console.log(number.toPrecision(1)); //2

console.log("========================================================");

/**DECLARACION STRINGS */
//Literales
const text1 = "¡Hola a todos!";
const text2 = "¡Otro mensaje de texto!";
console.log(
  `El texto"${text2}" tiene ${text2.length} caracteres`,
  `El texto"${text1}" tiene ${text1.length} caracteres`
);

//Objeto
const texto1 = new String("¡Hola a todos!");
const texto2 = new String("¿Como estan?");
console.log(`El texto"${texto2}" tiene ${texto2.length} caracteres`);

console.log("===================METODOS DE POSICION====================");

/**METODOS DE POSICION */
let frase = "Manz es un heróe";
console.log(frase.charAt(0)); //`M`
//Los espacios se cuentan como carácter
console.log(frase[5] + frase[6]); //`e`
console.log(frase.length); //`e`
frase = frase.concat(", siempre");
frase = frase + " lo";
frase = `${frase} ha `;
frase += "sido...";
frase = new String(frase);
console.log(frase);
let pos = frase.indexOf(`sido`); //Desde comienza la palabra: 32
console.log(pos); //Indica -1 cuando no existe
console.log(frase.indexOf("s", 7)); //0
console.log(frase.lastIndexOf("o", 30));
console.log(frase.lastIndexOf("es"));
//mostrar(let definida.lastIndexOf("letra o palabra", desde que numero contará))

console.log("=============METODOS DE BUSQUEDA============================");
/**METODOS DE BUSQUEDA */
let frase2 = "Si no hacemos esto, no quedara nada que salvar";
frase2 = new String(frase2);
console.log(frase2);
let pos2 = frase2.startsWith("Si"); //True
console.log(pos2);
console.log(frase2.search("^Si"));
console.log(frase2.endsWith("salvar")); //True
console.log(frase2.search("salvar$"));
console.log(frase2.includes("hola")); //False

console.log("Con palabra↓");
let nam = "Manz";
console.log(nam.startsWith("M")); //True
console.log(nam.startsWith("a", 1)); //True
console.log(nam.endsWith("n", 3)); //True
console.log(nam.includes("nz")); //True

/**METODOS PARA TRANSFORMAR */
console.log("============METODOS PARA TRANSFORMAR=================");
let text = "   Hello  ";
text.repeat(5); //NaNaNaNaNa
text.toLowerCase(); //manz; en CSS es text-transform
text.toUpperCase(); //MANZ
console.log(text.trim()); //Hola

let phrase = "anita lava la tina"; //Literal
phrase = new String("anita lava la tina"); //Objetto (String)
console.log(phrase.replace("la", "--"));
console.log(phrase.replaceAll("a", "i"));

let phrase2 = new String(
  "A mamá, Roma le aviva el amor a papá, y a papá, Roma le aviva el amor a mamá"
);
console.log(phrase2);
console.log(phrase2.substring(7)); //ese anula
console.log(phrase2.substring(11, 16));
//                     (Colocar un intervalo)

let direccion = "Urb los patos 305";
let no_casa = direccion.substr(14, 3);
console.log("No. de casa", Number.parseInt(no_casa));

/**CONVERTIR STRING A ARREGLO */
console.log(phrase2.split(","));// separación por comas
console.log(phrase2.split(" "));// separación por espacios
console.log(phrase2.split(""));// muestra caracter por caracter

/**RELLENAR CARACTERES TANTO DE DERECHA COMO IZQUIERDA */
let palabra = new String("ocaso");
console.log(palabra.padStart(10, "_"));
console.log(palabra.padEnd(15, "*"));

/**RECORRIDO DE ARREGLOS */
let array = [1, 2, 3, 4, 5, 6, 7]; //Literal array
// let array2 = new Array (1,2,3,4) //Objeto array
//For(iterador; condicion; incremento )
for (let i = array.length - 1; i >= 0; i--) {
  //Recorrer desde i = 0 hasta 7 de uno en uno ↑
  console.log(`pos[i = ${i}] : `, array[i]);
}


