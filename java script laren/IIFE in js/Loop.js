// Immediately invoked function expressions (IIFE)

const aFunction = function(a, b) {
    console.log(`A simple Function ${a + b}`);
}
 aFunction(3, 5);
 aFunction(5, 8);


 (function (a, b) {
    console.log(a + b);
 })(4, 5);

 (function (a, b) {
    console.log(a + b);
 })(4, 5);

 ((a, b) => console.log(a + b))(3, 4);

//  Dom
(function() {
const h3 = document.querySelector('.h3');
const h4 = document.querySelector('.h4');
h3.style.backgroundColor = 'red';
h4.style.backgroundColor = 'green';
})();


const myModule = (function() {
    let privetVar = 'This is a Private Variable'
    function privetFun() {
        console.log('this is a privet function');
    }
    return {
        publicVar: 'This is a public variable',
        pubMethod: function() {
            privetFun();
            return ('This is a public Function');
        }
    }
})();

// console.log(myModule.privetVar); // Unaccessible
// console.log(myModule.privetFun()); // Unaccessible
console.log(myModule.publicVar); // Accessible
console.log(myModule.pubMethod())