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

console.log(loginUserMessage()); // this is empty parameter
