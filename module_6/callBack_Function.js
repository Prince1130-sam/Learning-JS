// High Order function 


function hello(name, callback){  // (hello) yaha par ek high order  function hai 
console.log("hello",name);    // high order function ka arrgument ka ander ek function pass kar sakte hai  or parameter me callback bhi
callback();
}


function greet(){
    console.log("this is a callback function");
}

hello("prince", greet)





function callback(a , name){
    let loop = a 
    while(loop <= 10){
        if(loop % 2 == 0){
            console.log("even")
        }else(
            console.log("odd")
        )
        loop++
       

    }
    name()
}

function hello(){
    
        console.log("hi this is a prince kumar yadav using callback function in this function")
    }


callback(2, hello)










