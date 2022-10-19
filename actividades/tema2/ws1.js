/*año actual
mes actual
dia actual
hoar actual
minutos
segundos
*/

fecha = new Date;
document.write(fecha.getFullYear(), '<br>')
document.write(fecha.getMonth(), '<br>')
document.write(fecha.getDate(), '<br>')
document.write(fecha.getMinutes(), '<br>')
document.write(fecha.getSeconds(), '<br>')

/*fehahoy
fechahoy +85 dias
fechahoy +187
+ 2 años 
restar 24 horas fecha 187
fecha85 - fecha187*/

fechahoy = new Date;
fecha85 = new Date; fecha85.setDate(fechahoy.getDate() + 85);
fecha187 = new Date; fecha187.setDate(fechahoy.getDate() - 187);

fecha85.setYear(fechahoy.getFullYear() + 2);
fecha187.getHours(fechahoy.getHours() - 2);
console.log(fecha85)
console.log(fecha187)

fecharesto = new Date; fecharesto = fecha85 - fecha187;
console.log(fecharesto)

//contador 60 seg
var veces = 5
function contador(){
    if (veces==0)
    console.log('final')
    else {
        document.write(veces, '<br>');
        veces -= 1;
        setTimeout(contador, 1000);
    }
}
//contador()


function reloj(){
    var hora = new Date;
    document.write(hora.getSeconds(), '<br>')
    setTimeout(reloj, 1000);
}
reloj();



