// Singleton
// Objects.create  we talk about latter


//Objects literals
const mySymbol = Symbol("Key1");
console.log(typeof mySymbol);// type is Symbol

const mySymbol2 = Symbol("Key2");


const MyBiography ={
    mySymbol: "MyKey1",// it will print but type of this value is String not Symbol
    [mySymbol2]: "MyKey2",// in this case the type of value is Symbol by using []
    Name: "Debasish Panda",// keys: "values"
    Age: 21,
    Gender: "Male",
    G_Mail: "debasishpanda2036@gmail.com",
    Location: "Cuttack",
    Study: "MCA",
    isLogged: true,
    lastLogged: ["Sunday", "MOnday"],

    Greeting: function(){
       console.log("HELLO DEAR DEBASISH");
    },
    

    "Hobby": "Photography and Coding"// in this case we can't access by using (.)
};

// we can acces those values by using Object.key
console.log("My Gender is : " + MyBiography.Age);
//OR
console.log(`My name is ${MyBiography.Name}`);
//OR
// console.log(MyBiography[G_Mail]);//ReferenceError: G_Mail is not defined coz it is a String
console.log(MyBiography["G_Mail"]);

console.log(MyBiography["Hobby"]); // we can access that type of condition by using this rule

// // In case of Symbol()
console.log("It's not a type of Symbol  "+MyBiography.mySymbol);
console.log(typeof MyBiography.mySymbol); //String

console.log(MyBiography[mySymbol2]);//When we console.log(MyBiography); then we will get the actual type as [Symbol(Key2)]: 'MyKey2'
// console.log(MyBiography);

// Both are correct way to change Hobby Name
MyBiography.Hobby= "Dancing and painting also";
console.log(MyBiography.Hobby);


MyBiography["Hobby"]= "Dancing and painting also";
console.log(MyBiography["Hobby"]);

// Object.freeze(MyBiography); // This method use for freeze your Object or constant all Objects value

MyBiography.Age = 22;
console.log(MyBiography.Age); //It will print the Original value/ freez value

MyBiography.Greeting(); // Calling the Greeting()
console.log(MyBiography.Greeting());// it will print the console value with a Undefined message

MyBiography.GreetingTwo =function(){
    console.log(`I AM A ${this.Study} STUDENT`);// this is used for acces current object value
 };
MyBiography.GreetingTwo();
