// session Storage 

sessionStorage.setItem("name","prince")  // isme data temporarily hota hai matlb jab browser tab close hoga tab session Storage clear ho jayega

sessionStorage.getItem("name") // ya same local storage ki tarha hi kaam karta hai

sessionStorage.removeItem("name")


const obj = {
    name: "prince",
    class : 3,
    data: {
        father: "kameldeep yadav",
        mother: "sanju davi"
    }

}

sessionStorage.setItem("user",JSON.stringify(obj))  // ya bhi data key-value ka form me leta hai or string form me bhi


const result = JSON.parse(sessionStorage.getItem("user")) // or fir object me convert hai

console.log(result.data.mother) // or ya raha result