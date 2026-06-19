let arr = Array.from(document.getElementsByClassName("container"))

for(let i=0; i < arr.length; i++){
    if(i==0){
        arr[i].style.backgroundColor="blue"
    }
    if(i==4){
        arr[i].style.backgroundColor ="green"
    }
    if(i % 2 !==0){
        arr[i].style.backgroundColor = "red"
    }
    if(i== 7){
        arr[i].style.backgroundColor= "pink"
    }
}