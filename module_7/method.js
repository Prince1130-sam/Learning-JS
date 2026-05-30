

let obj  = {
    user_first : "prince kumar",        // javascript me key jo hota hai vo apne aap hi string me convert ho jata hai uski karo ya na karo
    user_name :  "yadav",
    age : 20,
    vrify_age : function(){       // <-- isko high order function kaha sakte hai
        console.log(obj.age)
    },
}

obj.vrify_age();   // ya par jo verify_age ka bad () ya laga hai isko har bar jab bhi function use karo ge tab use karna hoga