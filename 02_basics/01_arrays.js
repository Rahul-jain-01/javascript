const array1=[0,1,2,3,4,5,6];

//console.log(array1[3]);

const myarr=new Array("rcb","csk","LSG");

// array1.unshift(8);
// array1.shift();

// console.log(array1.includes(5));
// console.log(array1.indexOf(9));

// const newArr=array1.join()

// console.log(array1);
// console.log(typeof newArr);
console.log("A",array1);

const myn1=array1.slice(1,3); //prints section of an array of the given range exluding the last element of the given range.

console.log(myn1);
console.log("B",array1);
 
const myn2=array1.splice(1,3); // manipulates the original array i.e by removing the elements from the given range
console.log(myn2);
console.log("C",array1);