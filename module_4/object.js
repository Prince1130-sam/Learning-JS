let obj1 = {
    name : "prince",
    class : 3,
    roll_no : 123456789,

}

console.log(obj1)

//variable object

const variable_user = "userName"

let obj_2 = {
    [variable_user] : "esha singh",  // ya variable ka use kar ka data ko liya ja raha hai
    class : 8,
    roll_no : 8081280994,
}

console.log("this is a OBJECT 2 "+ obj_2.userName)   // or yaha variable ki value sa access karna hai 


const object_variable = "name";

let  obj_3 = {
    [object_variable] : "samriddhiPrince",
    class : "BCA",
    roll_no : 8081280994
}

console.log("this is a object 3 "+obj_3.name)


// approach 2 using class 

let object = new Object();   // create a bluePrint it mean ( class )
object.name = "satyam";
object.class = 5;
object.roll_no = 89898;

console.log(object)


