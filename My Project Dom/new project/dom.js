
//  Array thike data nia dakano 

// const quotes = [
// "The only way to do great work is to love what you do.",
// "Believe you can and you're halfway there.",
// "The future belongs to those who believe in the beauty of their dreams.",
// "Strive not to be a success, but rather to be of value.",
// ];

// const quoteElement = document.querySelector('#quote');
// const authorElement = document.querySelector('#author');
// const button = document.querySelector('#button');


// function autoQ () {
//     const quotesIndex = Math.floor(Math.random() * 4);
//     // console.log(quotesIndex);
//     quoteElement.textContent = quotes[quotesIndex];
// }
// autoQ ();
// button.addEventListener('click', autoQ);


// akon Object thike data nia dakano


// const quotes = [
//   {
//     quote: "The only way to do great work is to love what you do.",
//     author: "Steve Jobs"
//   },
//   {
//     quote: "Believe you can and you're halfway there.",
//     author: "Theodore Roosevelt"
//   },
//   {
//     quote: "The future belongs to those who believe in the beauty of their dreams.",
//     author: "Eleanor Roosevelt"
//   },
//   {
//     quote: "Strive not to be a success, but rather to be of value.",
//     author: "Albert Einstein"
//   }
// ];

// const quoteElement = document.querySelector('#quote');
// const authorElement = document.querySelector('#author');
// const button = document.querySelector('#button');


// function autoQ () {
//     const quotesIndex = Math.floor(Math.random() * quotes.length);
//     // console.log(quotesIndex);
//     quoteElement.textContent = quotes[quotesIndex].quote;
//     authorElement.textContent = quotes[quotesIndex].author;
// }
// autoQ ();
// button.addEventListener('click', autoQ);


//  Api thake data ane dakano 

const quoteElement = document.querySelector('#quote');
const authorElement = document.querySelector('#author');
const button = document.querySelector('#button');

const urlApi = 'https://api.api-ninjas.com/v1/quotes';

const keyApi = 'AuMWyHlmW8wIlxjJx3rmJA==gV0LTHNFcJfdJ8sW';

const getQuite = () => {
    fetch(urlApi, {
        headers: {
            'X-Api-Key': keyApi,
        }
    }).then(data => data.json())
      .then(item => {
        // console.log(item);
        quoteElement.textContent = item[0].quote;
        authorElement.textContent = item[0].author;
    }).catch(error => {
        console.error('error fsching Quotes', error)
    });
};

getQuite();
button.addEventListener('click', getQuite);