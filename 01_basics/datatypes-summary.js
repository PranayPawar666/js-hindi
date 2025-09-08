// Primitive Datatypes

// 7 types : string, number, Boolean, null, undefined, Symbol, BigInt

const score = 100;
const scoreValue = 100.3;

const isloggedIn = true;
const outsideTemp = null;
let usermail;


const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId);

const bigNumber = 123456789123456n
console.log(typeof bigNumber);



// Non primitive Datatypes

// arrays, Objects, functions

const hero = ["Hanuman", "Shaktiman", "Naagraj"] //This is array

let myObj ={             // This is Object //
    name: "Pranay",
    age: 23,
}

const myfunction = function(){       // This is function
    console.log("Hello World");
}

console.log(typeof hero);  // output is object
console.log(hero);
console.log(typeof myObj);  // output is object
console.log(myObj);
console.log(typeof myfunction);   // output is function but also known as object function
console.log(myfunction);



