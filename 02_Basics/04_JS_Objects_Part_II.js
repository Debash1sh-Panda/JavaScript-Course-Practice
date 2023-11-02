const tinderUser = new Object(); // singeleton object
const tinderUser2 = {};

// console.log(tinderUser); //OP- {}
// console.log(tinderUser2);//OP- {}

tinderUser2.id = 10123;
tinderUser2.name ="Debasish Panda";
tinderUser2.isLogged = true;

// console.log(tinderUser2);// OP- { id: 10123, name: 'Debasish Panda', isLogged: true }

// nested Object
const firstObject = {
    gmail: "debasispanda2036@gmail.com",
    secondObject: {
        thirdObject:{
            firstname: "Debasish",
            lastname: "Panda"
        }
    }
}

// console.log(firstObject.secondObject.thirdObject.firstname);


const obj1 = {1: "a", 2: "b"};
const obj2 = {3: "c", 4: "d"};
const obj3 = {5: "e", 6: "f"};

// const obj4 = {obj1,obj2,obj3};//  not recommend to use

// by using assign() to concate all objects

// const obj4 = Object.assign(obj1, obj2, obj3); // it will be used 
// const obj4 = Object.assign({}, obj1, obj2, obj3);
// {} used to specify that all objects will stored in {}, it will also be use

const obj4 = {...obj1, ...obj2, ...obj3};// it is the most popular uses technique, spread technique
// console.log(obj4);


const ObjArray = [
    {
        id: 101,
        name: "amrit"
    },
    {
        id: 102,
        name: "abhi"
    },
    {
        id: 101,
        name: "bishal"
    }
];

// console.log(ObjArray[0].name); //amrit


// console.log(tinderUser2);// OP- { id: 10123, name: 'Debasish Panda', isLogged: true }
// console.log(Object.keys(tinderUser2)); //OP- [ 'id', 'name', 'isLogged' ] its return type is an array
// console.log(Object.values(tinderUser2)); //OP- [ 10123, 'Debasish Panda', true ]
// console.log(Object.entries(tinderUser2));// OP- [ [ 'id', 10123 ], [ 'name', 'Debasish Panda' ], [ 'isLogged', true ] ]

// console.log(tinderUser2.hasOwnProperty('isLogged')); // true
// console.log(tinderUser2.hasOwnProperty('isLoggedin')); // false
