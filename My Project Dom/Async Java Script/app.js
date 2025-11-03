//  Synchotonous 
// Single Threaded
// function a () {
//     console.log('a');
// }
// console.log('End');
// a();
// const a = function () {
//     console.log("Fun Working");
//     let aTime = new Date().getTime();
//     while (aTime + 5000 >= new Date().getTime());
//     console.log('Complet');
// }
// console.log('Fist Line');
// a();
// console.log('Last Line');


// asyncnronous Java Script

// setTimeout
// setInterval
// Promise
// fetch
// axios
// XMLHttpRecqutest
// setTimeout(useCallback, timeinms)
// console.log("hello");
// console.log("hello2");
// setTimeout(function () {
//     console.log("hello3");
// }, 5000);
// console.log("hello4");
// console.log("hello5");

/*
let coffee = new Promise((res, rej) => {
    if (false) {
        return res();
    } else {
        return rej ();
    }
});

coffee.then(function () {
    console.log('Res');
}).catch(function () {
    console.log('Rej')
}); 
*/
// let mathAns = new Promise((res, rej) => {
//     let n = Math.floor(Math.random() * 10);
//     console.log(n);
//     if (n < 5) {
//         return res();
//     } else {
//         return rej();
//     }
// });
// mathAns.then(function () {
//     console.log('Below');
// }).catch(function () {
//     console.log('Above');
// });

// const step1 = new Promise((res, rej) => {
//     setTimeout(() => {
//         res('Step One Done');
//     }, 5000);
// });
// const step2 = new Promise((res, rej) => {
//     setTimeout(() => {
//         res('Step Tow Done');
//     }, 3000);
// });

// step1.then(function (res) {
//     console.log(res);
// });
// step2.then(function (res) {
//     console.log(res);
// });

// Promise.all([step1, step2]).then(res => console.log(res)); //array akare dakabe 
// Promise.race([step1, step2]).then(res => console.log(res)); // jaitar kaj bai somoy kom ar kaj age hobe saita dakabe porertar kaj hobe na 

// let promise1 = new Promise((res, rej) => {
//     return res('Step One Done');
// });

// let promise2 = promise1.then(function (data) {
//     console.log(data);
//     return new Promise(function (res, rej) {
//         return res('step tow done');
//     });
// });

// promise2.then(function (data) {
//     console.log(data);
// });

// Fetch in js ?? Aita muloto kono api theke data otoba bakend thake data anr somoy babohar h.
// function randomUser () {
//     fetch(`https://randomuser.me/api`).then(function (row) {
//         return row.json()
//     }).then(function (data) {
//         console.log(data);
//     }).catch(function () {
//         console.log('No Data Found')
//     })
// }
// randomUser(); 

// async function myFunction() {
//     return 'hello';
// }
// console.log(myFunction());

// function myFunction() {
//     return Promise.resolve('hello');
// }
// console.log(myFunction());

async function randomUser () {
    let urlAPI = await fetch(`https://randomuser.me/api`);
    let rowData = await urlAPI.json();
    console.log(rowData);
    console.log(`${rowData.results[0].name.title} ${rowData.results[0].name.firt} ${rowData.results[0].name.last}`)
    console.log(`${rowData.results[0].gender}`)
}
randomUser(); 