

let btton = document.getElementById("body_page")

let heading = document.getElementById("head");

let btn = document.getElementById("my_Btn")


let isBlack = false;

function toggle(){
    if(isBlack == false){
        btton.style.backgroundColor = "black"
        heading.style.color = "white";
        btn.innerText = "White Theme"
        btn.style.color = "white"
    }else{
         btton.style.backgroundColor = "white"
        heading.style.color = "black";
        btn.innerText = " Black Theme"
        btn.style.color = "Black"

    }
    isBlack = !isBlack

}