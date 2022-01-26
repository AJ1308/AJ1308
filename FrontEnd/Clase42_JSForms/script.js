function highlightInput(elm){
    console.log(`dando foco ${elm.id}`);
    elm.style.background = "lightblue"
}

function clearInput(elm) {
    console.log(`perdio foco ${elm.id}`);
    elm.style.background = "white";
}

function showOption(event, elm){
    //Muestra el valor seleccionado desde el evento
    console.log(event.target.value);
    // console.log(elm.value);
    //Obtener el indice de la opcion seleccionada
    // console.log(event.target.selectedIndex);
    console.log(elm.selectedIndex);
}

function validateForm(event, elem) {
    event.preventDefault();
    console.log(elem);
    console.log(event);
    alert("Se valido correctamente")
    // Validar los campos del formulario
    // Envia el formulario
    elem.submit()
}