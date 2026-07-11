// SetTimeout method


const add = (a,b)=>{
    return new Promise((resolve,reject)=>{
       setTimeout(()=>{
        let sum;
        resolve(sum = a + b)
       },3000)
    })

}

add(5,6).then((data)=>{
    console.log(data)
})
.catch((error)=>{
console.log(error)
})



