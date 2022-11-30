window.onload = () => {
    document.getElementById("boton").addEventListener("click", lanzapeticion);
}

function lanzapeticion(){
    httpRequest = new XMLHttpRequest();
    httpRequest.open("GET", "prueba.xml", true);
    httpRequest.onreadystatechange = trataRespuesta;
    httpRequest.send();
}
function trataRespuesta(){
    if (httpRequest.readyState == XMLHttpRequest.DONE) {
        if (httpRequest.status == 200) {
            // let respuesta = JSON.parse(httpRequest.responseText);
            // document.body.innerHTML = respuesta.nombre; //ESTO PARA JSON
            let respuesta = httpRequest.responseXML;
            document.body.innerHTML += respuesta.getElementsByTagName("nombre")[0].innerHTML; //ESTO ES PARA XML
        } else {
            alert('Hubo problemas con la petición.');
        }
    }
}