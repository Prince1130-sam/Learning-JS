//  fill method 

let arr = [1,2,3,4,5,6,7,8,9]

let value = arr.fill(0)    // fill method se ya ek specified value se replace kar deta hai sare array element ko paura array ek hi element me convert ho jata hai
                          // ya callback nahi leta hai ya argument leta hai 
console.log(value)   
console.log(arr)   // ya original array ko modify kar deta hai 


// second question 

let name = [1 ,2 ,3 ,4 ,5 ,6]

let con = name.fill(10,3,4)  // last index hamsa exclusive hota hai matlb last index change nahi hoga  hamesa -1 rahta hai 

console.log(con)      // output = [1,2,3,10,5,6]