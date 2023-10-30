const Marvel_heros = ["Thor", "Iron Man", "Spider Man"];
const Dc_heros = ["Super Man", "Flash", "Bat Man"];

// Concat() used for concatinate or merge two values
console.log(Marvel_heros.concat(Dc_heros));

// basically in javascript we use Spread technique (...Variable1, ...Variabl2) for concat 
console.log(...Marvel_heros, ...Dc_heros);
// OP- Thor Iron Man Spider Man Super Man Flash Bat Man
console.log([...Marvel_heros, ...Dc_heros]); 
//OP- [ 'Thor', 'Iron Man', 'Spider Man', 'Super Man', 'Flash', 'Bat Man' ]

Marvel_heros.push(Dc_heros);// Dc_heros array as a data in Marvel_heros 
console.log(Marvel_heros);
console.log(Marvel_heros[3]);
console.log(Marvel_heros[3][2]);
console.log(Marvel_heros.concat(Dc_heros));


// Here is another technique to concate many arrays by using flat() mrthod 

const all_flat = [1,2,3,[4,5,6],7,[8,9,[10,11]]];
console.log(all_flat);
// OP- [ 1, 2, 3, [ 4, 5, 6 ], 7, [ 8, 9, [ 10, 11 ] ] ]
// but when we use flat() in this case then....
const new_all_flat = all_flat.flat(3);
console.log(new_all_flat);
//OP- [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11 ]

console.log(Array.isArray("Debasish"));
console.log(Array.from("Debasish")); 
// from() is used to convert string to CharArray 
// ['D', 'e', 'b','a', 's', 'i','s', 'h']
console.log(Array.from(234));
// it will return an empty array [] => Interesting

let score1 = 90;
let score2 = 80;
let scoreN = 100;

console.log(Array.of(score1, score2, scoreN));
// OP- [90, 80, 100]
console.log(Array.of(234));
// OP- [ 234 ]
console.log(Array.of("234"));
/* The main difference between from() and of() is
*  form() is used to convert string to character array otherwise return an Empty array 
*  of() is used to make an Array of any value
*/
