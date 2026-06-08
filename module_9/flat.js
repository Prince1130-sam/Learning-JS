// flat method 

let index = [1,2,[6,7,[8,[6,2],5],7]]  // nested array 

let flatFun = index.flat(3)   // jab nested array ko flat karna ho tab flat method ka use karnte hai 
                             // is me argument pass karna hota hai or by default 1 hota hai 


console.log(flatFun)   

console.log(index)  // ya original array me modify nahi karta hai  