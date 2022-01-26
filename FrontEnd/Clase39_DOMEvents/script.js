/**METODO JS CON HTML */
// function saludar() {
//   const name = prompt("Ingresa tu nombre");
//   alert("HELLO WORLD", name);
// }

const button = document.querySelector("#btn_grettings");
console.log(button);

/**WAY #1 Utilizando una funcion anonima como parametro */
// button.addEventListener("click", saludar);

/**WAY #2 Enviar una funcion pre-definida como parametro */
// button.addEventListener("click", function (saludar) {
//   const name = prompt("Ingresa tu nombre");
//   alert("HELLO WORLD", name);
// });

/**WAY #3 Utilizando un Arrow function */
// const saludar_arrow = () => {
//     const name = prompt("Ingresa tu nombre")
//     alert ("Hello World!", name)
// }

// button.addEventListener("click",saludar_arrow)

// const saludar = () => {
//   alert("Hola mundo!");
// };
// const salut = () => {
//   alert("Salud Monde!");
// };
// //Añadiendo un call to action -> EventListener
// button.addEventListener("click", saludar); // CALLBACK
// button.addEventListener("click", salut);

//Eliminar un call to action "saludar"
// button.removeEventListener("click", saludar);

//============================================================
/* VISUALIZANDO INFORMACIÓN DEL EVENTO*/

const saludar2 = (event) => {
  console.log(event); // Muestra información del evento (positionX, positionY, etc)
  alert("Hello World!");
};

// Añadiendo un call to action -> EventListener
button.addEventListener("click", saludar2); // CALLBACK
