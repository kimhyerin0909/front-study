const weather = document.getElementById('temp');
const img = document.getElementById('icon');

navigator.geolocation.getCurrentPosition((position) => {
    doSomething(position.coords.latitude, position.coords.longitude);
});

function doSomething(pos1, pos2) {
    const currentUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${pos1}&lon=${pos2}&appid=ae8a308d9b5c9c9fece25b2bca8d56fe&lang=kr`; 
    fetch(currentUrl, {
        "method":"GET",
    }).then((res) => res.json())
    .then((data) =>  {
        console.log(data);
        const temp = Math.floor(data.main["temp"] - 273.15)+ '°C';
        const local = "@" + data.name;
        const cloud = data.weather[0].description;
        const icon = "http://openweathermap.org/img/w/" + data.weather[0].icon + ".png";
        img.innerHTML = '<img src="'+icon+'">';
        weather.innerHTML =  temp + " / " + local + " / " + cloud;
    })
}
