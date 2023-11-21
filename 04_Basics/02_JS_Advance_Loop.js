const Arr = [1,2,3,4,5,6]

//Syntax of Forof loop
// for (const iterator of object) {
    
// }
for (const scanArr of Arr){
    // console.log(scanArr);
}

const str = "Ram Ram BHAI Sareyane"
for (const scanStr of str) {
    // console.log(scanStr);
}


//Maps
const map = new Map()
map.set('IN', "India")
map.set('PAK', "Pakistan")
map.set('AFG', "Afganistan")
map.set('AUS', "Australia")
map.set('NZ', "Newzland")
map.set('SA', "South Africa")
map.set('ENG', "England")
map.set('BAN', "Bangladesh")
map.set('SL', "Sri Lanka")
map.set('NED', "Nether Land")

// console.log(map);

for (const key of map) {
    // console.log(key); // it will give op as like array in key value pair
}

for (const [key] of map) {
    // console.log(key); //in this case only key will print
}

for (const [key, value] of map) {
    // console.log(key, ':-', value); // all key and value will print
}
//but we cann't use foorin loop in case of MAP coz it uses only in looping structure
// for (const key in map) {
//     console.log(key);
// }


const  myObj = {
    name: "Debasish Panda",
    age: 21,
    Sex: "Male",
    City: "Cuttack",
    Occupation: "Student"
}

// in this case ForOf loop will not work 
// for (const key of [myObj]) {
//     console.log(key);
// }

//we use forin loop to print its key and value
for (const key in myObj) {
        // console.log(key);
    }

for (const value in myObj) {
        // console.log(myObj[value]);
    }

for (const both in myObj) {
        // console.log(`my ${both} is ${myObj[both]}`);
    }


const mystr =["java","js","html","css","sql"]
for (const key in mystr) {
        // console.log(key);//it will print index
        // console.log(mystr[key]);
    }

    
//using foorEach 

//in case of function
const marvel =["SpiderMan","IronMan","Thor","CaptainAmerica"]

marvel.forEach(function (value){
    // console.log(value);
});

//in caseof => 
marvel.forEach((value) => {
    // console.log(value);
})

const marvel2 =["SpiderMan","IronMan","Thor","CaptainAmerica"]

//Differnt way
function printMe(marvel2) {
    // console.log(marvel2);
}
marvel2.forEach(printMe)

//forEach also take more parameter as like
marvel2.forEach( (item, index, arr)=>{
    // console.log(item, index, arr);
})

//in case of object array
const objarr = [
{
    language:"Java",
    languageFileName:".java"
},
{
    language:"JavaScript",
    languageFileName:".js"
},
{
language:"Python",
languageFileName:".py"
}
]

objarr.forEach( (item)=>{
    console.log(item.language);
})
