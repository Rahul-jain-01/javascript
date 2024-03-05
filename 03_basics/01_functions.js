function addTwo(number1,number2){
   return number1 + number2;
}

const result=addTwo(3,5);
//console.log("Result:",result);

function loginUser(username="sam"){
    if(!username){
        console.log("Please enter a username");
        return
    }
    return `${username} just logged in`
}

//console.log(loginUser("rahul"));

function marvel(...num1){
    return num1;
}

//console.log(marvel(200,300,400,500));
const user={
    userName:"Rahul",
    price:900
}

function handleObject(anyobject){
    console.log(`Username is ${anyobject.userName} and price is ${anyobject.price}`);
}

//handleObject(user);
// handleObject({
//     userName:"sam",
//     price:399
// });

const myNewArray=[200,400,100,600]

function secondValue(getArray){
    return getArray[1]
}

//console.log(secondValue(myNewArray));
console.log(secondValue([100,200,300]));