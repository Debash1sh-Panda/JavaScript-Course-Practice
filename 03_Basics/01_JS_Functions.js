function MyFunction (){
    console.log("D");
    console.log("E");
    console.log("B");
    console.log("A");
}

// MyFunction it is a reference
// MyFunction();// calling a function
// console.log(MyFunction()); it will print value with a undefined message

// One way
function addTwoNumber() {
    let a = 10;//local variables
    let b = 20;
    console.log(a+b);
}
// addTwoNumber()

// TWo way
function TwoNumber(num1,num2){// whatever we take input in function it know as function parameter 
    console.log(num1 + num2);
}

// TwoNumber(10,20);//30  whatever we pass value, in time of call a function is know as function argument
// TwoNumber(10,"20");//1020
// TwoNumber(10, null);//10
// TwoNumber(10, "a");//10a



//Three way
function sumNumbers1(num1,num2) {
    let result1 = num1+num2;
    return result1;
}

const result1 = sumNumbers1(2,4);
// console.log("result is :", result1);
// In case of return we will use console for print the value


//Four way
function sumNumbers(num1,num2) {
    return num1+num2;
}

const result = sumNumbers(2,5);
// console.log("result is :", result);

// function loginUserMessage(username){
//     return `Hay ${username} you just logged in !!`;
// }

function loginUserMessage(username = "panda"){// we will give a default value
    // if(username === undefined){
    //     return`enter valid name`
    // }
    //both conditions are same
    if(!username){
        return`enter valid name`
    }
    return `Hay ${username} you just logged in !!`

}
console.log(loginUserMessage())
console.log(loginUserMessage("Debasish"))

function calculateCartprice(num) {
    return num
}

console.log(calculateCartprice(100)) //it will print a single value as 100
console.log(calculateCartprice(100,200,300)) // it will also take the first value
// if we wants to take whole argument value in a single parameter, 
// then we use REST operater (...value)

function restOperater(...num){
    return num;
}
console.log(restOperater(200,300,325,400)); // it will print whole vlaue [ 200, 300, 325, 400]


// in case of Object

const objFun = {
    username: "Debasish panda",
    password: 1234321
}

function ObjFunction(anyObject) {

    console.log(`user name is ${anyObject.username} and password is ${anyObject.password}`);
    
}

// ObjFunction(objFun) pass the object into a function
// it's OP will br user name is Debasish panda and password is 1234321


// we can also pass object in this way
ObjFunction({
    username: "raja",
    password: 123456
})//it's OP will be user name is raja and password is 123456


const myArray = [100, 200, 300, 400]

function myArrayFunction(anyName) {
    
    return anyName[2]
}

console.log(myArrayFunction(myArray));//OP- 300

console.log(myArrayFunction([100,200,500,600]));//OP- 500
