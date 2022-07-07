//************************ ELEMENTOS DOM ****************
const selectCity = document.getElementById("SelectCity"); //selector de ciudades
const consultButton = document.getElementById("consult"); //boton de consulta clima
const sectionCard = document.getElementById("section-weather-result"); //seccion donde se muestra la card
//*******************************************************

function addCity() {
    let cities = getCitiesFromLocalStorage();
    if (cities.length == 0) {
        selectCity.innerHTML += `<option value="" disabled selected>Debe cargar ciudades</option>`
    }
    else {
        selectCity.innerHTML += `<option value="" disabled selected>Seleccionar Ciudad</option>`
        for (let i = 0; i < cities.length; i++) {
            selectCity.innerHTML += `<option value="${cities[i]}">${cities[i]}</option>`
        }
    }
}

consultButton.onclick = async function (){
    
    sectionCard.innerHTML = loader;
    
    data = await consultAPI(selectCity.value, true);

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


    sectionCard.innerHTML = card;
}

addCity();

