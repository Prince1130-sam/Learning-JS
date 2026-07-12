

const api = "https://api.openweathermap.org/data/2.5/weather?q={city name}&appid={36ba2b3cead574e764b5200f4caaa213}"

const inputValue = document.querySelector(".form-input")
const windspeed = document.querySelector(".windSpeed")
const desc = document.querySelector(".desc")
const temp = document.querySelector(".temp")




function input(e){

e.preventDefault();
const word = document.querySelector("#input").value
console.log(word)

 fetch(`https://api.openweathermap.org/data/2.5/weather?q=${word}&appid=36ba2b3cead574e764b5200f4caaa213`)
 .then((res)=>{
    return res.json()
 }).then((data)=>{
    console.log(data)
      let descp = data.weather[0].description
      let temps =  data.main.temp
      let windspeeds = data.wind.speed 

      windspeed.innerHTML = windspeeds
      desc.innerHTML = descp
      temp.innerHTML = temps

 })
}


inputValue.addEventListener("submit",input)


