let miVariable;
miVariable = 3
console.log(`el valor de mi variable es: ${miVariable}`)

const miVariable2 = 10
console.log("el valor de mi variable es: " + miVariable2)

let booleano=true;

if (booleano){
    console.log('la vaiable es true')
    console.log('END')
}

if (miVariable === 3.0){
    console.log("la condicion es verdadera")
    console.log("end")
}
else{
    console.log("es falso")
}


switch (miVariable){
    case 3:
        console.log("lolololo vale 3");
        break;
    case 5:
        console.log("kekw vale 5");
        break    
}

let nombres = ["pepe", "juan", "armando", "jose", "luis"]

for(let i=0; i<nombres.length; i++)
document.write(nombres[i] + "<br>")

document.write('<br>')

for(let nombre of nombres)
document.write(nombre, '<br>')



/*console.log('Esto es una página');
document.write("<h1>contenido de mi primera web</h1>")*/
