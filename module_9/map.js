
let max = [ 1,2 , 3, 4, 5, 6,7, 8, 9]

let output = max.map((elem,index)=>{  //ek callback leta hai 
   return elem * elem   // ya har ek element par jata hai or us par opreation parform karta hai fir output deta hai 
})    // ya original array ko modify nahi kata hai 

console.log(output)   // ya ek new array return karta hai  


