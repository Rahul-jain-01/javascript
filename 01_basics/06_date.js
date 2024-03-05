let myDate=new Date(); //type => object

// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toLocaleDateString());

let myCreatedDate=new Date(2023,0,29);

//console.log(myCreatedDate.toLocaleString());


let newDate=new Date();
// console.log(newDate);
// console.log(newDate.getMonth() + 1);
//console.log(newDate.getTime());


console.log(newDate.toLocaleString('en-IN', {
    
    timeStyle:"medium",
    timeZone:"Asia/Kolkata"
}));

