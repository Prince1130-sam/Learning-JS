// remove whitespace from starting and ending

let string = "  hello every one this is human "


console.log(string)
console.log(string.trim())
let str = string.trim()   // trim method ka use starting ka or last ka whitespace hatne ka liya use hota hai 
                            // par trim middle ka whitespace nahi hata hai
console.log(str)


//   ==========================================================================================================================================//

let messageTrim = "  hello how are you "

console.log("\n" ,messageTrim.trim())
let str3 = messageTrim.length
console.log(str3)
console.log(messageTrim.trim().length)
console.log(messageTrim)   // Trim method kabhi bhi original string ko modify nahi kata hai 

