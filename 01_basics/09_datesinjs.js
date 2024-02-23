const a= 9
console.log(a)

let myDate= new Date();
console.log(myDate);
console.log(myDate.toString());
console.log(myDate.toLocaleString());

console.log(typeof myDate)

//let myCreatedDate= new Date(2022,0,14)
//let myCreatedDate= new Date(2022,0,14,6,10)  //last two parameters are for time 
// let myCreatedDate= new Date("2022-01-14")
// console.log(myCreatedDate)
// console.log(myCreatedDate.toLocaleString());

let myTimeStamp= Date.now()  //Date.now() is a JavaScript method that returns the current timestamp in millisecond 
console.log(myTimeStamp)
//console.log(myCreatedDate.getTime());  // it also gives millisecond
console.log(Math.floor(Date.now()/1000)); //it converted date into millisecond 

let newDate= new Date()
console.log(newDate.getMonth());
//console.log(myTimeStamp.getMonth());
console.log(newDate.getDay());
console.log(` current  year is ${newDate.getFullYear()}`)

// newDate.toLocaleString(`dafult`,{
//     weekday:"long",
// })

// paasing parameters in toLocaleString(date and time both)
let currentDate = new Date();
console.log(currentDate.toLocaleString('en-US', { timeZone: 'UTC', weekday: 'long', year: 'numeric', month: 'long', day: 'numeric', hour: 'numeric', minute: 'numeric', second: 'numeric' }));
