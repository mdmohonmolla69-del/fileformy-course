// DOM Part 2 IN JS
// Add text inside tags
let headTitle = document.querySelector('h1');
// headTitle.innerText = 'Hello procoder';
headTitle.innerText = headTitle.innerText + ' Procoder';

// Change text
// let boxes = document.querySelectorAll('.box');
// boxes[0].innerText = 'New Text';
// boxes[1].innerText = 'New Text';

// let newNum = 1;
// for(box of boxes) {
//     box.innerText = `Box No ${newNum}`
//     newNum++;
// }

// Create Element Button
let lernBtn = document.createElement('button');
lernBtn.innerText = 'Lern More';

let heroArea = document.querySelector('.hero');
heroArea.append(lernBtn); //last
// heroArea.prepend(lernBtn); //Fast
// heroArea.before(lernBtn); //before heroarea ar bahire upore
// heroArea.after(lernBtn); //after heroarea ar bahire niche

// Add Element
// function addFruits(nameFruits) {
//     const li = document.createElement('li');
//     li.innerHTML = `${nameFruits}`;

//     document.querySelector('ul').appendChild(li);
// }
// addFruits('Orange');
// addFruits('Graps');

// Optimized
function addFruitsOp(nameFruits) {
    const li = document.createElement('li');
    li.appendChild(document.createTextNode(nameFruits));

    document.querySelector('ul').appendChild(li);
}
addFruitsOp('Orange');
addFruitsOp('Graps');

// Edit
const editFruits = document.querySelector('li:first-child');
// console.log(editFruits);
// editFruits.innerText = 'Bluebrry';
editFruits.textContent = 'Bluebrrys';


const newFruits = document.createElement('li');
newFruits.textContent = 'Strawberry';

editFruits.replaceWith(newFruits);


// Edit whit Tag 
const editTag = document.querySelector('li:last-child');
editTag.outerHTML = '<p>Lemon</p>';

// Remove 
// editTag.remove();