// Higher Order Array Loop

// array {'', '', ''} {{}, {}, {}}

const fruits = ['Mango', 'Banana', 'Orange', 'Grpas'];
for (let fruit = 0; fruit < fruits.length; fruit++) {
  // console.log(fruits[fruit]);
}

for (const fruit of fruits) {
  // console.log(fruit);
}

const myName = 'Mohon Molla';
for (const name of myName) {
  // console.log(`Each number is ${name}`);
}


const canteryName = new Map([
  ['bn', 'Bangladesh'],
  ['in', 'India'],
  ['pk', 'Pakisthan'],
  ['np', 'Nepal'],

]);

canteryName.set('Vu', 'Vutan');

// canteryName.set('bn', 'Bangladesh');

// for (const key of canteryName) {
//   console.log(key);
// }

for (const [key, Value] of canteryName) {
  // console.log(key, ':', Value);
}

const myCountry = {
  bn: 'Bangladesh',
  in: 'India',
  pk: 'Pakisthan',
  np: 'Nepal',
};

// for (const key of myCountry) {
//   // console.log(key);
// }

// for (const key in myCountry) {
//   console.log(key, ':', myCountry[key]); 
// }


for (const key of Object.keys(myCountry)) {
  // console.log(key);
}


for (const key in fruits) {
  // console.log(fruits[key]);
}

fruits.forEach(function (fruit) {
  // console.log(fruit);
});

// fruits.forEach(fruit => {
//   console.log(fruit);
// });

// function myFruit(fruit) {
//   console.log(fruit);
// }
// fruits.forEach(myFruit)

fruits.forEach((fruit, index, arr) => {
  // console.log(fruit, index, arr);
});

const stack = [
  {
    name: 'MERN Stack',
    property: 'Mango, Express, React, Node',
  },
  {
    name: 'Laravel',
    property: 'JavaScript, Vue, PHP, MySQL',
  },
  {
    name: 'WordPress',
    property: 'JavaScript, PHP, WordPress, MySQL',
  },
];

stack.forEach(info => {
  console.log(`Want to learn ${info.name}? Lern this ${info.property}`)
})