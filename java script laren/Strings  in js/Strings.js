// Java Strings 
const fullName = 'Mohon';

const con = "Bangladesh";

const sen = "I'm form Bangladesh";
const sen2 = 'I\'m form Bangladesh';

const coteiron = 'Bill Gates say "some text" ';
const coteiro2 = "Bill Gates say\n \"some text\" ";

let info = "sobi " + "msarke";
let info2 = fullName + " " + con;
let info3 = "I am " + fullName + " I am form " + con;

let info4 = `I am ${fullName} I am form ${con}`
let info5 = `I am ${fullName}
 I am form
 ${con}`


 const fullName2 = new String("Mahamud");
 const fullName3 = "makur"
console.log(info.length)
console.log(info.charAt(2))
console.log(info.indexOf('a'))
console.log(info.toLocaleUpperCase())
console.log(info.toLocaleLowerCase())

document.getElementById('tile').innerText = info5;
console.log(info5);

const student = "Mohon Molla"
console.log(student.slice(5))
console.log(student.slice(5, 8))   //End Proint is 1 less then of 8 to 7 oky !!
console.log(student.substring(5))
console.log(student.substring(5, 8))

const someText = "       Molla        "
console.log(someText.trim())
console.log(someText.trimStart())
console.log(someText.trimEnd())

const url = "https://molla.com/new%20Blog"
console.log(url.replace("%20", "-"))

console.log(info5.split(" "))