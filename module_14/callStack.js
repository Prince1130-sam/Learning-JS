
// Call Stack 

// call stack is the place where javascript code is executed 

// call stack follows the Last In First Out(LIFO) behavior

function a(){
    b()
    console.log("hi function A")
}

function b(){
    c()
    console.log("hi function B")
    Promise.resolve().then(()=>{
        console.log("promise is resolve")
    })

}
function c(){
    console.log("hi function C")
}

a(); // the each is popped in reverse after finishing

// output
// function C
// function B
// function A

