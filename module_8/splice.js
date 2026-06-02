

let arr = [1,2,3,4,5,6];

const remove = arr.splice(1,2,"prince")  // first argument starting index hai || second wala delete kitna krna hai vo length hai 
                                        // or third argument me value add karna hota hai 
console.log(remove)

console.log(arr)   // splice method original array ko modify karta hai 


// Q1 array se 30 ko remove karo

let arr2 = [10,20,30,40,50];

 arr2.splice(2,1)
console.log(arr2)  // output [10,20,40,50]


// Q2 index 1 par "orange add karo"

let fruits = ["apple", "banana","mango"]

fruits.splice(3,0,"orange")

console.log(fruits)


// Q3 3 or 4 ko remove kar do

let nums = [1,2,3,4,5];

nums.splice(2,2)

console.log(nums)


//Q4 blue ko remove karke uski jagah yellow add karo

let colors = ["red","blue", "green"]

colors.splice(1,1,"yellow")

console.log(colors)