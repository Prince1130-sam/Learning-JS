// add to or more string and array in one without modify the original string 

const messagesToSender = "hello dear how are you";

const messagesToReciver = "i am fine dear   "  // concat() method do string ko joint karti hai 

let Answer = messagesToSender.trim().concat(messagesToReciver)   // concat()method bhi original string ko modify nahi karti hai 

console.log(Answer)
console.log(Answer.length)