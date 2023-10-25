// *********NUMBER Datatypes**********

const balance = new Number(100);
console.log(balance);

console.log(balance.toString().length);
console.log(balance.toFixed(1));// it will be show like 100.0

const anotherBalance = 123.556;
console.log(anotherBalance.toPrecision(3));//124 // if our value is > decimal of 5 ex-(123.545) then it will print the precission +1 i.e 124

const hundred = 1000000;
console.log(hundred.toLocaleString());// by default OP => 1,000,000

console.log(hundred.toLocaleString('en-IN'));// 10,00,000

// *********MATH Datatypes**********

console.log(Math); // Math is a Object 
console.log(Math.abs(-5));// this no. will converted into +ve value and +ve value always be +ve
console.log(Math.round(4.3)); //if value greater than .5 or less than .5 then it will return the round value
console.log(Math.ceil(4.2)); // if your no. contain .value it will give you ceiling value 
console.log(Math.floor(4.2)); // it will take always floor (lowest)value 
console.log(Math.sqrt(4));//wil give square root value
console.log(Math.pow(2,4));// will give power of a number
console.log(Math.min(2,3,5,1,1,4));
console.log(Math.max(2,3,5,1,1,4));

console.log(Math.random()); // will give always a random value 
console.log((Math.random()*10) + 1); // will generate the less 0 values
console.log(Math.floor(Math.random()*10) + 1); // will generate the floor value (means single value)
// Random number between 10 - 20
const min = 10;
const max = 20;

console.log(Math.random() * (max - min + 1));
console.log(Math.floor(Math.random() * (max - min + 1)));
console.log(Math.floor(Math.random() * (max - min + 1)) + min);
