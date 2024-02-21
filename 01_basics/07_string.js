const namee="ranjit"
 const age= 20

// console.log(name + count);


// string manipulataion   (modern way)
console.log(`Hello my name is ${namee} and my roll is ${age}`);


// console.log("hello world")
const name= new String(`ranjit`);
console.log(name[0]);
console.log(name.__proto__);

console.log(name.length);
console.log(name.toUpperCase());
console.log(name.charAt(2));
console.log(name.indexOf('k'));
console.log(name.slice(2));
console.log(name.slice(1,-1));
console.log(name.substring(0,2));

//trim()
const newstring= "    Ranjit    "  
console.log(newstring.trim());   // trim is used for removing extra spaces from both starting and ending spaces
console.log(newstring.trimStart());  // trimStart: only trim for start
console.log(newstring.trimEnd());  //trimEnd: only trim for end

//replace
const url= "https://ranjit.com/ranjit%20kumar"
console.log(url.replace('%20','-'));

//includes: true or false  (checking substr present or not in string)
console.log(url.includes('ranjit'))

//split:-the split() method in JavaScript splits the string into the array of substrings, puts these substrings into an array, and returns the new array. It does not change the original string.
console.log(url.split("",7));

//repeat()=The repeat() method of String values constructs and returns a new string which contains the specified number of copies of this string, concatenated together.
//syntax= repeat(count)
const mood= "Happy! ";
console.log(`Jo v khaye wo ho jaye ${mood.repeat(3)}`);