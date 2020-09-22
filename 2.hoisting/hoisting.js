//step 1: variable and function will be stored in the memory. For variable default value of"undefined" will be assigned. For functions the entire function will be stored.
//step 2: execution of the code starts.
//this is called hoisting

var a=10;
function b(){
    console.log("function b is called")
}
console.log(a);
b();

console.log(c); //undefined
d(); //function d called
var c=20;
function d(){
    console.log("function d called")
}
console.log(c) // 20