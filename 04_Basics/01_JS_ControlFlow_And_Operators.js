//@shorcut key for copy paste shift + alt + down arrow


//CALL STACK 
//1. Global Execution
//2. Memory Phase
//3. Exection Phase

//-------------------------------------------------------

//Conditonal operator < > <= >= != == !== ===
//if


if (2 == "2"){
    console.log("HII");
}
// it will give true but 
if (2 === "2"){
    console.log("HII");
}
// it will give false coz === it check the type

//if else
const temp = "INDIA"
if (temp === "INDIA"){
    console.log("JAY HIND");
}else{
    console.log("Hello");
}

//shorthand notation
let temp1 = 500
 if (temp1 == 500) console.log("payment succesfull");


 // if else ladder 
//  if (condition) {
    
//  }else if (condition) {
    
//  }else if (condition) {
    
//  } else {}


//Logical Operator && ||

// if (val1 && val2) {
    
// }
// if (val1 || val2) {
    
// }


//Switch Statement
 const key = 2
switch (key) {
    case 1:
        //console.log("Welcome");
        break;
    case 2:
        //console.log("Welcome you");
        break;
    case 3:
        //console.log("Welcome sir");
        break;

    default:
        //console.log("BYE");
        break;
}

// truthy or falsy value

const useremail= "d@debasish.ai"

if (useremail) {
    console.log(`email is ${useremail}`);
} else {
    console.log("sorry !!");
}
// op=> email is d@debasish.ai

const useremail2= ""

if (useremail2) {
    console.log(`email is ${useremail2}`);
} else {
    console.log("sorry !!");
}
//op=> sorry !!

const useremail3= []

if (useremail3) {
    console.log(`email is true`);
} else {
    console.log("sorry !!");
}
//op=> email is true


// falsy values
// false, 0, -0, BigInt 0n, "", null, undefined, NaN 

//truthy values
//"0", "false", " ", [], {}, function(){}

const emptyobj = {}

if(Object.keys(emptyobj).length === 0){
    console.log("Empty objects");
}

// Nullish Coalescing Operator (??): null undefined

let val;
// val = 5 ?? 10
// console.log(val); //op=> 5

// val = null ?? 10
// console.log(val); //op => 10

// val = undefined ?? 15
// console.log(val); // op=> 15

val = null ?? 10 ?? 20
console.log(val); //op => 10


//Ternairy operator (?:)

//condition ? true : false;
