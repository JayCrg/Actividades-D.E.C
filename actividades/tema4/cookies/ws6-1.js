function checkCookie(name) {
    let cookie = getCookie(name);
    if (cookie != "") {
      alert("Cookie " + name + " = " + cookie);
    } else {
      alert("Cookie " + name + " no existe");
    }
  }

//funcion getCookie
function getCookie(cname) {
    let name = cname + "=";
    let decodedCookie = decodeURIComponent(document.cookie);
    let ca = decodedCookie.split(';');
    for(let i = 0; i <ca.length; i++) {
      let c = ca[i];
      while (c.charAt(0) == ' ') {
        c = c.substring(1);
      }
      if (c.indexOf(name) == 0) {
        return c.substring(name.length, c.length);
      }
    }
    return "";
  }
//funcion setCookie
    function setCookie(cname, cvalue, exdays) {
    let d = new Date();
    d.setTime(d.getTime() + (exdays*24*60*60*1000));
    let expires = "expires="+ d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
  }

//funcion deleteCookie
function deleteCookie(cname) {
    document.cookie = cname + '=; expires=Thu, 01 Jan 1970 00:00:01 GMT;';
  }


function fondoRojo(){
    setCookie("colorFondo", "red", 15);
    document.body.style.backgroundColor = "red";
  }
function fondoAzul(){
    setCookie("colorFondo", "blue", 15);
    document.body.style.backgroundColor = "blue";
  }

  window.onload = ()=>{
//preguntar por el nombre de usuario
nombre = document.getElementById("nombre");
enviar = document.getElementById("enviar");
aumentar = document.getElementById("masgrande");
decrecer = document.getElementById("maspqueña");
    if (getCookie("nombre") != "")
        nombre.setAttribute("value", getCookie("nombre"));
    if (getCookie("tamano") != "")
        document.body.style.fontSize = getCookie("tamano") + "px";


    enviar.addEventListener("click", ()=>{
    setCookie("nombre", nombre.value, 60);});

        btrojo = document.getElementById("rojo");
        btazul = document.getElementById("azul");
        
        btrojo.addEventListener("click", fondoRojo);
        btazul.addEventListener("click", fondoAzul);
    
        let color = getCookie("colorFondo");
        if(color != ""){
          document.body.style.backgroundColor = color;
        }

        aumentar.addEventListener("click", ()=>{
          let tam = parseInt(document.body.style.fontSize);
          tam += 5;
          document.body.style.fontSize = tam + "px";
          setCookie("tamano", tam, 60);
        });
        decrecer.addEventListener("click", ()=>{
          let tam = parseInt(document.body.style.fontSize);
          tam -= 5;
          document.body.style.fontSize = tam + "px";
          setCookie("tamano", tam, 60);
        });
   
  }