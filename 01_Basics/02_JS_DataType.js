"use strict"; // Treat all JS code as newer version

// alert("Hii Debasish"); // we are using node.js not browser

let name = "debasish";
let age = 21;
let isLoggedIn = false;
let YtVideo = null;
let City;

let person={
    name:"debasish",
    age:18,
    city:"Cuttack"
};

console.log(person) //{ name: 'debasish', age: 18, city: 'Cuttack' }

 /*
 
* number
* bigint
* string    => " "
* boolean   => true/false
* null      => standalone value
* undefined => not defined value
* symbol    => unique
* object    =>

 */

console.log(typeof(name))         //string
console.log(typeof(age))          //number
console.log(typeof(isLoggedIn))   //boolean
console.log(typeof(YtVideo))      //object
console.log(typeof(City))         //undefined
console.log(typeof(person))       //object