//var c = 300
let a = 23
if (true){
    let a = 10
    const b = 20
    //console.log("INNER: ", a);
    
}


// console.log("My age is ",a);
// console.log(`My age is ${a}`);
//console.log(b);


function one(){
    const username = "Pranay"

    function two(){
        const website = "youtube"
        console.log(username);
    }
    // console.log(website);

    two()
    
}

// one()

if(true){
    const username = "Pranay"
    if(username === "Pranay"){
        const website = " Youtube"
        // console.log(username + website);
    }
    // console.log(website);
}

// console.log(username);

// ++++++++++++++++++++++++++++ Interesting +++++++++++++++++++++++++++

console.log(addone(5))

function addone(num){
    return num + 1
}



console.log(addTwo(5));

const addTwo = function(num){
    return num + 2
}


