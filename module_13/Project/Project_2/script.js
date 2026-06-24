let inner = document.getElementById("input")



inner.addEventListener("keyup",(e)=>{

    // console.log(e)

    let ans = document.getElementById("showKey")
    let ans2 = document.getElementById("showCode")

    ans.innerText = e.keyCode;    // key Code Browser ka me ya collection ma ek proparty hoti hai 

    ans2.innerText =e.key;   // key code bhi ushi me milega  



})