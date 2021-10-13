function validarApenasNumeros(event) {
    let regex = /[^0-9]/g;
    event.value = event.value.replaceAll(regex, "");
    console.log(event.value);
}
