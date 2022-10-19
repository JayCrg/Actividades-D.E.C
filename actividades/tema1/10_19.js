document.write('<h1>PRACTICA BUCLE FOR</h1>')

for(let i=1; i<=6; i++){
    document.write(`<h${i}>Cabecera h${i}</h${i}><br>`)
}

//------------

let col = prompt('introduce numero de columnas'), fila =prompt('introduce numero de filas'),
ancho = prompt('introduce ancho'), color;


document.write("<table  border = \"0\" cellspacing = \" 2 \" bgcolor = \" black \" width = \" 200 \">");
document.write("<tr bgcolor = \" white \" height = \" 50 \" >>");

for(let i=0; i<parseInt(col); i++){
    if (i%2 != 1)
        color = "black";
    else
        color = "white";
    document.write(`<td widht=\"${ancho}\" bgcolor=\"${color}\">&nbsp;</td>`);
}
document.write("</tr>");
document.write("</table>");



document.write('-------------------------------------------------------------');

let j=0;
while(j<6){
    j++;
    document.write(`<h${j}>Cabecera h${j}</h${j}><br>`);
}

//----------------


document.write("<table  border = \"0\" cellspacing = \" 2 \" bgcolor = \" black \" width = \" 200 \">");
document.write("<tr bgcolor = \" white \" height = \" 50 \" >>");

j=0
while(j<col){
    if (j%2 != 1)
        color = "black";
    else ggg
        color = "white";
    j++;    
    document.write(`<td widht=\"${ancho}\" bgcolor=\"${color}\">&nbsp;</td>`);
}
document.write("</tr>");
document.write("</table>");

document.write('-------------------------------------------------------------');

/*let num=prompt('introduce un numero del 1 al 100 para adivinar'), guess;
while (num != guess){
    guess=prompt("Pruebe a adivinar")
    if (guess<num)
    alert('menor')
    else if (guess>num)
    alert('mayor')
    else
    alert('enhorabuena')
}

//-----------------
let num2=prompt('introduce un numero del 1 al 100 para adivinar'), guess2;
do{
    guess2=prompt("Pruebe a adivinar")
    if (guess2<num2)
    alert('menor')
    else if (guess2>num2)
    alert('mayor')
    else
    alert('enhorabuena')
}
    while (num2 != guess2)*/


document.write('-------------------------------------------------------------');



document.write("<table  border = \"0\" cellspacing = \" 2 \" bgcolor = \" black \" width = \" 200 \">");
for(i=0; i<parseInt(col); i++){
    document.write(`<tr bgcolor = \" white\" height = \" ${ancho} \">`);
    for(j=0; j<parseInt(fila); j++)
    {
        if ((i+j)%2 != 1 )
            color = "white";
        else
            color = "black";
    document.write(`<td widht=\"${ancho}\" bgcolor=\"${color}\"> &nbsp; </td>`);
    }
    document.write("</tr>");
}
document.write('</table>');
