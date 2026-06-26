
let btn = document.getElementById("btn");


let img = document.getElementById("image");


btn.addEventListener("click", function(){
    alert("button is clicked")
})

let isDay = false
img.addEventListener("click",function(){

    if(isDay == false){
        img.src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRvgvfPocDqVi-wSk5zVBZlrQyn1wPTbVcNzxCkjuMtsA&s=10"
    }else{
        img.src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4W5se-3sXcI-CuvSm5GbPoSk655stnvqEeWyX1M79KA&s=10"
    }
    isDay = !isDay

})