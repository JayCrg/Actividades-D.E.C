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

    function setCookie(cname, cvalue, exdays) {
    let d = new Date();
    d.setTime(d.getTime() + (exdays*24*60*60*1000));
    let expires = "expires="+ d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
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
    btrojo = document.getElementById("rojo");
    btazul = document.getElementById("azul");
    
    btrojo.addEventListener("click", fondoRojo);
    btazul.addEventListener("click", fondoAzul);

    let color = getCookie("colorFondo");
    if(color != ""){
      document.body.style.backgroundColor = color;
    }
  }
