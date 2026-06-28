

let form = document.getElementById("form")

let password = document.getElementById("pass")

let check = document.getElementById("check")


check.addEventListener("change",function(){
    if(check.checked == true){   /// ( checked ) ek proparte hai browser ka 
        password.type = "text";

    }else{
        password.type = "password"
    }
})