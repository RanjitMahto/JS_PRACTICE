//console.log("ranjit") 


//stack (primitive), Heap (Non-Primitive)

// let myCompanyName= "mahtoltd"
// let anothername= myCompanyName
// anothername= "kuamrltd"
// console.log(myCompanyName);
// console.log(anothername);



// function allocated in heap
// let useOne={
//     email:"user@77.com",
//     upi:"user@ybl"
// }

// allocated in stack
//let userTwo= useOne;  //here memory allocated in stack but refernce to heap memory becoz UserOne allocated in heap(becoz it is function, function and object memory allocated in heap) SO user one refrence to userTwo  

//userTwo.email="ranjit@77.com"; // directly changes the value in heap becoz its directly refrence to heap
// reference means jo v data change krte ho heap me hi change hota h
// console.log(useOne.email);
// console.log(userTwo.email)


//*************Strings**********/

// const namee="ranjit"
//  const age= 20

// console.log(name + count);


// string manipulataion   (modern way)
// console.log(`Hello my name is ${namee} and my roll is ${age}`);


// console.log("hello world")
// const name= new String(`ranjit`);
// console.log(name[0]);
// console.log(name.__proto__);

// console.log(name.length);
// console.log(name.toUpperCase());
// console.log(name.charAt(2));
// console.log(name.indexOf('k'));
// console.log(name.slice(2));
// console.log(name.slice(1,-1));
// console.log(name.substring(0,2));

//trim()
// const newstring= "    Ranjit    "  
// console.log(newstring.trim());   // trim is used for removing extra spaces from both starting and ending spaces
// console.log(newstring.trimStart());  // trimStart: only trim for start
// console.log(newstring.trimEnd());  //trimEnd: only trim for end

// //replace
// const url= "https://ranjit.com/ranjit%20kumar"
// console.log(url.replace('%20','-'));

//includes: true or false  (checking substr present or not in string)
// console.log(url.includes('ranjit'))

//split:-the split() method in JavaScript splits the string into the array of substrings, puts these substrings into an array, and returns the new array. It does not change the original string.
// console.log(url.split("",7));

//repeat()=The repeat() method of String values constructs and returns a new string which contains the specified number of copies of this string, concatenated together.
//syntax= repeat(count)
// const mood= "Happy! ";
// console.log(`Jo v khaye wo ho jaye ${mood.repeat(3)}`);

// const array=[1,4,6,'c',"char"]
// console.log(array[3]
// )
// array.push('c')
// console.log(array)
// console.log(array.length)
// array.pop()
// array.unshift(-1)
// array.shift()

// console.log(array.includes("char"))

// console.log(array.indexOf('c'))
//  console.log(typeof array)
//  //array.unshift(-1)

//  const newArr= array.join();  //The join() method returns an array as a string.
//  console.log( typeof newArr);


 //**********Slice and Splice *********/
 //slice’ literally means to cut something into pieces. It is used to cut out elements from an array. It does not affect the original array.
 //splice() changes the original array whereas slice() doesn't but both of them returns array object.
//  const brr=[1,2,3,4,5]
//  const brr1= brr.slice(1,3)
//  console.log(brr1,brr)

//  const brr2= brr.splice(1,3)
//  console.log(brr2,brr)
//  console.log(brr)



//push(): This method is used to add one or more elements to the end of an array and returns the new length of the array after the elements are added. It modifies the original array in place
 const hero = ["mithun","govinda","devgan"]
 const heroin= ["kajol","ravina"]
 //hero.push(heroin)
//  console.log(hero[4][2])
 console.log(hero.length)



 //concat(): This method is used to merge two or more arrays together, creating a new array as a result. It does not modify the original arrays.
 const allhero = hero.concat(heroin)
  console.log(allhero)


  //The spread operator (...) in JavaScript is a syntax that allows an iterable (such as an array or a string) to be expanded into individual elements. It's particularly useful in contexts where multiple elements are expected, such as function calls or array literals.
  const newhero= [...hero, ...heroin]
  console.log(newhero)



  //The flat() method is a copying method. It does not alter this but instead returns a shallow copy that contains the same elements as the ones from the original array.
  const arr1= [1,2,3,[4,5],6,7,[8,9,[11,12]]]

  //const real_arr1= arr1.flat(3)
   // The depth level specifying how deep a nested array structure should be flattened. Defaults to 1.
//   Return value
//   A new array with the sub-array elements concatenated into it.
  const real_arr1= arr1.flat(Infinity)
  console.log(real_arr1)



console.log( Array.isArray("ranjit"))
console.log( Array.from("ranjit"))
console.log(Array.from({name:"ranjit"}))

let score1=200
let score2=300
let score3=400

console.log(Array.of(score1,score2,score3))  // making from those scores=  Array.of(______)



