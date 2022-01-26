// const page = document.getElementById("header");
// console.log(page); //div#header.box

// const list = document.getElementsByClassName("box");
// console.log(list[1]); //div#content.box

// const opts = document.getElementsByName("genero");
// console.log(opts); //NodeList(2) [input#opt_male, input#opt_female]

// const divs = document.getElementsByTagName("div");
// console.log(divs); //HTMLCollection(3) [div#header.box, div#content.box, div#footer.box, header: div#header.box, content: div#content.box, footer: div#footer.box]

// const page1 = document.querySelector("#header");
// console.log(page1); //div#header.box

// const list2 = document.querySelector(".box + .box")
// console.log(list2);//NodeList(3) [div#header.box, div#content.box, div#footer.box]

// const opt = document.querySelectorAll("[name='genero']")
// console.log(opt);

// /* Busqueda por etiqueta (Metodo tradicional Vs Moderno)*/
// const divs1 = document.getElementsByTagName("div");
// const divs2 = document.querySelectorAll("div");
// console.log(divs)
// console.log(divs2)

// const divc = document.createElement("div")
// console.log(divc);
// const span = document.createElement("span")
// console.log(span);
// const img = document.createElement("img")
// console.log(img);

// /*CREANDO ELEMENTOS*/

// const divisor = document.createElement("div");
// const comentario = document.createComment("Comentario");
// const texto = document.createTextNode("Hola a todos");

// //Modificar nuestro elemento creado
// divisor.id = "header"; // id="header"
// divisor.className = "box"; // class="box"
// divisor.style = "background:lightgreen;";

// console.log(divisor.hasAttributes()); // TRUE -> Tiene elementos
// console.log(divisor.hasAttribute("name")); // FALSE -> No tiene attr name
// console.log(divisor.getAttributeNames()); // ['id', 'class', 'style']
// console.log(divisor.getAttribute("style")); // Valor del atributo style =>(background: lightgreen;)
// divisor.removeAttribute("id"); // Eliminamos el atributo "id"
// divisor.setAttribute("class", "caja"); // cambiamos el valor box -> caja

// const attr_class = divisor.getAttributeNode("class"); // class="caja"
// console.log(attr_class);
// const class_extr = divisor.removeAttributeNode(attr_class); // attributo class extraido
// console.log(class_extr);

// const attr_style = divisor.getAttributeNode("style"); // obtenemos el atributo como Nodo
// console.log(attr_style); // Mostramos el Atributo Style (Nodo)
// attr_style.value = "color:red;"; // Modificamos el valor del attr
// const style_mod = divisor.setAttributeNode(attr_style); // reemplazamos el attr
// console.log(style_mod); // atributo style actualizado ->  <div style="color:red;"></div>
// console.log(divisor);

//=============================================
/*  MODIFICANDO EL HTML de un ELEMENTO*/

// // const divisor = document.getElementById("header");
// const divisor = document.querySelector("#header");

// console.log(divisor.nodeName); // DIV (Only read)

// divisor.textContent = "Sub titulo <strong>01</strong>"; // No interpreta como html
// console.log(divisor.textContent); // "Titulo principal"

// divisor.innerHTML = "Sub titulo <strong>01</strong>"; // Modifica el html interno
// console.log(divisor.innerHTML); // <h1>Titulo principal</h1>

// divisor.outerHTML = "<h1> Modificando el h1 </h1>"; // Modifica todo el html incluyendo al contenedor
// console.log(divisor.outerHTML); // <div id="header"> <h1>Titu...</div>
// const img = document.createElement("img");
// img.src = "https://picsum.photos/536/354";
// img.alt = "Logo Javascript";
// document.body.appendChild(img);

// // CREANDO UN NODO <div> (Contenedor)
// const div = document.createElement("div");
// div.id = "div_insertado";
// div.textContent = "Texto insertado desde JS";
// // CREANDO UN NODO <h1>
// const h1 = document.createElement("h1");
// h1.id = "title";
// h1.textContent = "Titulo H1";
// // Inserta el h1 (hijo) dentro del div (contenedor)

// const container = document.querySelector("#container"); // busqueda
// container.appendChild(div);
// // Inserta un elemento en una posición
// // (antes del elemento -> beforebegin)
// // (antes del texto -> afterbegin)
// // (despues del texto -> beforeend)
// // (despues del elemento -> beforeend)
// div.insertAdjacentElement("beforebegin", h1);

// console.log(div);

/**EJERCICIO 2 */
const lista = document.querySelector("ul"); // 1 elemento
const items = document.querySelectorAll("ul > li"); // todos los elementos
//const items = document.getElementsByTagName("li");

console.log(items[0].isConnected);

console.log("Eliminando el item 1");
items[0].remove();
console.log(items[0].isConnected);

//lista.appendChild(items[0]); // insertarlo al final
lista.insertAdjacentElement("afterbegin", items[0]); // inserta al inicio
