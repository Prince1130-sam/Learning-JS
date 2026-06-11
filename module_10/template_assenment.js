const cardNumber = 4590;
const amount = 100;

const otp = ( 
    "" + Math.floor(Math.random()*10)+
    Math.floor(Math.random()*10)+
    Math.floor(Math.random()*10)+
    Math.floor(Math.random()*10)+
    Math.floor(Math.random()*10)+
    Math.floor(Math.random()*10)
)


console.log(
    `your amount rupess ${amount} with ending card Number is XX${cardNumber} and OTP is ${otp} please don't share with any one`
)


