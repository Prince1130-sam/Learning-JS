// macroTask Queue

console.log("start")  // ya to direct callstack me jata hai is liya ya phle execute hota hai 

setTimeout(()=>{  // ya hai macroTask Queue ka part iski sabse kam priority hote hai 
    return console.log("hello everyone")  // or return ka use tab karte hai jab hame koi value function ka bahar use karni ho 
},3000)

const promise = Promise.resolve(()=>{  //ya iski second priority me use hota hai matlb iskoa use tab hota hai microTask me  
    console.log( "promise resolve successfully")
})

promise.then((data)=>{
   data()
})
.catch((err)=>{
    console.log("this is a error",err)
})

console.log("end")


// output

// start 
//end
//promise resolve sucessfully 
// hello everyone after 3 sec