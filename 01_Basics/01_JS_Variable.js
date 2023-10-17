const accountId=101; // value is constant(if we declare or initialize once time, we can't change its value)
let accountEmail="debasissh@gmail.com"; // value can change but can't reInitialize by using same variable
var accountPassword="1234"; // value can redeclaire and reintialize by using same variable

accountCity ="Cuttack";// (Dynamic way) stop to declaire this type of declaration because it wull be give a bad impact for readable a code 

console.log(accountId);

let accountName;
accountEmail="deba@google.com";
accountPassword="23456";

console.log(accountName); //it will give an Undefined
console.table([accountId,accountEmail,accountPassword,accountCity]); // it will be print as a table formate because all are stored in an array structure


//let accountEmail="deba.crome.com"; it will also give you an Error
//var accountPassword="2355"; it can't give you an Error
//    accountId=1254; not aallowed (Error)
/*
Prefer not to use var
because of isssue in block scope and functional scope
*/