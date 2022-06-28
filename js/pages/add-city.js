const addCity = document.getElementById("addCity"); //Input donde se ingresa la ciudad
const sectionStatus = document.getElementById("sectionStatus"); //Seccion donde se muestra los carteles de estatus
const submitCityButton = document.getElementById("submitCity"); //Boton para agregar ciudad
const removeStatus = document.getElementsByClassName("status"); //Clase del cartel de estatus

//************************CARTELES  STATUS******************************************
const success = '<p class="status success">Ciudad agregada con éxito</p>';
const error = '<p class="status error">Error: La ciudad ingresada no se encuenta en la API o se produjo un error al consultar</p>';
const warning = '<p class="status warning">La ciudad ingresada ya se encuentra almacenada</p>';
//**********************************************************************************
let cities = getCitiesFromLocalStorage();

async function addNewCityToLocalStorage() {
    let newCity = addCity.value.toUpperCase();  
    
    switch(await validateCity(newCity)) {
        case "success":
            cities.push(newCity);
            localStorage.setItem("CITIES", JSON.stringify(cities));
            sectionStatus.innerHTML = success;
            break;
        case "warning":
            sectionStatus.innerHTML = warning;
            break;
        case "error":
            sectionStatus.innerHTML = error;        
            break;
    };
    setTimeout(function() {removeStatus[0].remove();},3000);
};

async function validateCity(newCity) {
    for (let i = 0; i < cities.length; i++) {
        if (newCity == cities[i]) {
            return "warning";
        };
    };

    if (await consultAPI(newCity) == "error") {
        return "error";
    }
    else {
        return "success";
    };
}

submitCityButton.addEventListener("click", addNewCityToLocalStorage);