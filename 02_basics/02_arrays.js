const marvel_heros = ["thor", "Ironman", "hulk", "spiderman"]
const dc_heros = ["aquaman", "superman", "batman", "flash"]

// console.log("before push", marvel_heros);

// marvel_heros.push(dc_heros) // make changes in existing array  and add another whole array element in existing array

// console.log("after push", marvel_heros);

// console.log(marvel_heros[4]);
// console.log(marvel_heros[4][3]);

// const all_heros = marvel_heros.concat(dc_heros)   // concat return a new array so we stored it in new variable
// console.log(all_heros);

// const all_new_heros = [...marvel_heros, ...dc_heros] // it spread all element in array
// console.log(all_new_heros);

// const another_array = [1, 2, 3, [4, 5, 6], 7, [8, 9, [10, 11, 12]]]

// console.log(another_array);

// console.log(another_array[5][2][2]);

// const real_another_array = another_array.flat(Infinity)   //flat return a new array so we stored it in new variable

// console.log(real_another_array);

// console.log(real_another_array[11]);

console.log(Array.isArray("Pranay")); //checks this name array is available or not
console.log(Array.from("Pranay"));    //creates a array
console.log(Array.from({name: "Pranay"})); // interesting

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3)); // return new array from element

