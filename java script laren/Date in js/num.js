// Date in js
const myDate = new Date();

// console.log(myDate);
// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toLocaleString());
// console.log(
//     myDate.toLocaleString('default',{
//         weekday : 'short',
//     }));

// let updateDate = new Date(2025, 3, 5);
// let updateDate = new Date(2025, 3, 5, 12, 34, 43);
let updateDate = new Date('01-14-2002');
// console.log(updateDate);
let myTime = Date.now();


// function smpleTask(){
//     for (let step = 0; step < 1; step++){
//         console.log('Walking east to one step');
//     }
// }
// let startTime = Date.now();
// smpleTask()
// let endTime = Date.now();
// console.log(`The task took ${endTime - startTime} millisecond to complete`);

console.log(Math.floor(myDate));

console.log(myDate.getDate());
console.log(myDate.getDay());

