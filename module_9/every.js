// every method 

let even = [2,4,6,8,10]

 let value = even.every((elem)=>{  // ya check karne ka liya hai method use hota hai 
    return elem % 2 ===0           // ya bhi ek callback leta hai 
})                                  // ya output me sirf boolean value hi deta hai 


console.log(value)   // output = true