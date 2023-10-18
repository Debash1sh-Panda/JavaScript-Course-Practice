// >, >=, <, <=, ==, !=

//dont use this type of code , just understand 
console.log("2" > 1);  //true
console.log("02" > 1); //true

console.log(null > 0)  //false
console.log(null == 0) //false
console.log(null >= 0) //true


// === (Strict equal) it check the datatype

console.log(2 === 7);   //false
console.log("2" === 7); //false

console.log("2" === 2); //false
console.log(2 === 2);   //true

 
//primitive
// String, number, Boolean, Null, undefined, Symbol

//non-primitive(Reference)
//Array, Objects, Functions

//Symbole => it will sdtore unique value
const id = Symbol('123')
const anotherid = Symbol('123')

console.log( id === anotherid)  //false

const bigNumber = 34562746453246n  //BigInt datatype (12344n)

const heros = ["ironMan", "BatMan"];

function myFunction(){              // Declaire a Function
    console.log("Hello Debasish!");
}

myFunction();                       // Calling aFunction

console.log(typeof myFunction);     //function
