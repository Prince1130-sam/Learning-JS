let obj1 = {
    name :"rekha singh",
    class : 9,
    
}
 // updating the object and add the key - value 
obj1.roll_no = 4568;   // is taraha object me add kar sakta h
obj1.name = "prince sexsena"
obj1.class = "BCA final"

console.log(obj1)

// delete the object 

delete obj1.roll_no;

console.log(obj1)


// object key 

const user = {name : "Alice" , age : 25 , city : "new york"};
Object.keys(user).forEach((key)=>{console.log(key,user[key])})


// use the user object we can get the value

console.log(Object.values(user))   // is me value dikhne ka liya use kiya jata hai Object.values()
console.log(Object.keys(user))  // is me key dikhne ka liya use kiya jata hai Object.key() 




