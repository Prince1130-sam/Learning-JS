// rest operater 

const addition = (...numbers)=>{    // rest operatar ka use apne sambhi argument ko ek infinite parameter me lane ka liya kiya jata hai 
    let sum = 0;                    // ki sabhi argument ki value ek bar me hi a jaye sab parameter ma

    for(let i = 0; i < numbers.length; i++){    
        sum += numbers[i]
    }
    console.log(sum)
}


addition(10,5,20,4,5,16,80,7,10,-100)



// second example 

const multipaly = (a , ...b)=>{  // isme jo argument ki pahle value hoge vo pahle parameter me assing ho jayege but remaning sabhi value 
   let multipal = 0 ;              // arrgument ki rest opreatar ki vajha se dusare(B) me store ho jayege 

   for(let i = 0 ; i< b.length; i++){
    multipal += a * b[i]
    
   }
   console.log(multipal)


}

multipaly(2 , 1,2,3,4,5,6)