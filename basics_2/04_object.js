//const tinderUser=new Object();  //singleton object

const tinderUser={}

tinderUser.id="123abc"
tinderUser.name="Max"
tinderUser.isLoggedIn=false
//console.log(tinderUser);

const anotheruser={
    email: "hi@bb.com",
    fullname:{
        username:{
            firstname:"Rahul",
            lastname:"Jain"
        }
    }
}

//console.log(anotheruser.fullname.username.firstname);

const obj1={1:"a", 2:"b"}
const obj2={3:"a", 4:"b"}
const obj3={5:"a", 6:"b"}

//const obj4={obj1,obj2}
//const obj4=Object.assign({},obj1,obj2,obj3)
const obj4={...obj1,...obj2,...obj3}
//console.log(obj4);

// console.log(tinderUser);
// console.log(Object.keys(tinderUser)); //returns in array
// console.log(Object.values(tinderUser)); //returns in array
// console.log(Object.entries(tinderUser)); //returns in array

// console.log(tinderUser.hasOwnProperty('isLogged'));

const course={
    courseName:"JS",
    price:"999",
    courseTeacher:"Hithesh"
}

const{courseTeacher: teacher,price }=course; //de-structuring
//console.log(price); 

