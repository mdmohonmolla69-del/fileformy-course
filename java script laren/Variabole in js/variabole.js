// JavaScript Variables
let fristName;
let FristName;

// * var Variable
// you can re diclare
// you can re assaign
// Global Scooped
// var is hosted

var a = 10;
var a = 20;
a = "Bangla"
{
    var blocked = "30";
    console.log(a)
}
console.log(blocked)
console.log(a);


let fruits = "oiange";

var Man = "bd";
console.log(Man)

var contys;
console.log(contys)
contys = "bangladesh";


console.log(`${fruits} is my f, ${fruits} I like to eat`);

//  * let Variable
// ! you can not re diclare
// you can re assaign
// ? Block Scooped
// ! let is not hosted

let b = 10;
// let b = 11;
b = 20;
{
    console.log(b)
}
// console.log(hazu)
// let hazu = "hanu";


// * const Variable
// ! you can not re diclare
// ! you can not re assaign
// ? Block Scooped
// ! const is not hosted
const c = 10;
// const c = 11;
// c = 20;
{
 console.log(c)
 const d = 30;
}

const person = {
    fristName:"bingo",
    age: 30,
}
person.add = "heoo";
person.age = 32;
console.log(person)

// ! console.log(d) You dont have a parmit to assec the d of const !






