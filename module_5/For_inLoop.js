

const User = {name : "Alice", age : 25, city: "new york"};

for(const key in User){ // for in hamesa object me key hi dega value nahi
    console.log(key)
}

for(const login of Object.values(User)){  // Object.value hamesa object ki value ko for of loop se nikalne ka liya use hota hai
    console.log(`this is a value of object use of loop in object value ${login}`)
}


// for of se ager tum dono value lena chate ho to 

for(const[ key, value] of Object.entries(User)){
    console.log(key , value)
}


// for OF loop
const Name = ["hello", 1223, "how are you"]

for(const name of Name){  // for OF loop array ki value ko deta hai print kar ka ya jaise bhi aap lena chaho
    console.log("\n", name)
}