function inviertecadena(cadena){
    nueva = '';
    for (i = cadena.length-1; i>=0; i--){
        nueva += cadena[i];
    }
    return nueva;
}

function inviertepalabras(cadena){
    let cadena2 = inviertecadena(cadena).split(' ');
    let nueva = '';
    for (i = cadena2.length-1; i>=0; i--){
        nueva += cadena2[i] + ' ';
    }
    return nueva
}
function encuentramaslarga(cadena){
    let arr = cadena.split(' ');
    let maslarga = '';
    for (palabra of arr){
        if(palabra.length >= maslarga.length)
            maslarga = palabra
    }
    return maslarga;
}
function maslargas(cadena, index){
    let arr = cadena.split(' ')
    let num = 0;
    for (pal of arr){
        if (pal.length > index)
        num += 1;
    }
    return num
}

function cadenabienformada(cadena){
return cadena.toLowerCase().charAt(0).toUpperCase() + cadena.slice(1);
}

//--2-----------------------------------------------------------------------------

function lettercase(cadena){
    mayCadena = cadena.toUpperCase()
    minCadena = cadena.toLowerCase()
    if (cadena == mayCadena)
        return 2
    else if (cadena == minCadena)
        return 1
    else
        return 0
}

//-------3--------------------------------------------------------------------------

function locateString(cadena, sub){
    let i;
    arr = []
    let aux = cadena;
    let count = 0;
    while (i!=-1){
        i = aux.indexOf(sub);
        if (i!=-1){
            i+= count * sub.length
            arr.push(i);
        }
        aux = aux.replace(sub, '');
        count += 1;
    }
    return arr
}

//----4----------------------------------------
function vocalycons(cadena){
    let ayuda = ''
    let cadena2 = cadena.split('a');
    for (let i = 0 ; i<cadena2.length-1; i++){
        ayuda+='a'
    }
    let cadena3 = cadena.split('e');
    for (let i = 0 ; i<cadena3.length-1; i++){
        ayuda+='e'
    }
    let cadena4 = cadena.split('i');
    for (let i = 0 ; i<cadena4.length-1; i++){
        ayuda+='i'
    }
    let cadena5 = cadena.split('o');
    for (let i = 0 ; i<cadena5.length-1; i++){
        ayuda+='o'
    }
    let cadena6 = cadena.split('u');
    for (let i = 0 ; i<cadena6.length-1; i++){
        ayuda+='u'
    }
    cadenaux = cadena.replaceAll('a','').replaceAll('e','').replaceAll('i','').replaceAll('o','').replaceAll('u','').replaceAll(' ', '');
    ayuda += cadenaux;
    return ayuda
    
}

//---5-------------------------------------------------------

function deleteRepeat(cadena){
    let arrCadena = cadena.split('');
    arr = []
    set = new Set(arrCadena);
    arr = [...set];
    return arr.join('').toString();
}

function deleteRepeat2(cadena){
    let aux = cadena;
    for (let i=0; i<aux.length; i++) {
        if (aux.indexOf(aux[i]) != aux.lastIndexOf(aux[i]) ) {
            aux = aux.replaceAll(aux[i], '');
        }
    }
    return aux;
}

//-------6-----------------------------------------------------------

function stringIncluded(cadena, sub){
    if (cadena.includes(sub))
        return cadena.indexOf(sub);
    else
        return -1;
}
//..7..........................................................................
function palindromo(cadena){
    reves = inviertecadena(cadena)
    if(reves == cadena)
    return true;
    else
    return false;
}

//----8-----------------------------------------------------------------
function countWord(cadena){
    let arr = cadena.split(' ');
    let count = 0;
    for (pal of arr){
        pal.trim();
        if (pal ==' ' || pal==''){
            arr.pop(pal)
        }
    }
    return arr.length;
}

//----9----------------------------------------------------------

function tableWord(cadena){
    reves = inviertecadena(cadena);
    document.write("<table  border = \"0\" cellspacing = \" 2 \" bgcolor = \" black \" width = \" 200 \">");
    
    for(let i=0; i<cadena.length; i++){
    document.write("<tr bgcolor = \" white \" height = \" 50 \" >");
        if(i==0){
            for(let j=0; j<cadena.length; j++)
                document.write(`<td widht=\"50\" bgcolor=\"white\">${cadena[j]}</td>`);
            }
        else if(i==cadena.length-1){
            for(let j=0; j<cadena.length; j++)
                document.write(`<td widht=\"50\" bgcolor=\"white\">${reves[j]}</td>`);
        }
        else{
            for(let j=0; j<cadena.length; j++)
                if(j==0)
                document.write(`<td widht=\"50\" bgcolor=\"white\">${cadena[i]}</td>`);
                else if (j==cadena.length-1)
                document.write(`<td widht=\"50\" bgcolor=\"white\">${reves[i]}</td>`);
                else
                document.write(`<td widht=\"50\" bgcolor=\"white\"> </td>`);
        }
    document.write("</tr>");
}
document.write("</table>");
}

//document.write(countWord('jaja'));
tableWord('hola')