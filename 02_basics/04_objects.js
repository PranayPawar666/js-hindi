//const tinderUser = new Object() // this is singletone Object
 const tinderUser = {}     // this is non-Singletone Object

 tinderUser.id = "123abc"
 tinderUser.name = "Pranay"
 tinderUser.isLoggedIn = false

//  console.log(tinderUser);

const regularUser = {
    email: "pranaypawar9899@gmail.com",
    fullname:{
        userfullname:{
            firstname: "Pranay",
            lastname: "Pawar"
        }
    }
}

// console.log(regularUser);
// console.log(regularUser.fullname);
// console.log(regularUser.fullname.userfullname);
// console.log(regularUser.fullname.userfullname.firstname.toUpperCase());

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}
const obj3 = {5: "a", 6: "b"}

// const obj4 = Object.assign({},obj1, obj2, obj3)

const obj4 = {...obj1, ...obj2, ...obj3}

// console.log(obj4);

const users = [
    {
        id: 1,
        email: "pannu@gmail.com"
    },
    {
        id: 2,
        email: "devil@gmail.com"
    },
    {
        id: 3,
        email: "panla@gmail.com"
    }
]

console.log(users[1].email)

console.log(tinderUser);

console.log(Object.keys(tinderUser)); // To access all keys of object but give output in array

console.log(Object.values(tinderUser)); // To access all Values of object but give output in array

console.log(Object.entries(tinderUser)); // It creates every key value in array in that array the first property is always key and second property will be value
 
console.log(tinderUser.hasOwnProperty('isLoggedIn'));
