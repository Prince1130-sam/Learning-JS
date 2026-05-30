function hello(name, callback){
console.log("hello",name);
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










