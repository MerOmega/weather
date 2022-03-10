const now = new Date();
const body = document.querySelector("body");
const twinky= document.querySelector(".twinkling");
const stars= document.querySelector(".stars")
class Place{
    
    constructor(lat,lng){
        this.lat=lat;
        this.lng=lng;
    }
}
function backAt(value){
    body.classList.add(value)
}
function setBack(){
    if(now.getHours()>7 && now.getHours()<16){
        backAt("day");
        twinky.classList.remove("twinkling");
        stars.classList.remove("stars")
    }else if(now.getHours()>16 && now.getHours()<20){
        backAt("after")
    }else{
        backAt("night")
        twinky.classList.add("twinkling");
        stars.classList.add("stars")
    }
}

const mapa = ()=>{
        navigator.geolocation.getCurrentPosition(data=>{
            let place = new Place(data.coords.latitude,data.coords.longitude);
            console.log(place)
            localStorage.setItem("MyPlace",JSON.stringify(place));
        })
};

const say = async ()=>{ 
    // const response = await fetch('https://maps.googleapis.com/maps/api/geocode/json?latlng=-34.9321,-57.9533&key=AIzaSyA1ne0B5mpGle2-P_YgGuYZ5tFRbJHt8NA')
    let newObj = JSON.parse(localStorage.getItem("MyPlace"));
    const response = await fetch(`https://nominatim.openstreetmap.org/reverse?lat=${newObj.lat}&lon=${newObj.lng}&format=json&zoom=10`)
    const data = await response.json();   
    return data 
}

//data.plus_code.compound_code
say().then(data=>{
    console.log(data.address.city)
})
setBack();