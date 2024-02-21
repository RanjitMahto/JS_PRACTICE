// Primitive datatype
// 7 tytpes : String,Number,Boolean,null,undefined,Symbol, BigInt

// const score = 100
// const scoreValue= 100.2

// const isLoggedIn= false
// const outsideTemp= null
// let userEmail;

//console.log(typeof outsideTemp);     //oject

 const id = Symbol('123')
// const anotherId = Symbol('123')  // symbol never be same even u assign same value

// console.log(id == anotherId);  // give false

//BigInt
//const bigNumber = 6n   //when u mention n in last of any values it become "bigInt" 
//console.log(typeof bigNumber);

// Referncve type(Non primitive)
// Array, Objects, Functions

//array
const heroes= ["shaktiman","naagraj", "doga"];

//object
let myObj={
    name:"ranjit",
    age:22,
}
//function
const myFunction=function(){
console.log("hello")
}


console.log(typeof myFunction);//function
console.log(typeof myObj);    //object
console.log(typeof heroes);   // object
console.log(typeof id);      //symbol
