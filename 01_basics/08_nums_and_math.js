// const score = 400
// const balance = new Number(100)
// console.log(balance);

// console.log(balance.toString().length);  //converted to string i.e "object"
// console.log(balance.toFixed(2));  // tofixed=The number of digits to appear after the decimal point; should be a value between 0 and 100, inclusive. If this argument is omitted, it is treated as 0.
// //console.log(balance.toFixed(1));
// console.log(typeof balance);


//toPrecision()= method of Number values returns a string representing this number to the specified precision.
// round figure value
// const otherNumber= 123.577
// console.log(otherNumber.toPrecision(3));

// const hundreds= 100000
// console.log(hundreds.toLocaleString());  // american standards
// console.log(hundreds.toLocaleString('en-IN'));// Indian standars

//***************************** Maths ***************/

//console.log(Math);
// console.log(Math.abs(-3));  // abs always give +ve value just like mode
// console.log(Math.round(3.4));   // nearest values
// console.log(Math.floor(2.6));  // lowest value
// console.log(Math.ceil(7.3));  // top value
// console.log(Math.min(-3,5,3,6)); 
// console.log(Math.max(-3,5,3,6)); 


console.log(Math.random());  //random()= it always gives random value (0 to 1)
console.log((Math.random()*10)+1 );  // converted (0 to 1) to (1 to 9)
console.log(Math.floor(Math.random()*10)+1 );

const min= 10
const max= 20

console.log(Math.floor(Math.random()*(max-min+1)) +min);



