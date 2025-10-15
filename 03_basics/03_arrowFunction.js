const user = {
    username : "pranay",
    fees : 999,

    welcomeMessage : function(){
        console.log(`${this.username} , welcome to the website`);
        console.log(this);
        
    }
}

user.welcomeMessage()
user.username = "Pannu"
user.welcomeMessage()

console.log(this);
