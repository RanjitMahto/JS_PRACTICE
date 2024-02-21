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
 console.log(useOne.email);
console.log(userTwo.email)
