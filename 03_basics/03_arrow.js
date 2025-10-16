const user = {
    username : "pranay",
    fees : 999,

    welcomeMessage : function(){
        console.log(`${this.username} , welcome to the website`);
        console.log(this);
        
    }
}

// user.welcomeMessage()
// user.username = "Pannu"
// user.welcomeMessage()

// console.log(this);


// function chai(){        // We can not use this keyword in function
//     console.log(this);  // it only work with object
// }

// chai()

// const chai = function(){      // here again we are not able to use this keyword in function which is stored in variable
//     let username = "Pranay"
//     console.log(this.username);   // opt is undefined
// }

// chai()



const chai = () => {      // here again we are not able to use this keyword in arrow function
    let username = "Pranay"
    console.log(this.username);   // opt is undefined
    console.log(this);   // opt is empty {}
    
}

// chai()

// const addTwo = (num1, num2) => {   // basic arrow function
//     return num1 + num2;    // if we write curly braces {} we need to write return 
// }                              // explicit return

// const addTwo = (num1, num2) => num1 + num2   // emplicit return

// const addTwo = (num1, num2) => (num1 + num2)    // if we write paranthesis () we does not need to write return 


// const addTwo = (num1, num2) => {username : "Pranay"}  // If we want to return object not able to use like this because we need to write that in Paranthesis ()

const addTwo = (num1, num2) => ({username : "Pranay"})   // we are returning object like this with the help of parathesis ()

console.log(addTwo(5, 2));


