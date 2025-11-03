// js Number 
const x = 999999999999999;
const y = 0.6;
const z = 0.7;
const l = (y + z).toFixed(2);  // This is naw a string na
console.log(new Number(l));
// console.log(l.toFixed(2)); w
// console.log((y * 10 + z * 10) / 10); 

const a = 10;
const b = 20;
const c = 30;
const d = 'java scirpt';
const e = c - d;

// console.log(b + a + l + c);
// console.log(c - l);
// console.log(c * l);
// console.log(c / l);


console.log(e);

// let num = 2;
// let value = '';
// while (num != Infinity) {
//     num = num * num;
//     value = value + num + '<br>';
// }

// document.getElementById('title').innerHTML = value;

console.log(c.toString(2));

const g = 300;
const h = new Number(300);
const r = 257.983427752;
// console.log(g == h);
// console.log(g === h);

// console.log(r.toPrecision(2)); Avoide it

let newNum = Number.EPSILON;
 newNum = Number.MAX_VALUE;
 newNum = Number.MIN_VALUE;
 newNum = Number.POSITIVE_INFINITY;
 newNum = Number.NEGATIVE_INFINITY;
 newNum = Number.NaN;
console.log(newNum);

