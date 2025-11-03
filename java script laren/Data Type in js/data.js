// Java script Data Type
let firstName = 'Ali';
let fullName = 'My Name Is "Ali"';
let fullNames = 'My Name is \'Ali\'';
let finalName = `My  Name Is ${firstName}`;
let age = 30;
let age2 = 20; 
let cal = age + age2 + firstName + age + age2;
console.log(cal)
console.log(finalName);
console.log(fullNames);
console.log(fullName);
console.log(typeof firstName);

let bigNumber = BigInt(1000);
let bigNumber2 = 333333333n;
console.log(bigNumber + bigNumber2);

// Booliean
let ifAdult = false;
console.log(typeof ifAdult);

// undefined
let noinfo;
console.log(typeof noinfo);

// null undefined
let noki = null;
console.log(typeof noki);

// arry In js
let fruits = ['Apple', 'Lemon', 'peer', 'Oranges', 32, true.undefined, null];
fruits [7] ='Add';
fruits [7] = 'Reples';
console.log(fruits)
console.log(typeof fruits);

// Object In Js
let student = {
    fullName: 'Rohan',
    age: 12,
    DeteOFBarth: 1888,
};
console.log(student)
console.log(typeof student)