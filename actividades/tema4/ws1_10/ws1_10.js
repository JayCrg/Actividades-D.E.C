/*9. Crea una página web que haciendo uso de eos permita arrastrar una imagen
    haciendo uso del ratón (al pulsar sobre la imagen la voy arrastrando hasta que suelto
    el botón).
 10. Mejora el ejercicio anterior para que se pueda hacer en una página con un número
    cualquiera de imágenes.*/

window.onload=()=>{arrastrar()}

function moveAt(pageX, pageY) {
    ball.style.left = pageX - ball.offsetWidth / 2 + 'px';
    ball.style.top = pageY - ball.offsetHeight / 2 + 'px';
}

function arrastrar(){
img = document.getElementsByTagName('img')
img.addEventElement('mousedown',(e)=>{

shiftX = e.clientX - ball.getBoundingClientRect().left;
shiftY = e.clientY - ball.getBoundingClientRect().top;
img.style.position = 'absolute';
img.style.zIndex = 1000;
moveAt(e.pageX, e.pageY);

// mueve la pelota a las coordenadas (pageX, pageY)
// tomando la posición inicial en cuenta
function moveAt(pageX, pageY) {
  img.style.left = pageX - shiftX + 'px';
  img.style.top = pageY - shiftY + 'px';
}

function onMouseMove(e) {
    moveAt(e.pageX, e.pageY);
  }
})
document.addEventListener('mousemove', onMouseMove);

ball.onmouseup = function() {
    document.removeEventListener('mousemove', onMouseMove);
    ball.onmouseup = null;
  };    


  img.ondragstart = function() {
    return false;
}

}