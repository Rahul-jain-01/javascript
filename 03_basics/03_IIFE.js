//Immediately Invoked Function Expressions (IIFE)
//A JavaScript IIFE (Immediately Invoked Function Expression) is a function that runs the moment it is invoked or called in the JavaScript event loop.
//IIFEs prevent pollution of the global JS scope. 
//In a traditional function, if you create a variable within the function, it is accessible in the global object.
//If you define a variable in an IIFE, it is accessible only directly within the function.

(function chai(){
    //named IIFE
    console.log(`DB connected`);
})();

( (name) => console.log(`DB connected 2 ${name}`))('rahul')