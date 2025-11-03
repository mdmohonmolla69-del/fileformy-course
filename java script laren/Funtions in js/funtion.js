// Function in js

// function myFuntion() {
//     console.log("Hello Funtion");
// }
// myFuntion();

// function myFuntion(fullName) {
//     console.log("Hello " + fullName);
// }
// myFuntion("Ali");
// myFuntion("Shovo");

function myFuntion(fullName, age, dateOfBirth = 1991) {
    console.log("Hello " + fullName + " I am " + age + " My Date Of Birth " + dateOfBirth);
}
myFuntion("Ali", 30, 1995 );
myFuntion("Shovo", 20, 1997);

function sub () {
    console.log("Subscribe");
}
document.getElementById("btn").addEventListener("click", sub);

(function (me) {
    console.log("I am ", me);
}) ("hello");

let math = function (X, Y) {
    return X * Y;
}
console.log(math(5, 2))
console.log(math(5, 3))

function newName (){
    let s = "Sumon";
    console.log(s);
    console.log(s);
}
newName();

let add = function (x, y){
    return x * y;
}
console.log(add(5, 2))


let adding = (q, p) => q * p;
console.log(adding(5, 3))

function greet (firstName) {
    function sayHello () {
        alert("Hello " + firstName);
    }
    return sayHello();
}
greet("King");