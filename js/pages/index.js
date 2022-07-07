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
        for (let i = 0; i < cities.length; i++){
            selectCity.options.add(new Option(cities[i],cities[i]))
        }}}


consultButton.onclick = async function (){
    
    /* sectionCard.innerHTML = loader;*/
    
    data = await consultAPI(selectCity.value, true);

    let city = data.name;
    let icon = data.weather[0].icon;
    let temp = data.main.temp;
    let thermalSensation = data.main.feels_like;
    let humidity = data.main.humidity;
    let wind = data.wind.speed;
    let pressure = data.main.pressure;
    
    const card = document.createElement("div")
    card.setAttribute("class", "card")
    
    const titulo = document.createElement("h3")
    titulo.textContent = city
    
    const img = document.createElement("img")
    img.setAttribute("src",`http://openweathermap.org/img/wn/${icon}.png`)
    
    const temp2 = document.createElement("p")
    temp2.textContent = `Temperatura: ${temp}°`
    
    const sensacionTermica = document.createElement("p")
    sensacionTermica.textContent = `Sensación Térmica: ${thermalSensation}°`
    
    const humedad = document.createElement("p")
    humedad.textContent = `Humedad: ${humidity}%`
    
    const viento = document.createElement("p")
    viento.textContent = `Velocidad del Viento: ${wind}km/h`
    
    const presion = document.createElement("p")
    presion.textContent = `Presión: ${pressure} P`
    
    card.appendChild(titulo)
    card.appendChild(img)
    card.appendChild(temp2)
    card.appendChild(sensacionTermica)
    card.appendChild(humedad)
    card.appendChild(viento)
    card.appendChild(presion)

    sectionCard.appendChild(card)

    /* let card2 = `<div class="card">
                    <h3>${city}</h3>
                    <img src="http://openweathermap.org/img/wn/${icon}.png" alt="Estado del tiempo" title="Estado del tiempo">
                    <p>Temperatura: ${temp}°</p>
                    <p>Sensación Térmica: ${thermalSensation}°</p>
                    <p>Humedad: ${humidity}%</p>
                    <p>Velocidad del Viento: ${wind}km/h</p>
                    <p>Presión: ${pressure} P</p>
                </div>` */

    /* setTimeout(function() {sectionCard.innerHTML = card;},2000); */
}

addCity();

