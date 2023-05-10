
const qs = (selector) =>{
    return document.querySelector(selector);
}
const qsAll = (selectores) =>{
   return document.querySelectorAll(selectores);
}

window.addEventListener("load", function (e) {
    

    const $body = qs("body");
    const  $h1 = qs("h1");

    let modoOscuro = prompt("¿desea modo oscuro?");

if(modoOscuro.valueOf(String) == "si" || modoOscuro.valueOf(String) == "yes"  ){
    $body.style.backgroundColor = "#7f7f7f";
    $body.classList.add("fondoMoviesList");
}
$h1.innerText = "LISTADO DE PELICULAS"; 
$h1.style.color = "white";
$h1.style.backgroundColor = "teal";
$h1.style.padding = "20px";

















})