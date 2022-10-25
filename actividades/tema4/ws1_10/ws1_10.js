/*9. Crea una página web que haciendo uso de eos permita arrastrar una imagen
    haciendo uso del ratón (al pulsar sobre la imagen la voy arrastrando hasta que suelto
    el botón).
 10. Mejora el ejercicio anterior para que se pueda hacer en una página con un número
    cualquiera de imágenes.*/

window.onload=()=>{arrastrar()}

function mo
function arrastrar(){
img = document.getElementsByTagName('img')

img.addEventElement('mousedown',(e)=>{
    e.target.style.position = 'absolute';
    e.target.style.left = e.pageX - e.target.offsetWidth / 2 + 'px';
    e.target.style.top = e.pageY - e.target.offsetHeight / 2 + 'px';

    document.addEventListener('mousemove', (e)=>{
        moveAt(e.pageX, e.pageY);
      }
    )
})
}