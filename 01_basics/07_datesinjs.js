// Dates in js

let myDate = new Date();
// console.log(myDate);
// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toISOString());
// console.log(myDate.toJSON());
// console.log(myDate.toLocaleDateString());
// console.log(myDate.toLocaleString());
// console.log(myDate.toTimeString());
// console.log(myDate.toUTCString());

//let myCreatedDate = new Date();
//let myCreatedDate = new Date(10, 8, 2025); // not allowed like this
//let myCreatedDate = new Date(2025, 8, 10); // format like this (YY-MM-DD) but output in toLocaleDateString is (MM-DD-YY) 
let myCreatedDate = new Date("10-09-2025");  // format like this (MM-DD-YY)
//let myCreatedDate = new Date("2025-10-09"); //format like this (YY-MM-DD) but output in toLocaleString is (MM-DD-YY) 
// console.log(myCreatedDate.toLocaleDateString());
// console.log(myCreatedDate.toDateString());
// console.log(myCreatedDate.toLocaleString());

let myTimeStamp = Date.now()

// console.log(myTimeStamp);
// console.log(myCreatedDate.getTime());
// console.log(Math.floor(Date.now()/1000));

let newDate = new Date()
// console.log(newDate.getDate());
// console.log(newDate.getMonth() + 1);
// console.log(newDate.getDay());

// console.log(`Today is ${newDate.getDate()} `);
console.log(`Today is ${newDate.toLocaleString('default', {
    weekday: "long"
})}`);


