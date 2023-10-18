let score = "33abc";
let score1= null;
let score2= undefined;
let isScore= true;

console.log(typeof(score));
console.log(typeof score); // both are valied

let valueInNumber = Number(score); // it converted to Number (string=>Number)
console.log(typeof valueInNumber);
console.log(valueInNumber);  // it will give NaN(Not a Number)

// "33" => 33
// "33ab" => NaN


let isLoggedIn= 1;
let typeConverstionToBoolean = Boolean(isLoggedIn);
console.log(typeConverstionToBoolean); // it will converted into (Number=>boolean)
// 1 => true; 0 => false


let isLoggedIn2= "";
let typeConverstionToBoolean1 = Boolean(isLoggedIn2);
console.log(typeConverstionToBoolean1); 
// "" => false; "value" => true

let someNumber = 33;

let stringNumber = String (someNumber);
console.log(stringNumber); // 33
console.log(typeof stringNumber); // but type is String


console.log("1"+2);     //12
console.log(1+"2");     //12
console.log("1"+2+2);   //122
console.log(1+2+"2");   //32

//BODMAS rule

console.log( (3 + 4) * 5 % 4);  //3
console.log(+true);  //1
console.log(+"");    //0

let num1,num2,num3
num1=2;

num1++;
console.log(num1);

++num1;
console.log(num1);
