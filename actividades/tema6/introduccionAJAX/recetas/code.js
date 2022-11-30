// import VistaRecetaHtml from "./classVistaHtml.js";
class VistaRecetaHtml {
    constructor() {
        this.vista = document.querySelector("main");
    }
    muestraRecetas(receta) {
        let div = document.createElement("div");
        div.setAttribute("class", "receta");
        let nombre = document.createElement('h2')
        let foto = document.createElement('img')
        let ingredientesLista = document.createElement('ul')
        let ingredientesMap = new Map();
        for (let j = 1; j < 21; j++) {
            if (receta[`strIngredient${j}`] != null || receta[`strIngredient${j}`] != "" || receta[`strIngredient${j}`] != " ")
                ingredientesMap.set(receta[`strIngredient${j}`], receta[`strMeasure${j}`])
        }
        console.log(ingredientesMap)
        for (let [key, value] of ingredientesMap) {
            if (key != null && key != "" && key != " ") {
                let li = document.createElement('li')
                li.innerHTML = `${key} - ${value}`
                ingredientesLista.appendChild(li)
            }
        }
        let textoReceta = document.createElement('p')
        nombre.innerHTML = receta.strMeal
        foto.src = receta.strMealThumb
        textoReceta.innerHTML = receta.strInstructions
        div.appendChild(nombre)
        div.appendChild(foto)
        div.appendChild(ingredientesLista)
        div.appendChild(textoReceta)
        this.vista.appendChild(div);
    }
    limpiar() {
        this.vista.innerHTML = "";
    }
    sinCoincidencias(){
        let div = document.createElement("div");
        div.setAttribute("class", "receta");
        let nombre = document.createElement('h2')
        nombre.innerHTML = "No hay coincidencias"
        div.appendChild(nombre)
        this.vista.appendChild(div);
    }
}



var i;
var httpRequest = new XMLHttpRequest();
window.onload = () => {
       document.querySelector("button").addEventListener("click", (e) => {
           recogeCorreo();
        });
    }
    
    function recogeCorreo() {
        httpRequest.open("GET", `https://www.themealdb.com/api/json/v1/1/search.php?s=${document.querySelector('input').value}`, true);
        httpRequest.onreadystatechange = tomaRecetas;
        httpRequest.send();
    }
    
    function tomaRecetas() {
        var receta = new VistaRecetaHtml();
        receta.limpiar();
        if (httpRequest.readyState == 4) {
            var valores;
            if (httpRequest.status == 200) {
                valores = JSON.parse(httpRequest.responseText);
                if (valores.meals != null) {
                    i = 0;
                    receta.muestraRecetas(valores.meals[i]);
                    window.addEventListener('scroll', () => {
                        if (window.scrollY + window.innerHeight >= 
                            document.documentElement.scrollHeight) {
                            i++;
                            console.log(i)
                            receta.muestraRecetas(valores.meals[i]);
                        }
                    });
                    // console.log(valores);
                    // for (let i = 0; i < valores.meals.length; i++) {
                    //     receta.muestraRecetas(valores.meals[i]);
                    // }
                }
                else{
                    receta.sinCoincidencias();
                }
        }
        else {
            p = document.createElement("p");
            p.innerHTML = "Error de conectividad";
            document.querySelector("body").appendChild(p);
            p.style.color = "red";
        }
    }
}
