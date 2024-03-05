//Data types is categorized by  how the elements are accessed and referenced

//Primitive

// 7 types : String, number, Boolean, null, undefined, Symbol, BigInt

//Reference Type(Non primitive)

// Array, Objects, Functions 

const heroes=["cap","ironman","thor"] //type => object
let myObj={
    name:"Rahul",
    age: 22,
}                       //type => object

const myFunction=function(){        //type => object function
    console.log("Hello world")
}

//Note: Null has type object


//+++++++++++++++++++++++++++++++++++++++++++++++

//Stack(Primitive), Heap(Non-Primitive)

let myName="Rahul"

let anotherName=myName
anotherName="Rahul Jain"

console.log(myName);
console.log(anotherName);

let userOne={
    email:"user@google.com",
    upi:"user@bl"
}

let userTwo=userOne

userTwo.email="rahul@amazon.com"

console.log(userOne.email);
console.log(userTwo.email);