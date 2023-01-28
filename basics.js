//basic function syntax

function helloMe(name){
    return `Hello ${name}`
}

console.log(helloMe("Robert"));

//functions in js is an object

const addition = function (num1, num2){
    return num1+num2;
}

console.log(addition(45,23))

//functions as a return value of another function

function multiplyBy(x){
    return function(n){
        return x*n;
    }
}

const triple = multiplyBy(3); //returns triple as a function
const half = multiplyBy(0.5);
console.log(triple(30));
console.log(half(70));

//callback- functions that accept functions as arguments

myArr = [10,24,34,56,68,72,88,95]

const arrDouble = myArr.map(function(x){
    return x*2;
})

const arrTriple = myArr.map (x => x*3); //arrow function


console.log(arrDouble)
console.log(arrTriple)