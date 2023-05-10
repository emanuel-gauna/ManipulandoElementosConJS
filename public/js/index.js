window.addEventListener("load", function(){



    const qs = (elemento) =>{
       return document.querySelector(elemento);
    }

    let contenedor = qs("main");
    let    subtitulo = qs("h2");
    let enlace =  qs("a");
    let parrafos = document.querySelectorAll("p");
    let body = qs("body");

    


    let nombre = prompt(" ingresa tu nombre ");

if( nombre == null || nombre == "" ){
    subtitulo.innerHTML +=  `<Mark> invitado </Mark>` ; 
}else{
    subtitulo.innerText +=  nombre ;
    
}
subtitulo.style.textTransform =  "uppercase";
enlace.style.color = "#E51B3E"

let fondoPantalla = confirm("desea colocar un fondo de pantalla");

if(fondoPantalla){
    body.classList.add("fondo");
}
for (let i = 0; i < parrafos.length; i++) {
     if(i % 2 == 0){
        parrafos[i].classList.add("destacadoInpar");
     }else{
        parrafos[i].classList.add("destacadoPar");
     }
}
/* contenedor.classList.remove("container"); */
contenedor.style.display = "block";
})
