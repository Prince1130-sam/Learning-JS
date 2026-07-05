

let form = document.getElementById("form")
let input = document.getElementById("input")

form.addEventListener("submit",(e)=>{
    e.preventDefault();     // ya ek browser ka event hai  // ya browser me jo bar bar default bhavier run hota hai usko rokta hai

    let ans = input.value

    console.log(ans)
})