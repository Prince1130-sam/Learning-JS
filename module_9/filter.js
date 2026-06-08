// the filter()method is used to create a new array containing elements that meet a specifed condition 

let marks = [{
    first_name : "prince kumar yadav",
    marks : "79",
},
{
first_name : "anil",
marks : "57"
},
{
 first_name : "samriddhi parkash",
 marks : "79",
},
{
    first_name : "suraj",
    marks : "60",
}
]

let result = marks.filter((elem , ind)=>{
        if(elem.marks > 60){   // ya ek new array banta hai  har bar 
            return true   // ya ek callback leta hai or original array ko modify bhi nahi karta hai
        }else {
            return false  // ye method ek new array create karta hai jo contain karta hai element jo jo condition se meet karta ho
        }
})

for(let i = 0 ;  i < result.length ; i++){
   console.log(result[i].first_name)
}





