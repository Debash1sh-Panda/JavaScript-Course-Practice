const myArray = [1,2,3,4,5];
console.log(myArray[0]);

const myHeros = ["Iron Man", "Spider Man", "Captain America", "Hulk", "Black Panther"];
console.log(myHeros[1]);

const myArr2 = new Array(1,2,3,4,5);// It's another way to define an array in javascript 
console.log(myArr2[0]);


// Array Methods

// PUSH Method
myHeros.push("Wanda");
console.log(myHeros);

myArray.push(6);// this method is used for add values in an array 
myArray.push(7);
console.log(myArray);

myArray.pop();// this method will remove the last index's value 
console.log(myArray);

myArray.unshift(8);// this method add the value in the first index of an array, by using shifts conditon
console.log(myArray);

myArray.shift();// this method used to remove the unshift value as like pop()
console.log(myArray);

console.log(myArray.includes(3)); // return boolean value
console.log(myArray.indexOf(4)); // return the index positon of value

const newArr = myArray.join();// it used to convert array into string
console.log(myArray);
console.log(newArr);
console.log(typeof newArr); // String type


// slice() and splice()

const myn1 = myArray.slice(0,3);// it will return only the slicing part of an array from specific index and ignore the last value like 0,1,2
console.log("Before array:"+myArray);
console.log("Slice() :"+myn1);
console.log("After array:"+myArray);


const myn2 = myArray.splice(0,3);// it will return only the rest value in array and splice value will be removed 
console.log("Before array:"+myArray);
console.log("Splice() :"+myn2);
console.log("After array:"+myArray);
