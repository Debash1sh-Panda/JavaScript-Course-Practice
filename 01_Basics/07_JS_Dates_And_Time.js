let myDate = new Date();
console.log(myDate);// will print (2023-10-25T14:22:10.268Z)

console.log(myDate.toString()); //will print (Wed Oct 25 2023 14:22:10 GMT+0000 (Coordinated Universal Time))
console.log(myDate.toDateString());// Wed Oct 25 2023
console.log(myDate.toTimeString());// 14:27:17 GMT+0000 (Coordinated Universal Time)
console.log(myDate.toISOString());// 2023-10-25T14:27:17.187Z
console.log(myDate.toJSON());// 2023-10-25T14:27:17.187Z
console.log(myDate.toLocaleString());// 10/25/2023, 2:27:17 PM
console.log(myDate.toLocaleDateString());// 10/25/2023
console.log(myDate.toLocaleTimeString());// 2:27:17 PM


console.log(typeof myDate); // Object

let myCreateDate = new Date(2023,9,25);
console.log(myCreateDate.toString());

let myCreateDate1 = new Date(2023,9,25,8,5);
console.log(myCreateDate1.toLocaleString());

let myCreateDate2 = new Date("2023-10-25");
console.log(myCreateDate2.toLocaleString());

let myCreateDate3 = new Date("10-25-2023");
console.log(myCreateDate3.toLocaleString());

let myTimeStamp = Date.now();
console.log(myTimeStamp);

// for find seconds
console.log(Date.now()/1000); // 1698245758.398
console.log(Math.floor(Date.now()/1000));// original seconds value (1698245758)

let newDate = new Date();
console.log(`The Month is ${newDate.getMonth()} and the Date is ${newDate.getDate()} and the day is ${newDate.getDay()}`);


console.log(newDate.toLocaleString('default',{
    weekday: "long",
    // weekday: "narrow", => it will show First letter of a Weekday
    // weekday: "short"  => it will show short name of a weekday
}));
