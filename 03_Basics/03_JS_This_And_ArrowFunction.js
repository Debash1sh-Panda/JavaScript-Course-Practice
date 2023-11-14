const user = {
    username: "Debasish",
    price: 199,

    welcomeMessage: function() {
        console.log(`${this.username}, welcome to website`);
        console.log(this);
/*
here console.log(this) will print the current object value before and after change

Debasish, welcome to website
{
  username: 'Debasish',
  price: 199,
  welcomeMessage: [Function: welcomeMessage]
}
Raja, welcome to website
{
  username: 'Raja',
  price: 199,
  welcomeMessage: [Function: welcomeMessage]
}
        */
    }
}


// user.welcomeMessage() // it will print Debasish, welcome to website
// user.username = "Raja"// it will print Raja, welcome to website
// user.welcomeMessage()

// console.log(this); // it will print {} empty object


// function Code() {
//     let username = "Debasish"
//     // console.log(this);
//     // console.log(this.username); it will print a undefined message coz in function we cann't use (this)  
// }
// Code()


//Anither way 
// const Code = function() {
//     let username = "Debasish"
//     console.log(this.username);// it also print a undefined message coz in function we cann't use (this)  
// }
// Code()

//If we print that statement by using => arrow function

const Code = () => {// Arrow function
    let username = "Debasish"
    //console.log(this.username);// it also print a undefined message coz in function we cann't use (this)  
}
Code()


// how to define =>
// = () => {}
// defination : const arrowfun= () => {}
const add = (num1,num2) => {
    return num1+num2;
}
console.log(add(2,4));

//if we donn't want to use return keyword then we follow this method
const sum = (num1,num2) => num1+num2
console.log(sum(2,4));

//alos this one if confused
//In caseof react this type use in several times
const mul = (num1,num2) => ( num1*num2 )
console.log(mul(2,4));

/*
NOTE:
if use {} then we must written the return keyword (Explicit return)
if use () then not need to use return keyword (Implicit return)
*/

// If we return an object then

// const div = () => {username:"Debasish"}
// console.log(div());// it will print an undefined message

const div = () => ({username:"Debasish"})
console.log(div()); // this will print { username: 'Debasish' }
