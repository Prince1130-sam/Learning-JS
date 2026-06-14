// Destructuring is a javascript expression that allows you to unpack values from arrays or properties from object into distinct variable.



// array destructuring 
const arr = [1,23,4,5,6]   // isko destructuring karna ka liy akarte hai or ager isme ko jada value hai usko nahi liya jayega

let [a,b,c,d,] = arr;   // dusare variable ko new variable me assign kar raha hu or ager new variable me value jada hai or old variable me value nahi hai
console.log(a,b,c,d)    // to undefined aa jayega

console.log(b , c )  


// object Destructuring 

const person = {name : "alice", age : 25}

let{name , age} = person

console.log(name , age)