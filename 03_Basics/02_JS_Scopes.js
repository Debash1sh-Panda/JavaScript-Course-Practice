//let  c = 30; it will give error coz of var

if(true){
    let a = 10
    const b = 20
    var c = 30
    // console.log(a);// not give any error
    // console.log(b);// not give any error
    // console.log(c);
}

// console.log(a); it will gives an error
// console.log(b); it will also gives an error
// console.log(c); //but var will not give an error thats why we do not use VAR

function One(){//parent => cann't access child value
    const username = "Debasish panda"

    
    function Two() {//Child => can access parent value
        const webSite = "DilyFact HUB"
        console.log(username);//3rd value printed
    }

    //console.log(webSite);// it will give an error coz parent func cann't access the child func value
    
    Two()// 2nd call
}

One() // 1st call


//========================================================

if (true) {
    const username = "Debasish"

    if (username === "Debasish") {
        const website = "DailyFact HUB"

        console.log(`username is ${username} and website is ${website}`);
    }

    //console.log(website); give an error
}

//console.log(username);


//++++++++++++++++++++++ INTERESTING ++++++++++++++++++++++++++++++++++++++

//AddOne(5) => it will not give any error
function AddOne(num) {
    return num + 2
}
let result = AddOne(5)
console.log(result);

//AddTwo(5) => it will show error coz of Hoisting problem
const AddTwo = function (num) {
    return num + 3
}
console.log(AddTwo(5));
