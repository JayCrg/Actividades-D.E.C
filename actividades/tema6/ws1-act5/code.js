window.onload = () => {
setInterval(recogeCorreo, 5000);
}

function recogeCorreo(){
    httpRequest = new XMLHttpRequest();
    httpRequest.open("GET", "correos.xml", true);
    httpRequest.onreadystatechange = trataRespuesta;
    httpRequest.send();
}

function trataRespuesta(){
    if (httpRequest.readyState == XMLHttpRequest.DONE) {
        if (httpRequest.status == 200) {
            let respuesta = httpRequest.responseXML;
            let mensajes = respuesta.getElementsByTagName("correo");
            let lista = document.querySelector("ul");
            lista.innerHTML = "";
            for (let i = mensajes.length-1; i >= 0 ; i--) {
                let mensaje = mensajes[i];
                let nombre = mensaje.getElementsByTagName("nombre")[0].innerHTML;
                let email = mensaje.getElementsByTagName("email")[0].innerHTML;
                let texto = mensaje.getElementsByTagName("texto")[0].innerHTML;
                let li = document.createElement("li");
                li.innerHTML = texto + " (" + email + ") - " + nombre;
                lista.appendChild(li);
            }
        } else {
            alert('Hubo problemas con la petición.');
        }
    }
}