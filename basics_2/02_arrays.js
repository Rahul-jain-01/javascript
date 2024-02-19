const marvel=["thor","ironman","spiderman","cap","black widow"];
const dc=["superman","batman","flash"];

// marvel.push(dc); //push method adds elemnts to existing array
// console.log(marvel);

const all_heores=marvel.concat(dc); //concat returns new array
// console.log(all_heores);

const all_new=[...marvel,...dc]
//console.log(all_new);

const anothr_array=[1,2,3,[4,5,6],7,[8,9,[4,5]]];

const real_anothr_array=anothr_array.flat(2);

//console.log(real_anothr_array);
console.log(Array.from("Rahul"));

let score1=100;
let score2=200;
let score3=300;

console.log(Array.of(score1,score2,score3)); //A set of elements to include in the new array object. 
                        //Returns a new array from a set of elements.