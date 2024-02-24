//singleton 


// symbol=JavaScript Symbols are a new type of primitive data type introduced in the ES6 version of the language. They are used to represent unique values that can be used as identifiers or keys in objects. They are also used to create private properties and methods in classes.
//Symbols are unique and immutable, so they can be used as unique identifiers in objects and classes.
// Symbols can be used to create private properties and methods in classes.
// Symbols are useful for creating constants that can be shared across different parts of your code.


//symbols can also be used as object keys. This is useful when you want to assign a unique identifier to an object.
const mySymbol = Symbol();


//objects literals
const jsuser={
    name: "ranjit",
    [mySymbol]:"key1",
    age: 19,
    location: "bokaro",
    email:" ranjitbb@gmai.com"
}
jsuser.name="prakash"
console.log(jsuser)
//Object.freeze(jsuser) // object:The Object.freeze() static method freezes an object. Freezing an object prevents extensions and makes existing properties non-writable and non-configurable. A frozen object can no longer be changed: new properties cannot be added, existing properties cannot be removed, their enumerability, configurability, writability, or value cannot be changed, and the object's prototype cannot be re-assigned. freeze() returns the same object that was passed in.
// jsuser.name="kumar" // it will not added becoz we already freez the object
// console.log(jsuser)



//for accessing from object
console.log(`client name is  ${jsuser.name}`)
console.log(jsuser.age)
console.log(jsuser[mySymbol])
console.log(jsuser.email)
console.log(jsuser["email"])
console.log(jsuser["name"])
console.log(typeof mySymbol)


jsuser.greeting = function(){
    console.log(`hello js user from ${this.location}`);
}
jsuser.greetingTwo = function(){
    console.log(`hello js user  ${this.name}`);
}
console.log(jsuser.greeting())
console.log(jsuser.greetingTwo())


