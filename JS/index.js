
let display="I am an amazing programmer!!!";
console.log(display);

function onClick(){
document.getElementById("test").innerHTML="Hi";
}
function printDoc(){
window.print()
}

function declaraTion(){     
let name = "Saran";
let age = 30;
const year = 2000;
let selectedName = null;
 }

/*function sum(){
let z = x+y;
document.getElementById("sum").innerHTML=(z);
}*/
function multiply(){
    let z = x * y;
    return z;
}
/*function divide(){
    let z = x / y;
    return z;
}*/
function remainder(x,y){
    z= x % y;
    return z;
}
function sum(x,y){
    z = x + y;
    return z;
}
function exponential(x,y){
    z= Math.pow(x,y);
    return z;
}

let twoRemain = remainder(5,5);
// let twoDiv = divide(); 
let twoSum = sum(3,6);
let powerOf = exponential(5,4);
console.log(twoSum);

//ternary operator
let greater = twoSum > 8 ? false : true;
console.log(greater);
//console.log(powerOf);
// document.getElementById("sum").innerHTML= powerOf;

// Swap two numbers
/*function swap(a,b){
let a;
let b;
let c;
console.log(a ,b);
c=b;
b=a;
a=c;
console.log(a ,b);   
}*/



