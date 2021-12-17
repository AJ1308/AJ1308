let numero = Math.round(Math.random()* 6);
let obj_dado = document.getElementById("salida");
let obj_mensaje = document.getElementById("mensaje");


obj_dado.innerHTML = "<img src='images/rolling.gif' />";
function validarNumero(copy_numero, copy_obj_dato) {
    copy_obj_dato.innerHTML = `<img src='images/${copy_numero}.png' />`;
  }
  
  obj_dado.innerHTML = "<img src='images/rolling.gif' />";
  
  setTimeout(validarNumero, 2000, numero, obj_dado);
  
  obj_mensaje.innerHTML = "El numero es : " + numero;
