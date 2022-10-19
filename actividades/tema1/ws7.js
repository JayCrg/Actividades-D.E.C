//activada 1 Write a function that can take in any number of arguments, and returns the sum of all of the arguments.

function suma(...param){
    let total=0;
    for(num of param)
        total = total + num;
    return total;
}

//actividad 2 Write a function called addOnlyNums 
//that can take in any number of arguments (including numbers or strings), and returns the sum of only the numbers.

function addOnlyNums(...param){
    let total=0;
    for (element of param){
        if(!isNaN(element))
            total=total+parseInt(element);
    }
    return total;
}
document.write(addOnlyNums(1,'2', 'jaja', 3)+'<br>')

//actividad 3 Write a function called countTheArgs that can take any number of arguments, and returns the number of arguments that are passed in.

function countTheArgs(...param){
    return param.length;
}
document.write(countTheArgs(1,2,3,4,5,6,7)+'<br>');

//actividad 4 Write a function called combineTwoArrays that takes in two arrays as arguments,
// and returns a single array that combines both (using the spread operator).

function combineTwoArrays(array1, array2){
    let array=[...array1, ...array2];
    return array;
}

//actividad 5 Write a function called sumEveryOther that takes in any amount of arguments, and returns the sum of every other argument.
function sumEveryOther(...param){
    let total=0;
    for (let i=0; i<param.length; i++){
        if (i%2 == 0)
            total += param[i];
    }
    return total;
}
document.write(sumEveryOther(1,2,3,4,5), '<br>');

// actividad 6 Write a function called onlyUniques that can take in any number of 
// arguments, and returns an array of only the unique arguments.
function onlyUniques(...param){
    let dataSet = new Set(param);
    let result = [...dataSet];
    return result;
}
    document.write(onlyUniques('cat', 'cat', 'dog', 'pig'), '<br>');
    document.write(onlyUniques(1, 4, 7, 1, 2, 7, 4), '<br>');
    
//actividad 7 Write a function called combineAllArrays that takes in any 
// number of arrays as arguments and combines all of them into one array.

function combineAllArrays(...param){
    let total = [];
    for (elem of param){
        if (typeof elem != 'object')
            throw TypeError;
        total = [...total, ...elem]
    }
    return total;
}
let a = [1,2];
let b = [3, 4];
console.log(combineAllArrays(a, b));

// activdad 8 Write a function called squareAndSum that takes in 
// any number of arguments, squares them, then sums all of the squares.

function squareAndSum(...param){
    let total = 0;
    for (elem of param)
        total += elem*elem;
    return total;
}
document.write(squareAndSum(1,2,3), '<br>');

