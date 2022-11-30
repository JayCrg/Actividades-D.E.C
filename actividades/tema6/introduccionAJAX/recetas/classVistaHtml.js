class VistaGeneral{
    constructor(){
        this.header = document.querySelector("header");
        this.main = document.querySelector("main");
        this.footer = document.querySelector("footer");
    }
    borrarMain(){
        this.main.innerHTML = "";
}
}








class VistaRecetaHtml {
    constructor() {
        this.vista = document.querySelector("main");
    }
    muestraRecetas(receta){
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
        for (let [key, value] of ingredientesMap) {
            let li = document.createElement('li')
            li.innerHTML = `${key} - ${value}`
            ingredientesLista.appendChild(li)
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
}
export default class { VistaRecetaHtml };