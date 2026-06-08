// find Last element in array 

const school = [
    {
        student_name : "abhishake",
        marks : 20
    },
    {
        student_name : "ravi yadav",
        marks : 90
    },
    {
        student_name : "reya",
        marks : 80
    },
    {
        student_name : "neyaaj",
        marks : 50
    }
]

   let findLastOne = school.findLast((elem, indx)=>{
            if(elem.marks > 60 ) {     // findLast method ya find method ka ulta hai 
                return true             // ye last condition jo match karege usko output dega 
            }else {                     // ye bhi sab ki tarah callback leta hai 
                return false
            }    
   })

   console.log(findLastOne.student_name)   // or condition match na hone par undefined show karega 
