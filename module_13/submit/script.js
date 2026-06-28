

let form = document.getElementById("form")
let input = document.getElementById("input")

form.addEventListener("submit",(e)=>{
    e.preventDefault();     // ya ek browser ka event hai 

    let ans = input.value

    console.log(ans)
})