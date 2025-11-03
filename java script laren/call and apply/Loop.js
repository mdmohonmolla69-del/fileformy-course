// call and apply Method

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