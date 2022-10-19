/*EJERCICIO: Guarda en un array la lista de la compra con Peras, Manzanas, Kiwis, Plátanos y Mandarinas. Haz los siguiente con splice:

Elimina las manzanas (debe quedar Peras, Kiwis, Plátanos y Mandarinas)
Añade detrás de los Plátanos Naranjas y Sandía (debe quedar Peras, Kiwis, Plátanos, Naranjas, Sandía y Mandarinas)
Quita los Kiwis y pon en su lugar Cerezas y Nísperos (debe quedar Peras, Cerezas, Nísperos, Plátanos, Naranjas, Sandía y Mandarinas)*/

let arr = ['peras','manzana','kiwi','platano','mandarina'];
noman = arr.splice(1,1);
console.log(arr);
let arr2 = arr.splice(3,0,'naranaja', 'sandia');
console.log(arr)
let arr3 = arr.splice(1,1,'cereza', 'nispero');
console.log(arr);

/////// 
/*EJERCICIO: Haz una función que ordene
 las notas de un array pasado como parámetro. Si le pasamos [4,8,3,10,5] debe devolver [3,4,5,8,10]. Pruébalo en la consola*/
let num = [4,8,3,10,5];
let numordenado = num.sort((a, b)=>a-b)
console.log(numordenado);

//////
//EJERCICIO: Dado un array con los días de la semana obtén todos los días que empiezan por ‘M’
week = ['lunes', 'martes', 'miercoles', 'jueves', 'viernes', 'sabado','domingo'];
let dias = week.filter(dia => dia.charAt(0)=='m');
console.log(dias);

////////////////
//EJERCICIO: Dado un array con los días de la semana obtén el primer día que empieza por ‘M’
let dias2 = week.find(d => d.charAt(0)=='m');
console.log(dias2);

////////////
//EJERCICIO: Dado un array con los días de la semana obtén la posición en el array del primer día que empieza por ‘M’
let dias3 = week.findIndex(d => d.charAt(0)=='m');
console.log(dias3);

///////
/*EJERCICIO: Dado un array con los días de la semana indica
 si algún día empieza por ‘S’. Dado un array con los días de la semana indica si todos los días acaban por ‘s’*/
if (week.some(d => d.charAt(0)=='s'))
console.log(true);
else 
console.log(false);

if (week.every(d => d.charAt(d.lenght-1)=='s'))
console.log(true);
else 
console.log(false);

///////
//EJERCICIO: Dado un array con los días de la semana devuelve otro array con los días en mayúsculas
let mayus = week.map(d  => d.toUpperCase());
console.log(mayus);


////////
//EJERCICIO: Dado el array de notas anterior devuelve la nota media
let arrayNotas = [5.2, 3.9, 6, 9.75, 7.5, 3]
let sumaNotas = arrayNotas.reduce((total,nota)=>total += nota/arrayNotas.length,0);
console.log(sumaNotas);

/////////////
//EJERCICIO: Dado un array con los días de la semana indica si algún día es el ‘Martes’
if (week.includes('martes'))
console.log(true);

/////////
/*EJERCICIO: Dado el array arr1 con los días de la semana haz un array arr2 que sea igual al arr1.
 Elimina de arr2 el último día y comprueba quá ha pasado con arr1. Repita la operación con un array 
 llamado arr3 pero que crearás haciendo una copia de arr1.*/
week2 = week
console.log(week2);
week2.pop()
console.log(week);
week3 = week.slice()
week3.pop()
console.log(week, week3);



















