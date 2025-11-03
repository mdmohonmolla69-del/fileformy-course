// Java Script Math

// let num = 30.0000000001;

// // If Need Round number 
// console.log(Math.round(num));
// console.log(Math.ceil(num));
// console.log(Math.floor(num));

// // Squre value 
// console.log(Math.pow(4, 3));

// // other value 
// console.log(Math.sin((0 * Math.PI) / 180));

// let upperValue = 6;
// let lowerValue = 1;
// let resultValue = Math.ceil(Math.random() * upperValue);
// console.log(resultValue);

function randomNumber(){
    let randomNumbers = Math.ceil(Math.random() * 100);
    let lab = randomNumbers;
    document.getElementById('number').innerHTML = "Yur Number Is: " + lab + "%";
}

