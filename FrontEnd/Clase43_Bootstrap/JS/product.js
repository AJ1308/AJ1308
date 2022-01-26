import CLIENT from "./modules/client.js";
import STORAGE from "./modules/storage.js";
import DOM from "./modules/dom.js";
import { comicRender } from "./modules/renders.js";

// Crear la funcion main para consumir el recurso...
async function main() {
  const product_id = STORAGE.get("product_id");
  const data = await CLIENT.sendRequest("comics/" + product_id);
  //Transformar  la data en informacion relevante
  const comic = comicRender(data);
  //Actualizar informacion del HTML
  const card = DOM.find("#card");
  DOM.find("#comic_image").src = comic.image;
  DOM.find("#title", card).textContent = comic.title; //Búsqueda dentro del card
  DOM.find("#price", card).textContent = "$" + comic.price.sale;
  DOM.find("#format", card).textContent = comic.format;
  DOM.find("#description", card).innerHTML = comic.description;
  DOM.find("#stock", card).innerHTML = comic.stock;

  comic.creators.forEach(({name,role}) => {
    const li = DOM.create("li");
    li.textContent = `${name}-${role}`;
    DOM.find("#creators", card).appendChild(li);
  });

  DOM.find("#btn_add").addEventListener('click', () => {
    const {id,title,price:{sale}} = comic;
    STORAGE.setArray('cart',{id,title,sale});
    window.location.href = "../index.html";
  });
}

main();
