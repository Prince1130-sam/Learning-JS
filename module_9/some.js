
let array = [1,2,3,4,5,6,7]

let say = array.some((elem , index)=>{
      if(elem < 6){    //  ya ek callback leta hai condition ka ager sahi hogi to
        return elem   // output boolen value me aata hai 
      } 
})      

console.log(say)

console.log(array)  // ya original array ko modify nahi karta hai ok 
