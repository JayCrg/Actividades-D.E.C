
window.onload = () => {
    let minimalista = document.getElementById("minimalista");
    let normal = document.getElementById("normal");

    minimalista.addEventListener("click", () => {
        let html = document.querySelector("html");
        html.style.backgroundColor = "white";

        let body = document.querySelector("body");
        body.removeAttribute("style");

        let nav = document.querySelector("nav");
        nav.removeAttribute("style");

        let h1 = document.querySelector("h1");
        h1.removeAttribute("style");

        let marco = document.getElementById("marco");
        marco.removeAttribute("style");

        let parrafoNormal = document.getElementById("soloNormal");
        parrafoNormal.innerHTML = "";
    })

    normal.addEventListener("click", () =>{
        let html = document.querySelector("html");
        html.style.backgroundColor = "#beige"

        let body = document.querySelector("body");
        body.style.paddingLeft = "10px";


        let nav = document.querySelector("nav");
        nav.style.backgroundColor = "lightblue";
        nav.style.color = "blue";
        nav.style.fontWeight = "bold";
        nav.style.marginRight = "50px";
        nav.style.borderColor = "blue";
        nav.style.borderTopWidth = "1px";
        nav.style.borderLeftWidth = "1px";
        nav.style.borderStyle = "solid";
        nav.style.padding = "5px";

        let h1 = document.querySelector("h1");
        h1.style.fontFamily = "Arial, Helvetica, sans-serif";
        h1.style.color = "blue";

        let parrafoNormal = document.getElementById("aparece");
        parrafoNormal.innerHTML = "Este párrafo debe ser solo visible en el tema normal";
        parrafoNormal.style.fontWeight = "bolder";

        let marco = document.getElementById("marco");
        marco.style.backgroundColor = "yellow";
        marco.style.borderWidth = "1px";
        marco.style.borderColor = "black";
        marco.style.borderStyle = "solid";
        marco.style.padding = '5px';
        marco.style.paddingRight = "70%";

    })
    
}