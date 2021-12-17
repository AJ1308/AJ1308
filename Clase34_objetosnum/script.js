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
console.log(frase2)
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
