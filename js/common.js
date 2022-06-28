const keyApi = "22718e9bd829f98423a40d7a5b44fa3d"
const sectionCard = document.getElementById("section-weather-result");

function getCitiesFromLocalStorage() {
    let cities = localStorage.getItem("CITIES");

    if (cities) {
        cities = JSON.parse(cities);
    } else {
        cities = [];
    }
    return cities;
}

function consultAPI(city) {
    return fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${keyApi}&units=metric&lang=es`)
        .then(response => {
            if (response.ok) return response.json();
            throw new Error("error")
        })
        .then(data => {
            loadCard(data);
        })
        .catch(error => {
            return "error"
        });
}

function loadCard(data) {
    let city = data.name;
    let icon = data.weather[0].icon;
    let temp = data.main.temp;
    let thermalSensation = data.main.feels_like;
    let humidity = data.main.humidity;
    let wind = data.wind.speed;
    let pressure = data.main.pressure;

    let card = `<div class="card">
                    <h3>${city}</h3>
                    <img src="http://openweathermap.org/img/wn/${icon}.png" alt="Estado del tiempo" title="Estado del tiempo">
                    <p>Temperatura: ${temp}°</p>
                    <p>Sensación Térmica: ${thermalSensation}°</p>
                    <p>Humedad: ${humidity}%</p>
                    <p>Velocidad del Viento: ${wind}km/h</p>
                    <p>Presión: ${pressure} P</p>
                </div>`

    if (sectionCard) {
        sectionCard.innerHTML = "";
        sectionCard.innerHTML += card;
    }
}
