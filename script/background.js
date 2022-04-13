const now = new Date();
const cityForm = document.querySelector("form");
const card = document.querySelector(".card");
const details = document.querySelector(".details");

const time = document.querySelector("img.time");
const icon = document.querySelector(".icon img")
// ---------------- Background
const body = document.querySelector("body");
const twinky = document.querySelector(".twinkling");
const stars = document.querySelector(".stars")
class Place {

    constructor(lat, lng) {
        this.lat = lat;
        this.lng = lng;
    }
}
function backAt(value) {
    body.classList.add(value)
}
function setBack() {
    if (now.getHours() > 7 && now.getHours() < 16) {
        backAt("day");
        twinky.classList.remove("twinkling");
        stars.classList.remove("stars")
    } else if (now.getHours() > 16 && now.getHours() < 20) {
        backAt("after")
    } else {
        backAt("night")
        twinky.classList.add("twinkling");
        stars.classList.add("stars")
    }
}
setBack();
//-------------------------------------------------------------------------------------------



const updateCity = async (city) => {
    const cityDets = await getCity(city);
    const weather = await getWeather(cityDets.Key);
    //shorthand
    return {
        cityDets,
        weather
    }
}

const updateUI = (data) => {
    //destructure
    const { cityDets, weather } = data;
    //update templates
<<<<<<< HEAD
    details.innerHTML=`
=======
    details.innerHTML = `
>>>>>>> master
    <h5 class="my-3">${cityDets.EnglishName},${cityDets.Country.EnglishName}</h5>
    <div class="my-3">${weather.WeatherText}</div>
    <div class="display-4 my-4">
        <span>${weather.Temperature.Metric.Value}</span>
        <span>&deg;C</span>
    </div>`;
    //update icons
    const iconSrc = `img/icons/${weather.WeatherIcon}.svg`
    icon.setAttribute("src", iconSrc)
    //no se porque esta al reves
<<<<<<< HEAD
    let timeSrc=null;
    weather.IsDayTime? timeSrc = "img/day.svg":timeSrc="img/night.svg";
    time.setAttribute("src",timeSrc);
}
const mapa = ()=>{
    navigator.geolocation.getCurrentPosition(data=>{
        let place = new Place(data.coords.latitude,data.coords.longitude);
        localStorage.setItem("MyPlace",JSON.stringify(place));
    })
=======
    let timeSrc = null;
    weather.IsDayTime ? timeSrc = "img/day.svg" : timeSrc = "img/night.svg";
    time.setAttribute("src", timeSrc);
}
const mapa = async () => {
    let place = new Promise(resolve => navigator.geolocation.getCurrentPosition(data => {
        let place = new Place(data.coords.latitude, data.coords.longitude);
        resolve(place)
    }))
    return place
>>>>>>> master
};

const say = async () => {
    let newObj = await mapa();
    const response = await fetch(`https://nominatim.openstreetmap.org/reverse?lat=${newObj.lat}&lon=${newObj.lng}&format=json&zoom=10`)
    const data = await response.json();
    return data
}

<<<<<<< HEAD
mapa();

//data.plus_code.compound_code
say()
    .then(data=>updateCity(data.address.city)) //.then(data=>{updateCity(data.address.city)}) NO USAR {} intenta resolver la siguiente promesa sin valor
    .then(data=>{updateUI(data)})
    .catch(err=>console.log(err))
=======

//data.plus_code.compound_code
say()
    .then(data => updateCity(data.address.city)) //.then(data=>{updateCity(data.address.city)}) NO USAR {} intenta resolver la siguiente promesa sin valor
    .then(data => { updateUI(data) })
    .catch(err => console.log(err))
>>>>>>> master


cityForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const city = cityForm.city.value.trim();
    cityForm.reset();
    // update ui
    updateCity(city)
<<<<<<< HEAD
    .then(data=>updateUI(data))
    .catch(err=>console.log(err));
=======
        .then(data => updateUI(data))
        .catch(err => console.log(err));
>>>>>>> master
})
