// DOM IN JS

// document.querySelector('h1').innerText = 'Subscribe';
// document.querySelector('h1').innerText;
// ('Welcome');
// document.querySelector('h1').textContent;
// ('Welcome Ali');
// document.querySelector('h1').innerHTML;
// ('Welcome <span style="display: none;">Ali</span>');


document.querySelector('h1').innerText = 'Molla'; //.innerHtml, InnerText, innerTextContent

const styleBox = document.querySelector('#box');
styleBox.style.backgroundColor = 'red';
styleBox.style.width = '100px';
styleBox.style.height = '100px';

const menuStyle = document.querySelectorAll('a');

menuStyle.forEach(function (i) {
    i.style.color = 'red';
    i.style.fontSize = '24px';
});


// htmlCollaction ar jokon kono kisu asbe tar sathe sobkisu kora jaina tai html ke arry te convat korte hoy !

const cusClass = document.getElementsByClassName('t');
const convetClass = Array.from(cusClass);
// for (let i = 0; i < cusClass.length; i++) {
//     console.log(cusClass[i]);
// }

convetClass.forEach(function (i) {
    i.style.backgroundColor = '#262626';
    i.style.margin = '0 0 15px';
    i.style.padding = '10px 20px';
});

// document.querySelector('.box').id;
// document.querySelector('.box').className;

document.querySelector('.box').getAttribute('id');
document.querySelector('.cta').setAttribute('class', 'text-white cta');
