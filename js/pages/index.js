//************************ ELEMENTOS DOM ****************
const selectCity = document.getElementById("SelectCity"); //selector de ciudades
const consultButton = document.getElementById("consult"); //boton de consulta clima
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

consultButton.onclick = function (){
    sectionCard.innerHTML = loader;
    consultAPI(selectCity.value);
}

addCity();

