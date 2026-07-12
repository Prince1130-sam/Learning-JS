
let obj1= {
    name : "prince",
    age : 22
}


// console.log(obj1)

let obj2 ={...obj1} // spread opreater se kaam abhi tak ho raha  hai but yahi jab nested object hoga tab nahi kaam karega (obj3) dekho 

obj1.age = 23   // yaha tak ya deep copy par hi kar kar raha hai 

// console.log(obj2,obj1)


 let obj3 = {
    name : "ankit", 
    class : "IV",
    details : {
        mobile : 8081280994,
        address : "janki nager"
    }
 }

//  console.log(obj3)

 let obj4= JSON.parse(JSON.stringify(obj3))  // spread opreater se ya nahi hoga iska liya (json) ka use karna padega & spread opr me dono object me change karta hai

 console.log(obj4,obj3, "space hai 1 wala obj4 hai or 2 - obj3")  // ya method iski ek deep copy bana leta hai 


 obj3.details.address = "malvia nager gonda" // yaha dekho obj3 me change kiya dono me nahi hoga ya change hoga only in obj3 me bas (output dekh lo)


console.log(obj3,obj4 ," is me uska ulta")    



