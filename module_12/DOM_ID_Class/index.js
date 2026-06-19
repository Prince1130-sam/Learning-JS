// DOM  id , class


const result = document.getElementById("head-1")   // ya heading id ko pakdega  and using // getElementById()

console.log(result.innerText)       // or yaha par jo element ka ander hoga usko console.log larega


                                




let button =  document.getElementById("btn")     // getElementById() hamesa jab bhi ek se jada same id hoge to first element hi return karega or sabhi element ko ignore kar diya jayega
                                                // or ager koi id ya element exist nahi karega to null return karega
button.onclick=()=>{
    let arr = Array.from(document.getElementsByClassName("list"))  // convert into array    and using  //  getElementsByClassName()

    result.innerText="dekha lo sab change hua na color"
    result.style.color="blue"

    for(let i = 0; i<arr.length; i++){
        console.log(arr[i].innerText)
        if(i == 0){
             arr[i].style.color="red"  // colur change
        }
        if(i== 1){
            arr[i].style.color="green" // colur change
        }
        if(i == 2){
            arr[i].style.color="pink"  // color change
        }
       
    }

     
    console.log(arr[0].innerText,'\n',arr[1].innerText)    // element ki value update karne par orignal array nahi change hoti hai
    
   
}





