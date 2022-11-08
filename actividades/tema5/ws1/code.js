//contar numero de enlaces en la pagina
window.onload = ()=>{
let enlaces = document.getElementsByTagName("a");
let p = document.createElement("p");
document.body.appendChild(p);
p.innerHTML = "Hay " + enlaces.length + " enlaces en la página";
let p2 = document.createElement("p");
document.body.appendChild(p2);
p2.innerHTML = "El penultimo enlace apunta a: " + enlaces[enlaces.length - 2].href;

let p3 = document.createElement("p");
document.body.appendChild(p3);
let contador = 0;
for (let i = 0; i < enlaces.length; i++) {
if (enlaces[i].href == "https://www.google.com/") {
contador++;
}
}
p3.innerHTML = "Hay " + contador + " enlaces que apuntan a google";

let p4 = document.createElement("p");
document.body.appendChild(p4);
parrafos = document.getElementsByTagName("p");
enlaces3parrafo = parrafos[2].getElementsByTagName('a');
p4.innerHTML = "El tercer párrafo contiene " + enlaces3parrafo.length + " enlaces";

//añadir elementos a lista
let lista = document.createElement("ul");
document.body.appendChild(lista);
let boton = document.getElementById("añadir");
boton.addEventListener("click", () => {
let li = document.createElement('li');
lista.appendChild(li);
li.innerHTML = "Elemento " + (lista.childElementCount)});

//crear formulario con inputs de fichiero indefinidos
let boton2 = document.createElement("input");
document.body.appendChild(boton2);
boton2.type = "button";
boton2.value = "Añadir fichero";
let form = document.createElement("form");
document.body.appendChild(form);
let submit = document.createElement("submti");
document.body.appendChild(submit);
boton2.addEventListener("click", () => {
let input = document.createElement("input");
document.createElement("input");
form.appendChild(input);
input.type = "file";
})

//carrusel de imagenes
arrayfotos = ['https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg','https://images.pexels.com/photos/209807/pexels-photo-209807.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500', 'https://educacion30.b-cdn.net/wp-content/uploads/2019/02/girasoles-978x652.jpg'];
let imagenes = document.createElement("img");
let boton3 = document.createElement("input");
boton3.type = "button";
boton3.value = "Siguiente";
document.body.appendChild(boton3);
let contador2 = 0;
document.body.appendChild(imagenes);
boton3.addEventListener("click", () => {
if (contador2 >= arrayfotos.length) 
        contador2 = 0;
    imagenes.src = arrayfotos[contador2];
    contador2++;

});
}