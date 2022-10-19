//WORKSHEET 1 

//actividad 3
let a = 1, b = 2;
console.log(`el valor de la primera variable es: ${a}`)
console.log(`el valor de la segunda variable es: ${b}`)

console.log(`el valor de mi variable es: ${a + b}`)


console.log("-----------------------------------------------------")

//WORKSHEET 2

//actividad 3
let Cr = 5;

console.log(`el valor de la circunferencia es: ${2*Cr*Math.PI}`)
console.log(`el valor del area es: ${Math.PI*Cr**2}`)

//actividad 4
let tempC = 30, tempF = 90;

console.log(`la temperatura ${tempC} en celcius es ${Math.round(tempC*9/5+32)} en farenheit`)
console.log(`la temperatura ${tempF} en farenheit es ${Math.round((tempF-32)*5/9)} en celcius`)


console.log("-----------------------------------------------------")

//WORKSHEET 5
actividad = prompt("escoge actividad")
switch(actividad){

//activiad 1
case "1":
par = prompt("introduce un numero entero");
console.log(`${par}`)

if (parseInt(par,10)%2 == 0)
    alert("Es par")
else
    alert("no es par")

break;

//actidad 2
case "2":
edad = prompt("introduce tu edad");
if (parseInt(edad,10) >= 18)
    alert("Es mayor de edad");
else
    alert("no es mayor de edad");
break;

//actividad 3
case "3":
edad= prompt("introduce tu edad");
ciudad= prompt("introduce tu ciudad");

if (edad == 25 && ciudadtoLowerCase() == "madrid")
    alert("Enhonarbuena");
break;

//actividad 4
case "4":
usu = prompt("introduce el numero de usuario");
if (parseInt(usu,10) > 100)
    alert("tiene un descuento del 15%: "+ parseInt(usu,10)*0.85);

break;
//activadad 5
case "5":
nombre = prompt("introduzca el nombre");

if (nombre.substr(-1) == "o")
    alert("bienvenido");
else if (nombre.substr(-1) == "a")
    alert("bienvenida");
else
    alert("usuario no reconocido");

break
//actividad 6
case "6":
edad= prompt("introduce tu edad");
ciudad= prompt("introduce tu ciudad");

if (edad >= 18 && edad <= 30 && ciudad.toLowerCase() == "madrid")
    alert("puede acceder al carnet de empresarios emprendedores");
break;

//activadda 3.else
case "3.else":
    edad= prompt("introduce tu edad");
    if (edad <= 5)
        alert("debes estar en el jardin de infancia");
    else if (edad >= 6 && edad <= 11)
        alert("debes estar en primaria");
    else if (edad >= 12 && edad <= 16)
        alert("debes estar en la ESO");
    else if (edad >= 17 && edad <= 21)
        alert("debes estar en Bachiller o Ciclos");
    else
        alert("debes estar en la universidad");
break;
case "5.else":
nota1= parseInt(prompt("introduce la nota de un examen"),10);
nota2= parseInt(prompt("introduce la nota de otro examen"),10);
trab1= parseInt(prompt("introduce la nota de un trabajo"),10);
trab2= parseInt(prompt("introduce la nota de otro trabajo"),10);

if (nota1 < 4.5 || nota2 < 4.5 || trab1 < 4.5 || trab2 < 4.5 || (nota1+nota2)*0.375 + (trab1+trab2)*0.125 < 5)
    alert("notas insuficiente");
else
    alert("aprobado");

console.log("nota es:", (nota1+nota2)*0.375 + (trab1+trab2)*0.125);

break;

//actividad switch
case "1.sw":
    mes = prompt("introduce un mes").toLowerCase()
    array30 = ["abril", "junio", "septiembre", "noviembre"], 
    array31 = ["enero", "marzo", "mayo", "julio","agosto", "octubre", "diciembre"];

if (array30.includes(mes))
    alert("tiene 30 dias");
else if (array31.includes(mes))
    alert("tiene 31 dias");
else if (mes == "febrero")
    alert("tiene 28 dias");
else
    alert("no es un mes")
break;
}