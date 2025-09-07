   let score = "33";

// let score = "33abc";  //output after conversion NaN( Not a Number)
// let score = 33; //output after conversion number
// let score = null; //output after conversion 0 and type is object
// let score = undefined; //output after conversion NaN and type is undefined
// let score = true; //output after conversion 1 and type is boolean
// let score = "Pranay"; //output after conversion NaN and type is string

// console.log(typeof score);
// console.log(typeof(score));

 let ValueInNumber = Number(score); // conversion in Number

 console.log(typeof ValueInNumber);
 console.log(ValueInNumber);

let isLoggedIn = 1; // 1is true and 0 is false
// let isLoggedIn = "" //output is false
// let isLoggedIn = "hitesh" // output is true

let booleanIsLoggedIn = Boolean(isLoggedIn); // conversion in boolean
console.log(booleanIsLoggedIn);
console.log(typeof booleanIsLoggedIn);

let someNumber = 33;

let stringNumber = String(someNumber); // conversion in string
console.log(typeof stringNumber);
console.log(stringNumber);




