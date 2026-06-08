// findIndex method 

let index = [1,3,4,5,7]

let value = index.findIndex((elem)=>{    // ye method element ka index ko output karo 
    return elem % 2 === 0  // ya method condition ko match karne pahla element ka index hi print / output hoga
    })

console.log(value);   // or ager condition kisi se match nahi ki to output -1 ayga 

