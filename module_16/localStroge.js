// Local Stroge

localStorage.setItem('name',"prince")   // browser ka localstorage me data store karne ka liya use hota hai localstorage.setItem() ka use hota hai
// ya do parameter leta hai  first = key or second= value ya parameter key-value ka pair me leta hai
const user = localStorage.getItem('name') // is methed se localstorage se data get kiya jata hai 


localStorage.removeItem("name")// is method se ek espicifya data ko remove kiya jata hai uska (key) se search kar ka 

// console.log(user)

localStorage.clear()  //  ya method ka use pura localstoroge ko clear karne ka liya hota hai 


const object = {name : "prince",age : 23,data:{ class: 2 , mobile: 8081280994}}

localStorage.setItem('user',JSON.stringify(object))  // jab bhi data complex form me ho to JSON.stringify use karna hota hai kyo ki localstorage me data string ka form me hota hai


const value = JSON.parse(localStorage.getItem('user')) // or jab get karna ho tab json.parse ka use karn isse data fir se object ka form me aa jayega
console.log(value.data.mobile) // fir data ko get kar lena