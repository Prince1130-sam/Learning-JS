// sort array method 

let some = [8,5,7,3,1]    // the default sorting works on string values in Lexicographical (alphabatical) order 

let value = some.sort((a ,b)=>{     // sort method ka rule hai ki jab value positive hoga to B aagye  aayega 
    return a-b                      //  or jab value negative hoge to A ko pahle rakho
})                                     // like  a - b   ====   a = 5  b = 11   to  5 - 10 = -5  aaya to matlb 5 aage rahega array me 

// console.log(value)    // callback dene par complex array problem ko solve kar sakte hai 

// console.log(some)  // ya original array ko change kar deta hai hamesa ka liya 


let obj = [
    {name : "prince", age : 33},
    {name : "satyam", age : 20},
    {name : "esha", age : 19}
]


let result = obj.sort((a , b)=>{    // array par sort kar rahe hoo  or age ka hisab se arrange kiya gya hai
     return a.age - b.age           // by default ya ager koi arrgument nahi pass kiya gya to default hi ascending order me ho jaye ga 
})


 result.forEach((elem)=>{    // is me forEach ka use kiya for print sabhi name 
     console.log(elem.name)
 })

