
const arr = [1,2,3,4,5,6,7]

const number = arr.slice(1,4)  // hamesa ya do argument lega first start index second number of index or print hamesa length -1 hoga 
console.log(arr)
console.log(number) // this method mot modify the original array 


// Q1 sirf 30 , 40 nikalne ke liya slice()use karna hai

let arr1 = [10,20,30,40,50]

console.log(arr1.slice(2,4));


//Q2 last 2 fruites ko slice() se niklalna hai 

let fruits = ["apple", "banana","Mango","orange","grapes"];

let number1 = fruits.slice(3)

console.log(number1)


//Q3 [4,5,6] output lane ke liya slice ka use karo

let nums = [1,2,3,4,5,6];

let ans = nums.slice(3)

console.log(ans)


// Q4 pura array copy karne ke liya slice()use karo

let colors = ["red", "blue","green", "yellow"];

console.log(colors.slice(0).toString())

// Q5 [200,300,400] output lane ke liya slice()use karo

let arr3 = [100,200,300,400,500];

console.log(arr3.slice(1,4));


