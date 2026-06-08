// find method

let student = [
    {
        first_name : "ajeet kumar",
        marks : 50
    },
    {
        first_name : "ravi kumar",
        marks : 60
    },
    {
        first_name : "kishor kumar",
        marks : 40
    },
    {
        first_name : "satyam panday",
        marks : 70
    }
]


let result = student.find((elem )=>{   // find method element ko search karne ka liya kiya jata hai 
        if(elem.marks < 60){          // ager ek spicified condition meet hote hai tab ye array ki pahle condition jo match karti hai usko output karta hai
            return true;              // filter method ki tarha nahi ki jo jo condition match kare vo sab se do output me 
        }else{
            return false;      // the method can returns only the first matching element 
        }
})

console.log(result.first_name)      // or jab bhi conditon kisi se match nahi karge tb output undefined hoga 

