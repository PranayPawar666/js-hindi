// Array
const myArr = [1, 2, 3, 4, 5]

const heros = ["Hanuman", "Shaktiman", "Nagraj"]

const myArr2 = new Array(1, 3, 5, 7, 9)

//console.log(myArr);
// console.log(heros[1]);
// console.log(myArr2[4]);

// Array Methods

// myArr.push(6);       // To add value in array
// console.log(myArr);
// myArr.pop();         // No argument Needed just remove the last element from array
// console.log(myArr);
// myArr.unshift(6)        // To add element on first place of array that's why we need to change all element place
// console.log(myArr);
// myArr.shift()        // No argument Needed just remove the first element from array
// console.log(myArr);

// Includes checks the value is available in array or not and give result in boolean(true OR false)
// console.log(myArr.includes(5));      
// console.log(myArr.includes(10));

// indexOf give us the index of value if value is available OR if value is not Available it gives index always -1.
// console.log(myArr.indexOf(5));
// console.log(myArr.indexOf(8));

// join method adds all the element of an array into stirng and separate them by special separator
// const newArr = myArr.join()

// console.log(typeof myArr);
// console.log(myArr);
// console.log(typeof newArr);
// console.log(newArr);

// slice , splice   Methods

console.log("A", myArr);

// In slice Method it slice the array but doesnot change in main array
const newArr1 = myArr.slice(1, 3);  
// it does not include range element in it
console.log(newArr1);
console.log("B", myArr);

// In splice Method it slice the array and also change it in main array
const newArr2 = myArr.splice(1, 3);  
// it include range element in it
console.log(newArr1);
console.log("C", myArr);

