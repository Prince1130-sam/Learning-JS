

let num1 = document.getElementById("input1")
let num2 = document.getElementById("input2")

let btnPlus = document.getElementById("plus")
let btnMin = document.getElementById("min")



btnPlus.addEventListener("click",()=>{



  let ans =  Number(num1.value )
  let ans2 =  Number(num2.value)

  let ans3 = ans + ans2

  
  let result = document.getElementById("result")
     result.innerText = ans3;

})

btnMin.addEventListener("click",()=>{
    let ans = Number(num1.value)
    let ans2 = Number(num2.value)

    let ans3 = ans - ans2

    let result = document.getElementById("result")
    result.innerText = ans3
})

