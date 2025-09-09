const name = "Pranay ";
const repoCount = 20

// console.log(name + repoCount + " value");

console.log(`hello my name is ${name} and my repo cout is ${repoCount}`);

const gameName = new String('Pranay Ganesh Pawar')
console.log(typeof gameName);
console.log(gameName);
console.log(gameName[0]);
console.log(gameName.__proto__);

console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.charAt(5));
console.log(gameName.indexOf('y'));

const newString = gameName.substring(0, 6);
console.log(newString);

const newString1 = gameName.slice(7, 12);
console.log(newString1);

const newString2 = gameName.slice(-12, 6);
console.log(newString2);

const newString3 = "     Pranay      "
console.log(newString3);
console.log(newString3.trim());


const url = "https://Pranay.com/pranay%20pawar";
console.log(url);

let newurl = url.replace('%20', '_');
console.log(newurl);

console.log(url.includes('pranay'));
console.log(url.includes('pannu'));

console.log(gameName.split(' '));












