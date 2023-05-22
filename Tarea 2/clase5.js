const botonCalcular = document.querySelector("#botoncalcular");

botonCalcular.onclick = function () {
    const $primerNombre = document.querySelector("#primernombre").value;
    const $segundoNombre = document.querySelector("#segundonombre").value;
    const $apellido = document.querySelector("#apellido").value;
    const $edad = document.querySelector("#edad").value;
    const resultado = document.querySelector("#resultado");
    const textoSaludo = document.querySelector("h1");

    if ($primerNombre !== "" && $segundoNombre !== "" && $edad !== "") {
        textoSaludo.innerText = `Hola ${$primerNombre}`;
        resultado.innerText = `${$primerNombre} ${$segundoNombre} ${$apellido} ${$edad}`;
    } else if ($primerNombre == "") {
        textoSaludo.innerText = "No ingresaste tu primer nombre";
    } else if ($segundoNombre == "") {
        textoSaludo.innerText = "No ingresaste tu segundo nombre";
    } else if ($apellido == "") {
        textoSaludo.innerText = "No ingresaste tu apellido";
    } else if ($edad == 0) {
        textoSaludo.innerText = "No ingresaste tu edad";
    }
    return false;
}