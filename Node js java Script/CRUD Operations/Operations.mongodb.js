// // create 
use("CruDb")
// db.createCollection("courses")
// db.courses.insertOne({
//     name: "Mohon free courses",
//     price: 0,
//     assignments: 12,
//     projects: 45
// })

// db.courses.insertMany([
//     {
//         name: "Mohon free courses",
//         price: 0,
//         assignments: 12,
//         projects: 45
//     },
//     {
//         name: "Mohon free courses",
//         price: 0,
//         assignments: 12,
//         projects: 45
//     },
//     {
//         name: "Mohon free courses",
//         price: 0,
//         assignments: 12,
//         projects: 45
//     },
//     {
//         name: "Mohon free courses",
//         price: 0,
//         assignments: 12,
//         projects: 45
//     },
//     {
//         name: "Mohon free courses",
//         price: 0,
//         assignments: 12,
//         projects: 45
//     }
// ])

// read 
// let a = db.courses.findOne({price: 0})
// let b = db.courses.find({price: 0})
// console.log(a)
// console.log(a.count())
// console.log(a.toArray())

// update 
db.courses.updateOne({price: 0},
{$set:{price: 100}})

db.courses.updateMany({price: 0},
{$set:{price: 1000}})

// delete 

db.courses.deleteOne({price: 100})
db.courses.deleteMany({price: 1000})

// https://www.w3schools.com/mongodb/mongodb_query_operators.php