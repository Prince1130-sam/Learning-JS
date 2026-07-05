
// Event Loop 

console.log("start") // ya log hamre stack task me aata hai ya line by line code execute karta hai (synchronous task)


// ya javascript ka behavior hai jo ki task ko handel karne ka liya kiya jata hai  Like  Promise , setTimeout and DOM update



setTimeout(()=>{  // ya macrotask  Queue hai to sab se last priorte date hai isko queue ko 
    console.log("setTimeout function")
},5000)

Promise.resolve().then(()=>{  // promise method hai or ya microTask Quesue ka part hai  ya priority me second number par aata hai 
    console.log("promise resolve")

})

console.log("end") // fir se call stack ka part hai 

// output
// start
// end
// promise resolve 
// after 5 sec setTimeout function 