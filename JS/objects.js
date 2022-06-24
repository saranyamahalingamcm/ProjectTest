//Objects - method
/*const biodata={ // key-value pair combos
    name:'Saranya', //- string
    age : 30,       //- numeric
    isOld : true,   //- boolean
    health : {      //- Object
      BP : 120,
      Sugar : 'normal',
    },
    details: function() {   //- function (function inside an object is called method)
        console.log('He is healthy');
    },
};
//biodata.details();
 for(let key in biodata)
    console.log(key, biodata[key]); */


/*
//Factory functions - to create multiple obejects 
function personalDetails(name, age) {
 // return {}
  const biodata={
    name: name, //if key and value are same then name:name, -> name,
    age : age, 
    //isOld : old,
    health : {    
      BP : 120,
      Sugar : 'normal',
    },
    details() {       //Draw method
        console.log('He is healthy');
    }
  }
  return biodata;
}

const biodata1 = personalDetails('siva', 50);
console.log(biodata1);
const biodata2 = personalDetails('sakthi', 30);
console.log(biodata2); */

//Constructor Function
// function PersonDetail (age){
//     this.age = age;
//     this.draw = function(){
//       console.log('draw');
//     }
// }

// const one = new PersonDetail(20);


// let address = {
//   street: 'rajaji',
//   city: 'coimbatore',
//   zipcode : 123456,
//   }


// function showAddress(address){
//   for (let key in address)
//    console.log(key, address[key]);
// }

// showAddress(address);

// function ShowAddress(street, city, zipcode){
//   this.address = street,
//   this.city = city,
//   this.zipcode = zipcode 
// }

// const addressdisplay = showAddress('gandhi', 'cochi', 66565); // factory fn
//                           // consructor fn- new ShowAddress('rajaj', 'cbe', 65498);
// console.log(addressdisplay);


// function showAddress(address, city, zipcode){
//   const addressdetails={
//       address: address,
//       city: city,
//       zipcode :zipcode
//   }
//   return addressdetails;
// }

// let address = {
//     street: 'rajaji',
//     city: 'coimbatore',
//     zipcode(){
//       console.log('hi');
//     }
//     }

// for (let key in address)
//   console.log(key, address[key]);

// for (let key of Object.keys(address))
//   console.log (key);
  
// function Circle(radius) {
//   this.radius = radius;
//   this.draw = function() {
//     console.log('draw');
//   }
// }
//  const circle1 = new Circle(100);
//  console.log(circle1);

// function person(age) {
//   this.age = age;
//   this.show = function(){
//       console.log("show detail");
//   }
// }
// const data = new person(60);

//Property descriptor 
// let person = {
//   name: "saran",
//   age: 30,
// };
// for (let value in person)
// console.log(value);

// Object.defineProperties(person, {
//   name:{
//     value:"Anu",
//   },
//   age:{
//     value: 28,
//   }
// });
// console.log(person.age)

function createProduct(productName, productType){
  return {
  productName,
  productType,
  productCreate() {
    console.log("Product created successfully by Fcatory");
  },
}
}

let elecTV = createProduct('Television', 'Electronics');
console.log(elecTV);

function CreateProduct(productName, productType){
  this.productName;
  this.productType;
  this.productCreate= function(){
    console.log("Product created successfully by Constructor");
  }
}
let elecroWash = new CreateProduct('WashingMachine', 'Electronic');
console.log(elecroWash);