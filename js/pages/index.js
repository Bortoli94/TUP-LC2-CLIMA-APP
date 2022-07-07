//************************ ELEMENTOS DOM ****************
const selectCity = document.getElementById("SelectCity"); //selector de ciudades
const consultButton = document.getElementById("consult"); //boton de consulta clima
const sectionCard = document.getElementById("section-weather-result"); //seccion donde se muestra la card
//*******************************************************

function addCity() {
    let cities = getCitiesFromLocalStorage();

    if (cities.length == 0) {
        selectCity.innerHTML += `<option value="" disabled selected>Debe agregar ciudad</option>`
    } else {
        selectCity.innerHTML += `<option value="" disabled selected>Seleccionar Ciudad</option>`
        for (let i = 0; i < cities.length; i++) {
            selectCity.options.add(new Option(cities[i], cities[i]))
        }
    }
}

consultButton.onclick = async function () {

    sectionCard.innerHTML= loader;

    data = await consultAPI(selectCity.value, true);

    const card = document.createElement("div")

    const nameCity = document.createElement("h3")
    const icon = document.createElement("img")
    const temp = document.createElement("p")
    const thermalSensation = document.createElement("p")
    const humidity = document.createElement("p")
    const wind = document.createElement("p")
    const pressure = document.createElement("p")

    card.setAttribute("class", "card")
    card.setAttribute("id","eliminar")
    icon.setAttribute("src",`http://openweathermap.org/img/wn/${data.weather[0].icon}.png`)

    nameCity.textContent = data.name
    temp.textContent = `Temperatura: ${data.main.temp}°`
    thermalSensation.textContent = `Sensación Térmica: ${data.main.feels_like}°`
    humidity.textContent = `Humedad: ${data.main.humidity}%`
    wind.textContent = `Velocidad del Viento: ${data.wind.speed}km/h`
    pressure.textContent = `Presión: ${data.main.pressure} P`

    card.appendChild(nameCity)
    card.appendChild(icon)
    card.appendChild(temp)
    card.appendChild(thermalSensation)
    card.appendChild(humidity)
    card.appendChild(wind)
    card.appendChild(pressure)

    setTimeout(function() {
        sectionCard.innerHTML= "";
        sectionCard.appendChild(card);
        },1500); 
}

addCity();

