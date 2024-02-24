const user= new Object()  // creating object
const user1= {}   // we can also create this way

user1.name = "ranjit"
user1.nickname= "pandru"
// Object.freeze(user1)
user1.isLoggedIn = false
console.log(user1)

const regularUser={
    loaction: "Bokaro",
    name:{
        firstname: "pulla",
        lastname: "mahto",
    }
   // occupation: "worker"
}
//console.log(`user is using  from ${regularUser.loaction}  and his first name is ${regularUser.name.firstname}`);



// Object.assign=The Object.assign() static method copies all enumerable own properties from one or more source objects to a target object. It returns the modified target object.
const obj1= {1:"a",2:"b"}
 const obj2= {3:"a",4:"b"}

console.log(obj1)
const ans=console.log(Object.assign(obj1,obj2))  // here when we assign then Properties in the obj1 object are overwritten by properties in the obj2 if they have the same key. Later sources' properties overwrite earlier ones.
console.log(obj1)
console.log({...obj1, ...obj2})



// for accessing all keys of object 
console.log(Object.keys(user1))

// for accessing all Values of object 
console.log(Object.values(user1))

// for accessing all enteries of object 
console.log(Object.entries(user1))

// hasOwnPropert= for asking in that object present or not (true or false)
console.log(user1.hasOwnProperty('name'))
console.log(user1.hasOwnProperty('email'))


