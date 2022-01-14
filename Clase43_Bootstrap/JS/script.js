const APIKEY = "dbd90aa187aab034afbf3d1c5d2d564d"; //Public Key
const HASH = "f1d3da48ce07c566918c63a65bf17f27"; //Mb5 Hash
const TS = "1";
const URL = "http://gateway.marvel.com/v1/public/";

async function sendRequest(path) {
  //Haciendo la peticion
  const response = await fetch(
    URL + path + "?ts=" + TS + "&apikey=" + APIKEY + "&hash=" + HASH
  );
  console.log(response);
  //Validando la respuesta
  if (!response.ok) throw Error(response.statusText);
  //Extrayendo la informacion
  const json = await response.json();
  return json.data.results;
}

// Crear la funcion main para consumir el recurso...
async function main() {
  const comics = await sendRequest("comics");
  console.log(comics);
  //PROCESAR INFORMACION

  const container = document.getElementById("card_container");

  comics.forEach((comic) => {
    const template = document.querySelector("#card_template");
    const clone = template.cloneNode(true);
    clone.removeAttribute("style"); // removiendo el diplay:none
    //IMAGEN
    const comic_image = clone.querySelector(".comic_img");
    comic_image.setAttribute(
      "src",
      `${comic.thumbnail.path}.${comic.thumbnail.extension}`
    );
    //TITULO
    const comic_title = clone.querySelector(".comic_name").textContent = comic.title;

    container.appendChild(clone);
  });
}

main();
// fetch(
//   "http://gateway.marvel.com/v1/public/comics?ts=1&apikey=dbd90aa187aab034afbf3d1c5d2d564d&hash=f1d3da48ce07c566918c63a65bf17f27"
// ).then((response) => console.log(response));
