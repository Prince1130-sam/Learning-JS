// shellow copy 

const obj1= {
    name : "prince",
    class: 2,
    age : 21
}


let obj2 = obj1  // shellow copy hamesa apne memory reference ko shared karti rahti hai 

obj2.age = 25; // jis wajha se agar copy wale object me tumne change kiya to original object me bhi ho jata hai

console.log(obj1,obj2)  


//output  = {name: 'prince',class:2,age:25} {name:'prince',class:2,age:25}