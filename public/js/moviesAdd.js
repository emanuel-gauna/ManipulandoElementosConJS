const qs = (selector) =>{
    return document.querySelector(selector)
};

window.addEventListener("load", () => {

    let $h1 = qs("h1"),
        $seccion = qs("section"),
        $articulo = qs("article")

        $h1.innerText = "AGREGAR PELICULA";
        $h1.classList.add("titulo");
        $articulo.classList.add("fondoTransparente");
        $seccion.classList.add("fondoCRUD");








})