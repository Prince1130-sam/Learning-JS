

// create a element Dynamically  and add in the body element in HTML Page

let input = document.createElement("p")   // element tag create karne ka liya 

input.innerText = 'hello its come from js file'

document.body.appendChild(input)   // appendChild se body wale element me pergraph tag add hoga nahi to nahi

