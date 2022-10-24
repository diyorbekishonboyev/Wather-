const searchbox = document.getElementById('input-search')
const temp = document.getElementById('temperature')
const text  = document.getElementById('text')
const minmax = document.getElementById('min-max')
const deteils = document.getElementById('deteils')
const container = document.getElementById('container')

//  updateUI
const updateUI = (weather) => {
    console.log(weather)
    container.innerHTML=`
   <div class="text" id="text">
   <p>${weather.name},${weather.sys.country}</p>
   <div id="temperature" class="temperature">
       <p>${Math.round(weather.main.temp)} C°</p>
     </div>
    <div class="wehater-icon">
   <i class="fa-solid fa-poo-storm"></i>
    </div>
 <div class="weather">
  <p>${weather.weather[0].main}</p>
 </div>
     <div id="min-max" class="max-min">
     <p>Min${Math.round(weather.main.temp_min)} °C​ / Max${Math.round(weather.main.temp_max)}°C​ </p>
     </div>`
}   

// get weather

const getWeather = async (city) => {
    const data = await getData(city)
    return data
}
// get location
 searchbox.addEventListener('submit',(e) => {
    e.preventDefault()
    const cityName = searchbox.city.value.trim()
    searchbox.reset()
    getWeather(cityName).then((data) => updateUI(data))
} )