//IIFE stands for: Immediately Invoked Function Expressions

// function Chai() {
//     console.log(`Simple Function`);
// }
// Chai()

// IIFE logic () ()

/*
it will throw an error because of ;
(function Chai() {
    console.log(`Simple Function`);
}) ()

(function aurCode() {
    console.log("Welcome debasish");
}) ()
*/

(function Chai() {
    console.log(`Simple Function`);
}) ();

// it is know as named IIFE
(function aurCode() {
    console.log("Welcome debasish");
}) ();
//similar like aurcode()

//now it will printed correctly with output


// IIFE by using => 

(() => {
    console.log("using arrow function");
}) ();

((number) => {
    console.log(`Your number is ${number}`);
}) (999);
// similar like functionname(999)

(function similar(name) {
    console.log(`both are ${name}`);
})('Similar')
// like similar(Similar)
