
// microTask Queue 

console.log("start")  // ya pahle aaaya kyo ki ya callStack me direct jata hai ya task 

let Pro = new Promise((res , rej)=>{   // ya ek promise hai jo ki phle microTask Queue me jata hai fir callstack kahle hone par use me jata hai 
    setTimeout(()=>{
        res("Promise is resolved")
    },0)
})


Pro.then((res)=>{   // ya par .then() use kar raha hu 
     console.log(res)
})



console.log("end")