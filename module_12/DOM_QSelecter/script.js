

let res = document.querySelector(".text")

console.log(res.innerText)

function changeColor(){

   let color =  res.style.color= "red"

    if(color === "red"){
        res.style.color = "blue"
    }
    if(color === "blue"){
        res.style.color = "yellow"
    }
    if(color === "yellow")
        res.style.color = "pink"
    if(color === "pink"){
        res.style.color = "red"
    }
    
}