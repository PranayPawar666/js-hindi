function sayMyName(){
    console.log("P");
    console.log("R");
    console.log("A");
    console.log("N");
    console.log("A");
    console.log("Y");
}

//  sayMyName      // This is only reference
//  sayMyName()    // This is execution

// function addTwoNumbers(number1, number2){
//     console.log(number1 + number2);
// }

function addTwoNumbers(number1, number2){
    return number1 + number2
}

const result = addTwoNumbers(5, 12)

// console.log("Result: ", result);


function loginUserMessage (username = Sam){  // here we declared default value
    if(username === undefined){  //   if(!username){}  we can also use this
        console.log("Please enter a username");
        return
    }
return `${username} just logged in`
}

// console.log(loginUserMessage("Pranay")); // here we pass parameter

// console.log(loginUserMessage()); // this is empty parameter

function calculateCartPrice(val1, val2, ...num1){   //(...) is here a rest operator it combines all value in array
    return num1
}

// console.log(calculateCartPrice(100, 200, 500, 2000));

const user = {
    username: "Pranay",
    age:23
}

function handleUserObject(anyobject){
    console.log(`Hello my self ${anyobject.username} and I'm ${anyobject.age} years old`);  
}

//handleUserObject(user)  // here we pass object as aargument
handleUserObject({
    username: "Pannu",
    age:24
})

const myNewArray = [100, 200, 400, 600]

function handleArray(getarray){
    return getarray[0]
}

//console.log(handleArray(myNewArray));  // here we pass array as argument

console.log(handleArray([100, 200]));
