// const api =  {
//     key:"7b6e840290fb1aa15e770902a0a3cfe7",
//     baseurl:"https://api.openweathermap.org/data/2.5/",
// }
// const searchbox = document.getElementById("search");
// searchbox.addEventListener("keypress", setQuery);


// function setQuery(e) {
//     getResults(searchbox.value)
//     if (e.keyCode  == 13) {
//         console.log(searchbox.value);
//     }
    
// }
// function getResults(query) {
//     fetch(`${api.baseurl}weather?q=${query}&units=metric&APPID=${api.key}`)
//     .then((weather) => {
//         return weather.json();
//     })
//     .then(displayResults);
// }
// function displayResults(weather) {
//     console.log(weather);
// }
 
const KEY = '7b6e840290fb1aa15e770902a0a3cfe7'


const getData = async (city) =>{
    const base = 'https://api.openweathermap.org/data/2.5/weather'
    const query = `?q=${city}&units=metric&appid=${KEY}`
    const req = await fetch (base + query)
    const data = await req.json()

    return data
}


