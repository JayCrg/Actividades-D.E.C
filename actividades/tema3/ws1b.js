function sum(num1, num2){
    return num1 + num2
}

sum(40,2)
sum(42,0)
console.log("the answer to everything is", sum(42,0))

let a = (x, y)=>x+y;
////////////////////////////////
function stringLength(str){
    console.log(`the length of "${str}" is:`, str.length)
}

let longestCityNameInTheWorld = "Taumatawhakatangihangakoauauotamateaturipukakapikimaungahoronukupokaiwhenuakitanatahu"

stringLength(longestCityNameInTheWorld)

let b = (str) => console.log(`the length of "${str}" is:`, str.length);
//////////////////////////////
function stringLength(str){
    let length = str.length
    console.log(`the length of "${str}" is:`, length)
    return str.length
}

stringLength("willynilly")

let c = str => {let length = str.length
    console.log(`the length of "${str}" is:`, length)
    return str.length}
//////////////////////////////////////

let alerts = ["Hey, you are awesome", "You are so wonderful", "What a marvel you are", "You're so lovely", "You're so sweet that I'd think you're a sweet potato -- and I LOOOOVE POTATOES"]

function showAlert(name){    
    alert(alerts[(Math.floor(Math.random()*alerts.length))] + `, ${name}!`)
}

showAlert("you ball of fluff");

let d = (nom) => alert(alerts[(Math.floor(Math.random()*alerts.length))] + `, ${nom}!`);
////////////////////////////////////////
function oneTwoThreeRotate(){
    Array.prototype.slice.call(document.querySelectorAll('div,p,span,img,a,body')).map(function(tag){
        tag.style['transform'] = 'rotate(' + (Math.floor(Math.random() * 3) - 1) + 'deg)';
    })
}
oneTwoThreeRotate();

const e = () => {
    Array.prototype.slice.call( document.querySelectorAll('div,p,span,img,a,body')).map(
        tag => tag.style['transform'] = 'rotate(' + (Math.floor(Math.random() * 3) - 1) + 'deg)'
    )
}
//////////////////////////////////////////
f = (nom, edad) => console.log(`hello my name is ${nom} and im ${edad}`);

/////////////////////////////////////
g = arr.reduce((a,b)=>a+b, 0);
//////////////////////////////////////

let eye = "eye";

const fire =() =>{return `bulls-`;}

//////////////////////////////////

const fibonacci = function(n) {
    if (n < 3) return 1;
    return fibonacci(n - 1) + fibonacci(n - 2);
    }

h = (n) => {if (n < 3) return 1;
    return fibonacci(n - 1) + fibonacci(n - 2);
}