//************************ ELEMENTOS DOM **********************
const addCity = document.getElementById("addCity"); //Input donde se ingresa la ciudad
const sectionStatus = document.getElementById("sectionStatus"); //Seccion donde se muestra los carteles de estatus
const submitCityButton = document.getElementById("submitCity"); //Boton para agregar ciudad
//*************************************************************

//************************ CARTELES  STATUS ****************************************************************************************
const success = '<p class="status success">Ciudad agregada con éxito</p>';
const error = '<p class="status error">Error: La ciudad ingresada no se encuenta en la API o se produjo un error al consultar</p>';
const warning = '<p class="status warning">La ciudad ingresada ya se encuentra almacenada</p>';
//**********************************************************************************************************************************



submitCityButton.onclick = async function(){
    sectionStatus.innerHTML = loader;  
    
    let cities = getCitiesFromLocalStorage();
    let newCity = addCity.value.toUpperCase();
    
    if(cities.includes(newCity)){
        poster = warning;
    }else{
        if (await consultAPI(newCity)) {
            cities.push(newCity);
            localStorage.setItem("CITIES", JSON.stringify(cities));
            poster = success;
        }
        else {
            poster = error;
        };
    }
    setTimeout(function() {sectionStatus.innerHTML = poster;},2000);
}



