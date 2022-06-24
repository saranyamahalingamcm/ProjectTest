/*let a = "aasddsdaa";
// let five = a.charAt(4);
// console.log(five);
console.log(a.length);
if (a.length==0) {
    console.log("Cannot be null");
}
else if (a.length > 0 && a.length <= 8) {
    console.log("valid input");
}
else {
    console.log("invalid input");
}*/

 
// console.log(isLandscape(300, 200));

// function isLandscape (width, height) {
// return (width > height);
// }

/*const result = fizzBuzz(false);
console.log(result);
function fizzBuzz(input) {
    if ( typeof input !== 'number')
        return 'Not number';
    else if ((input % 3 === 0) && (input % 5 === 0))
        return 'fizzbuzz';
    else if (input % 3 === 0)
        return 'fizz';
    else if (input % 5 === 0)
        return 'Buzz';    
    
    else 
        return input;
}*/

//showNumber(3)
function showNumber(limit) {
    for (let i = 0; i <=limit; i++) {
        if (i % 2 == 0)
            console.log(i, "Even");
        else
            console.log(i, "Odd")
    }
}


/*
checkSpeed (129);
function checkSpeed(speed){
    const speedLimit = 70;
    const kmPerPoint = 5

    if(speed < (speedLimit + kmPerPoint)){
        console.log("ok");
        return;
    }
    const points = Math.floor((speed - speedLimit)/kmPerPoint)
        if(points >= 12)
            console.log( "License suspended")
        else
            console.log( points + " Points");
    
}*/

const person = {
    name:'Hi',
    address : 12,
    age : 29,
}

showProperty(person);

function showProperty(obj)  {
    for (let key in obj)
        if (typeof obj[key]==='string')
        console.log (key, obj[key])
}

// primeNum(); 
// function primeNum(num) {
//     for(let i = 0; i <= num; i++)
//         if(i % )
// }


