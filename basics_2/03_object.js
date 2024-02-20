//singleton

//object literal

const mysym=Symbol("key1");
//console.log(typeof mysym);

const Jsuser={
    name:"Rahul",
    age:18,
    location:"Hassan",
    [mysym]:"mykey1", //when used in brackets it denotes its a symbol
    email:"rahul@google.com",
    isLoggedIn:false,
    lastLoginDays:["Monday","Friday"]
}

// console.log(Jsuser.email);
// console.log(Jsuser["email"]);
//console.log(Jsuser[mysym]);

Jsuser.email="rahuljain@gmail.com"
//Object.freeze(Jsuser);
Jsuser.email="virat@rcb.com"
//console.log(Jsuser);

Jsuser.greeting=function(){
    console.log("Hello JS users");
}

Jsuser.greeting1=function(){
    console.log(`Hello JS user ${this.name}`);
}

console.log(Jsuser.greeting());
console.log(Jsuser.greeting1());