// Singleton 
//Object.create

// object literals

const mySym = Symbol("key1")

const jsUser = { 
    name: "Pranay",
    "full name": "Pranay Pawar",
    [mySym]: "mykey1",
    age: 23,
    location: "Sillod",
    email: "pranaypawar9899@gmail.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}

// console.log(jsUser.email);   // we are accessing object with the help of objet
// console.log(jsUser["email"]);
// //console.log(jsUser.full name); // Not allowed You can't access like this
// console.log(jsUser["full name"]);
// console.log(jsUser[mySym]);

jsUser.email = "Pannu@gmail.com"    //we can change the value of object like this

// Object.freeze(jsUser)  //Here we are freezing object that's why now we are not able to change any any value of object 

jsUser.email = "Pannu@yahoo.com" 

// console.log(jsUser);

jsUser.greeting = function(){
    console.log("Hello JS user");
}

jsUser.greetingtwo = function(){
    console.log(`Hello JS user, ${this.name}`);
}

console.log(jsUser.greeting());
console.log(jsUser.greetingtwo());
