/*
const result = numTotal(1000);
console.log(result);

function numTotal (input){
let sum=0;
   for (let i=1; i<input; i++){              
      if ((i % 3 === 0) || (i % 5 === 0)){           
         sum+=i;   
        }
           
      }
      return sum;
} */

let sum;
let numberone =0 ;
let numbertwo= 1;
 for (let i=1; i<=10; i++){
        console.log(numberone);
        sum= numberone+numbertwo;        
        numberone=numbertwo;
        numbertwo=sum;
 }