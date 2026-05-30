// search kar ka word ko usko replace

const str = "pricne kumar yadav";

const answer = str.replace("yadav", "singh") // phla aurgument search karta hai replaceing word ko  
                                            // dusare aurgument ma replaceing word hai jo change karna hai 
                                            
const str2 = "apple, apple, apple"     // jab bhi same word do ya do ka jada bar likha hogo tab uska phla word hi change hoga 
console.log(str2)
const answer2 = str2.replace("apple", "orange") 
console.log(answer2)

console.log(answer);

console.log(str)   // but original string ko modify nahi karta hai 






