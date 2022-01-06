/**PARA LINKS */
// link.addEventListener("click", (event) => {
//     event.preventDefault();

//     // window.location.href = "./contact.html";
//     //window.location.href = "https://google.com"; // redirección por click
//     //window.location.replace("https://google.com"); // redireccón de ventana
//     // window.open("https://google.com", "_blank"); // abrir una nueva pestaña [_blank,_self]
//     window.open(
//       "https://google.com",
//       "popUpWindow",
//       "height=500,width=400,left=100,top=100,resizable=yes,scrollbars=yes,toolbar=yes,menubar=no,location=no,directories=no,status=yes"
//     ); // Abre una ventana customizable
//   });

/**CAMBIAR NOMBRES DE CLASES */
// const boton = document.querySelector("#boton");

// boton.addEventListener("click", () => {
//   /* # Way 01 -> asignar una clase directamente
// a través de las propiedades del element */

//   // console.log(boton.className);
//   // boton.className = " bg";
//   // console.log(boton.className);

//   /*  #Way 02 -> utilizando setAttribute */

//   console.log(boton.getAttribute("class"));
//   boton.setAttribute("class", "bg");
//   console.log(boton.getAttribute("class"));
// });

/**REEMPLAZAR CLASES */
const caja = document.querySelector("#alone_box");
// caja.className; //box contenedor
// console.log(caja.className);

// // caja.className = "bloque"//bloque
// // console.log(caja.className); //Reemplazar por "bloque"

// caja.setAttribute("class","bloque")//Reemplazar por "bloque"

// caja.classList;
console.log(caja.classList); // [box, contenedor]
console.log(caja.classList[1]);
caja.classList.add("c-white", "bold");//adherir clases
caja.classList.remove("contenedor");//Eliminar clases
