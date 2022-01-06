const button = document.querySelector("#add");
console.log(button);
const button1 = document.querySelector("#del");
console.log(button1);

function addrow() {
  let data = document.querySelector("#data").insertRow(0);
  let col1 = data.insertCell(0);
  col1.textContent = "New Cell 1";
  let col2 = data.insertCell(1);
  col2.textContent = "New Cell 2";
}

function delrow() {
  let data1 = document.querySelector("#data");
  data1.deleteRow(0);
}

button.addEventListener("click", addrow);
button1.addEventListener("click", delrow);






















// /**EJERCICIO 1 */
// const button = document.querySelector("#boton")

// function change () {

//   const h1 = document.querySelector("#saludo");

//   // h1.style.color = "red";

//   //Esta funcion hace que al dar click sean varios colores
//   const colores = ["red", "blue", "yellow", "green", "lightblue"]
//   const varios = parseInt(Math.random() * colores.length)
//   h1.style.color = colores[varios];
// }
// button.addEventListener("click", change);
