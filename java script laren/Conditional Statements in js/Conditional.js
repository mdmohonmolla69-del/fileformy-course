// Conditional Statements in js 
// tin ta condition nia kaj korte besi babohar korte hoy if and else or else if 

let age = 19;

if (age > 41) {
  console.log('you r enget');
} else if (age > 18) {
  console.log('Your new an eight year old');
} else {
  console.log('Your are old');
}

let catagory = 'bike';
let cartype;


// onek besi condition nia kajer katre ai switch ar babohar kortte hoy 

switch (catagory) {
  case 'bike':
    cartype = 'This is a bike';
    break;
  case 'car':
    cartype = 'this is a car';
    break;
    default:
      cartype = 'Unknoen Car Type';
}

console.log(cartype);