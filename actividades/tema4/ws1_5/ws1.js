//Captura el evento onClick del raton para que cada vez se ejecute un alert
//document.addEventListener('click', ()=>{alert("pulsa h1")});

//Captura el movimiento del raton para que se muestre la posicion en la que se encuentra en cada momento

//document.addEventListener('pointermove', (e)=>{console.log(e.clientX, e.clientY)});

/*4. Eventos onMouseMove y onLoad. Debemos ser capaces de dibujar con nuestro ratón
en dos colores diferentes. Para ello primero simularemos que disponemos de un
canvas gráfico: realmente se tratará de una tabla con celdas de pequeño tamaño
(100x100 puede valer). Tu programa creará ese canvas una vez cargada la página
(onLoad). Lo siguiente será detectar el movimiento del ratón sobre las celdas para
pintarlas de un color, el cual será rojo si se mantiene pulsada simultaneamente la
tecla Ctrl y azul si se pulsa Shift. En otro caso no deberá pintarse nada.*/
/*Añade las siguientes funcionalidades al ejercicio anterior:
Borrado de lineas con el ratón (mediante la pulsación del botón que tú decidas)          
Borrar por completo el canvas (con un botón).*/

window.onload=()=>{cambiacolor()}

function cambiacolor() {    
    td = document.getElementsByTagName('td');
    but = document.getElementsByTagName('input');
    for (i=0; i<td.length;i++){
        td[i].addEventListener('mousemove', (e)=>{
            if (e.ctrlKey)
            e.target.style.backgroundColor="blue";
            else if(e.shiftKey)
            e.target.style.backgroundColor="red";
            else if(e.altKey)
            e.target.style.backgroundColor="white";    
        })
    }
    but[0].addEventListener('click', ()=>{
        for (i=0; i<td.length;i++)
        td[i].style.backgroundColor="white";
    })
}


    

