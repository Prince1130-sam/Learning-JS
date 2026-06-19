

let header = document.getElementsByTagName("h1")  // selecting element by tag name

let para = document.getElementsByTagName("p")

console.log(para)    // it return the HTML Collection  ya array jaisa behaves like array but it not a array 

console.log(header[0].innerText) // ya sabhi element ko select kar lega jo same tag name se hoge 

console.log(para[0].innerText)   // in HTML collection is allow to loop on it but  convert into a array first

console.log(para[1].innerText)



// searching element by Name attribute

let name = document.getElementsByName("userName")  // ya based hai Name attribute ka uper

console.log(name[0].value)   // its work on redio button , input, checkbox, etc
console.log(name[1].value)
console.log(name)   // ya nodeList return karnta hai 