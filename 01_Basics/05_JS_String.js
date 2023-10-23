//Before start lets talk about STACK and HEAP
//Stack => store (Primitive datatype)
//
//Heap  => store (Non-Primitive datatype)


const name = "Debasish";

const surename= "panda";

console.log(`your full name is ${name} ${surename}`);

const stringValue = new String ("Debasish");

console.log(stringValue[0]);
console.log(stringValue.__proto__);//double underscore
console.log(stringValue.length);
console.log(stringValue.toUpperCase(stringValue));
console.log(stringValue.charAt(2));
console.log(stringValue.indexOf('e'));

console.log(stringValue.substring(0,3));// we can not use negative value 
console.log(stringValue.slice(0,-4));// we can use negative value (coz it ignore negative value)

const nesstr = "  debasish  ";
console.log(nesstr);
console.log(nesstr.trim());// it will remove the space from starting and ending of the string
// NOTE => trim() it removes only the white spaces from the string and
// there are two more metod as like trimFirst() and trimLast() to perform there specific task

const url = "https://www.birajaroadline.com";
console.log(url);
console.log(url.replace("line","lines"));

console.log(url.includes("biraja"));//true 
console.log(url.includes("Biraja"));//False => it is a case sensitive method

console.log(url.split('.')); //OP-[ 'https://www', 'birajaroadline', 'com' ]
