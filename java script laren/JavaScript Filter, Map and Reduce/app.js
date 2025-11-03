// JavaScript Filter, Map and Reduce

const fruits = ['Mango', 'Banana', 'Orange', 'Grpas'];
const country = new Map([
  ['bn', 'Bangladesh'],
  ['in', 'India'],
  ['pk', 'Pakisthan'],
  ['np', 'Nepal'],
]);

country.set('bu', 'Butan');
const myCountry = {
  bn: 'Bangladesh',
  in: 'India',
  pk: 'Pakisthan',
  np: 'Nepal',
};

const stack = [
  {
    name: 'MERN Stack',
    property: 'Mango, Express, React, Node',
    foun: 'PHP',
    price: 5000,
  },
  {
    name: 'Laravel',
    property: 'JavaScript, Vue, PHP, MySQL',
    foun: 'PHP',
    price: 5000,
  },
  {
    name: 'WordPress',
    property: 'JavaScript, PHP, WordPress, MySQL',
    foun: 'JavaScript',
    price: 5000,
  },
];

// fruits.forEach(fruit => console.log(fruit));
const fruitCspB = fruits.filter(fruit => fruit.toLowerCase().startsWith('b'));


const fruitsLen5 = fruits.filter(fruit => fruit.length === 5);
// console.log(fruitsLen5);
// console.log(fruitCspB);

const fG = fruits.filter(fruit => fruit.toLowerCase().includes('g'));

// console.log(fG);

const number = [1, 2, 3, 4, 5, 6, 7,];
const big5 = number.filter(num => num > 5);
// console.log(big5);

const forNum = [];
number.forEach(num => {
  if (num > 5) {
    forNum.push(num);
  }
})
// console.log(forNum);
let userStack = stack.filter(sk => sk.foun === 'PHP');
// console.log(userStack);

const myNum = number
.map(num => num + 5)
.map(num => num * 5)
.filter(num => num >= 50)
// console.log(myNum); 


// Reduce

// const myTotal = number.reduce((acc, curva,) => acc + curva, 0);
// const myTotal = number.reduce((acc, curva,) =>{
// console.log(`acc ${acc} and curva ${curva}`)
// return acc + curva;
// }, 0);

// console.log(myTotal);

const coursePrice = stack.reduce((acc, course) => acc + course.price, 0);
console.log(coursePrice);