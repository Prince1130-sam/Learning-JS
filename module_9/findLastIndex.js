
// find last index method 

let car = [1,2,3,4,5,6,7,8,9]

let value = car.findLastIndex((elem )=>{ // is method me array ki last index liya jata hai jo condition ko match karta hai 
     return elem % 2 === 0 
})  //  is method me undefined hone par -1 output aata hai

console.log(value)  // ya ek callback lata hai 
  
