const month=3

switch (month) {
    case 1:
        console.log("JAN");
        break;
    case 2:
        console.log("FEB");
        break;
    case 3:
        console.log("MAR");
        break;

    default:
        console.log("Not valid month");
        break;
}

//falsy values

//false,0,-0, BigInt 0n, "" ,null, undefined,NaN

//truthy values

//"0", 'false', " ", [], {}, function(){}

const emptyObj={}

if(Object.keys(emptyObj).length===0){
    console.log("Object is empty");
}

//Nullish coalescing operator (??): null undefined

let val1;
//val1=5 ?? 10
//val1=null ?? 10

var1=undefined ?? 15;

console.log(var1);