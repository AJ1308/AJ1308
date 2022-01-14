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

async function main() {
  const product_id = localStorage.getItem("product_id");
  const comic = await sendRequest("comics/" + product_id);
  console.log(comic);
}
