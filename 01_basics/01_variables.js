const accountId = 160616;
let accountEmail = "pannu@gmail.com";
var accountPassword = "12345";
accountCity = "Chhatrapati sambhajinagar";
let accountState;

/// accountId = 01 //  Not allowed

accountEmail ="pp@gmail.com"
accountPassword = "010203"
accountCity = "Sillodkar"

console.log(accountId);

/*
Prefer not to use var
bacause of issue in block scope and functional scope
*/
console.table([accountId, accountEmail, accountPassword,accountCity, accountState])