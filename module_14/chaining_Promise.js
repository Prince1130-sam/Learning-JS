// Chaning Promise with Promise .then()

function fetchData(){
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            resolve("Step 1: Fetched data")
        },2000)
    })
}

function transformData(data){   // data = Step 1: Fetched data
    return new Promise((resolve , reject)=>{
        setTimeout(()=>{
            resolve(`Step 2: Transformed ${data}`)    // result :  Step 2: Transformed Step 1: Fetched data
        },3000)
    })
}

function finalData(data){   // data = Step 2: Transformed Step 1: Fetched data
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            resolve(`Step 3: final data ${data}`) // result: Step 3: final data Step 2: Transformed Step 1: Fetched data

        },4000)
    })
}

// consuming a promise

fetchData().then((data)=>{   // Step 1: Fetched data ya value automatic .then ka (data) me aa gaye hai 
    console.log(data)
    return transformData(data) // or same value is data value me bhi aa gye hai // ab is data ki value function transformData ka parameter me jayege
    
}).then((data)=>{  // ab is data ki value  = Step 2: Transformed Step 1: Fetched data
    console.log(data)
    return finalData(data)  // ab issi value ko function finalData ka parameter(data) me send karta hai 
    
}).then((data)=>{   // ab is data ki value = Step 3: final data Step 2: Transformed Step 1: Fetched data
    console.log(data) // jo ki function finalData ka resolve hone par aa rahi hai
})


