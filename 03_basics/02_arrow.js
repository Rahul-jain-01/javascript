const user={
    username:"Rahul",
    price:999,

    welocmeMessage:function(){
        console.log(`${this.userName}, welcome to website`);
        console.log(this);
    }

}

// user.welocmeMessage();
// user.userName="samu"
// user.welocmeMessage();

//console.log(this); //empty object

function one(){
    let username="rahul"
    console.log(this.username); //cant use this.username in functions
}
//one()

const two=() => {
    let username="rahul"
    console.log(this); 
}
//two();

// const addTwo=(num1,num2) => {
//     return num1 + num2;
// }
// console.log(addTwo(3,4))

//const addTwo=(num1,num2) => num1 + num2; //implicit return

//const addTwo=(num1,num2) => (num1 + num2);

//const addTwo=(num1,num2) => ({username:"Rahul"});
console.log(addTwo(4,4))