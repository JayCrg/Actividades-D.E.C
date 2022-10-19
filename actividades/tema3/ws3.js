/*//Write examples with Arrays to solve the next problems using only Array methods (like iterators, etc...):
let arra = [1,2,3,4,5,6,7,8,9,10,20,19,18,17,16,15,140,'4.33234'];
//find largest number
let a = arra.sort((i, j) => i-j).at(arra.length-1);
console.log(a);
//find longest string
let arra2 = [1,2,3,4,5,'242323', 'fsdgswgehw'];

let b = arra2.sort((i, j) => i.length-j.length).at(arra2.length-1);
console.log(b);

//find even numbers
let c = arra.filter(n => n%2==0);
console.log(c);

//find odd numbers
let d = arra.filter(n => n%2==1);
console.log(d);

//find words that contain 'is'
let arra3='tomorrow is not halloween, this can be disheartening to hear';
let q = arra3.split(' ');
let e = q.reduce((ac, val) => { if (val.includes('is')) ac + 1 },0);
console.log(e);

//assert all numbers are divisible by three
let f = arra.forEach(val => {if(val%3!=0)return 0;})
console.log(f);

//zip two arrays together
k = [1, 2, 3]
j = ['a', 'b', 'c']

let g = k.map(function(e, i) {
  return [e, j[i]];
});
console.log(g)

//sort joined array from smallest to largest


//remove the first word in the array
arra.shift()
console.log(arra)

//place a new word at the start of the array
arra.unshift('jaja')
console.log(arra)

//replace some elements
arra.splice(1, 2, 'Cuatro','Cinco')
console.log(arra)




/*Over an array with names, find all entries whose firstname starts with 'J'
, create projection combined of only the initials of the name and then sort alphabetically*/
/*
let nombre = ['juan', 'maria', 'jose', 'julia', 'daniel', 'miguel', 'rodrigo'];
let nombre2 = nombre.slice();
j=0
for (let i=0; i<nombre2.length; i++){
    if(nombre2[i].charAt(0) != 'j'){
        nombre2.splice(i,1,'');
    }
}
nombre2.sort()
while(nombre2[j]==''){
    nombre2.shift();
}
console.log(nombre2);
*/
/*Do you like treasure hunts? In this problem you are to write a program to explore the above array for a treasure.
The values in the array are clues. Each cell contains an integer between 11 and 55; for each value the ten's digit represents the row number
and the unit's digit represents the column number of the cell containing the next clue. Starting in the upper left corner (at 1,1), use
the clues to guide your search of the array. (The first three clues are 11, 34, 42). The treasure is a cell whose value is the same as
its coordinates. Your program must first read in the treasure map data into a 5 by 5 array.
Your program should output the cells it visits during its search, and a message indicating where you found the treasure.*/

let map = [
[[3,4],[2,1],[3,2],[4,1],[2,5]],
[[1,4],[4,2],[4,3],[1,4],[3,1]],
[[5,4],[4,5],[5,2],[4,2],[2,3]],
[[3,3],[1,5],[5,1],[3,1],[3,5]],
[[2,1],[5,2],[3,3],[1,3],[2,3]]]
function buscar(map){
    let buscando = true;
    let auxPos;
    let pos=[1,1];
    while(buscando){
        auxPos = pos
        pos = map[auxPos[0]-1][auxPos[1]-1]
        console.log(pos)
        if(auxPos== pos)
            buscando = false;
    }
    console.log('El resultado final es: ' + pos);
}

//Develop a function wich be able to create a random treasure hunt like the previous one. As arguments it 
//will recibe the dimensions of the array (at least 5x5) and must return a valid treasure hunt array.

function getRandomInt(num) {
    return Math.floor(Math.random() * num);}
var map2=[
[[],[],[],[],[]],
[[],[],[],[],[]],
[[],[],[],[],[]],
[[],[],[],[],[]],
[[],[],[],[],[]]];

function crear(map2){
    let x = getRandomInt(5), y = getRandomInt(5);
    map2[x][y].push(x+1,y+1);
    sigue = true;
    while(sigue){
    aux = [x,y];
    x = getRandomInt(5);
    y = getRandomInt(5);

    if(map2[x][y]=='')
    map2[x][y] = [aux[0]+1,aux[1]+1];
    if(x==0 && y==0)
    sigue=false;
    }
    for (i=0;i<map2.length;i++){
        for(j=0;j<map2[i].length;j++){
            if (map2[i][j] == '')
            map2[i][j] = [getRandomInt(5)+1,getRandomInt(5)+1];
        }
    }
return map2
}
//console.log(crear(map2))
//buscar(map2)

/*Write a program to search for the "saddle points" in a 5 by 5 array of integers. 
A saddle point is a cell whose value is greater than or equal to any in its row, and 
less than or equal to any in its column. There may be more than one saddle point in the array. 
Print out the coordinates of any saddle points your program finds. Print out "No saddle points" if there are none.*/

map3 = []
for (i=0;i<5;i++){
    map3.push([])
    for(j=0;j<5;j++){
        map3[i][j] = getRandomInt(5)+1;
    }
}
function saddle(map3){
    sdl = false

let inversa = []
for(i=0;i<map3.length;i++){    
    inversa.push([])
    for(j=0;j<map3[i].length;j++){
        inversa[i][j] = map3[j][i];
    }
}
    for (i=0;i<5;i++){
        for(j=0;j<5;j++){
            if(map3[i][j]==Math.max(...map3[i]) && map3[i][j]==Math.min(...inversa[j])){
                console.log(i, j , ':', map3[i][j]);
                if(sdl==false)sdl=true;
            }
        }
    }
    if (sdl == false)console.log("There isn't any saddle point");

};
//console.log(map3);
//saddle(map3);









/*One classic method for composing secret messages is called a square code. 
The spaces are removed from the english text and the characters are written into a square (or rectangle). 
For example, the sentence "If man was meant to stay on the ground god would have given us roots" is 54 characters long, 
so it is written into a rectangle with 7 rows and 8 columns.*/

let input = 'have a nice day',
input2 = 'feed the dog',
input3 = 'chill out';



function square(input){
procesado = input.split(' ').join('');
let long = procesado.length;
let numAux = Math.ceil(Math.sqrt(long));
let sigue = true;
arrayAux = [];
let i = 0, j = numAux;

    while (sigue){
        if (procesado.slice(i, j).length < numAux)
        sigue = false;
        arrayAux.push(procesado.slice(i, j));
        i+= numAux;
        j+= numAux;
    }
    if(arrayAux[arrayAux.length-1]=='')arrayAux.pop()

//console.log(arrayAux);

/*vamos sumando la primera letra de cada elemento del array
 tantas veces como letras tenga el ultimo elemento (que siempre va a tener o igual o menos letras que los anteriores)*/
arrayFinal = []
for(i=0;i<arrayAux[arrayAux.length-1].length;i++){ 
    clave = arrayAux.reduce((j, k)=>j + k.charAt(i),'');
    arrayFinal.push(clave);
}
/*cuando nos hemos asegurado de que las letras que casan con las del
 ultimo elemento estan fuera, empezamos por las que cuyo indice sobrepasan la logitud maxima del ultmo elemento*/
if(arrayAux[0].length != arrayAux[arrayAux.length-1].length){//simple comprobacion para ahorrarnos el bucle
    for(i=arrayAux[arrayAux.length-1].length; i<arrayAux[arrayAux.length-2].length; i++){ 
        clave = arrayAux.reduce((j, k)=>j + k.charAt(i),'');
        arrayFinal.push(clave);}
}
return arrayFinal
}
console.log(square('Tengo mucho sueño'));









//Write a function that return the original message from one coded recieved as argument.

function antisquare(code){
arrayAux = []
for(i = 0; i<code[code.length-1].length; i++){
    clave = code.reduce((j, k)=>j + k.charAt(i),'');
    arrayAux.push(clave);
    }
if(code[0].length != code[code.length-1].length){
    for(i=code[code.length-1].length; i<code[code.length-2].length; i++){ 
        clave = code.reduce((j, k)=>j + k.charAt(i),'');
        arrayAux.push(clave);}
}
return(arrayAux.join(''))
}
//console.log(antisquare(square(input)))
