let searchBox = document.getElementById("search-city")
searchBox.addEventListener("keypress",(e)=>{
if(e.keyCode == 13){
    getWeatherData(searchBox.value)
}
})

function getWeatherData (cityName){
    let apiKey = "7e3f21edee540e6110af347b55eb1ab2"
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}&units=metric`)
    .then(res => res.json())
    .then(res => {
        displayWeatherData(res)
    })
}
function displayWeatherData(weatherData){
  let city = document.querySelector(".city")
  let date = document.querySelector(".date")

  let temp = document.querySelector(".temp")
  let weather = document.querySelector(".weather")
  let hiLow = document.querySelector(".hi-low")

  city.innerText = `${weatherData.name}, ${weatherData.sys.country}`
  temp.innerText = `${Math.round(weatherData.main.temp)}°C`
  weatherData.innerText = `${weatherData.weather[0].main}`

  hiLow.innerText = `${Math.round(weatherData.main.temp_min)}°C / ${Math.round(weatherData.main.temp_max)}°C`
    
}
