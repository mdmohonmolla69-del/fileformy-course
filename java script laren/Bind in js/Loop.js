// bind Method

const greenLine = {
    bus: 'Green Line Paribahan',
    bCode: 'GL',
    ticket: [],
    book(setNumber, name) {
        console.log(`${name} booked a seat on ${this.bus} ticket ${this.bCode}-${setNumber}`);
        this.ticket.push({ ticketInfo: `${this.bCode}-${setNumber}`, name });
    }
}
greenLine.book('C1', 'Molla ')
greenLine.book('C2', 'King ')
console.log(greenLine);

const molla = {
    bus: 'Molla Bus',
    bCode: 'MB',
    ticket: [],
};

const book = greenLine.book;

// book ('B1', 'Sultan');
// call Matod 

book.call(molla, 'B1', 'Sultan');
book.call(molla, 'B2', 'Korim');
console.log(molla);

const king = {
    bus: 'King SWO',
    bCode: 'KW',
    ticket: [],
    book(setNumber, name) {
        console.log(`${name} booked a ticket on ${this.bus} ticket ${this.bcode}-${setNumber}`);
        this.ticket.push( {ticketInfo: `${this.bCode}-${setNumber}`, name})
    }
}

king.book('B3', 'Roku');

console.log(king)


// apply Matod 

const tiketInfoN = ['B3', 'e'];
book.apply(molla, tiketInfoN);


// bind    
// const ticketN = book.bind(molla);
// ticketN('E1', 'Muskan')
const ticketN = book.bind(molla, 'E1');
ticketN('Muskan');
ticketN('Meherjan');

// const person = {
//     firstName: 'Molla',
//     lastName: 'San',
//     display: function(){
//         return this.firstName + ' ' + this.lastName;
//     },
// };

// const display = person.display();
// console.log(display);


// const person = {
//     firstName: 'Molla',
//     lastName: 'San',
//     display: function(){
//         console.log(this.firstName + ' ' + this.lastName);
//     },
// };

// const display = person.display;
// console.log(setTimeout(display.bind(person), 2000));

greenLine.buss = 20;
greenLine.buyBus = function() {
    console.log(this);
    this.buss++;
    console.log(this.buss);
}
// greenLine.buyBus();
// document.querySelector('.btn').addEventListener("click", greenLine.buyBus);
document.querySelector('.btn').addEventListener("click", greenLine.buyBus.bind(greenLine));

// Partial application
const addTAX = (rate, value) => value + (value * rate) / 100;
console.log(addTAX(10, 100));

const addVAT = addTAX.bind(null, 15);
console.log(addVAT(100));
