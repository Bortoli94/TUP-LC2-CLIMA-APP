//************************ ELEMENTOS DOM **********************
const addCity = document.getElementById("addCity"); //Input donde se ingresa la ciudad
const sectionStatus = document.getElementById("sectionStatus"); //Seccion donde se muestra los carteles de estatus
const submitCityButton = document.getElementById("submitCity"); //Boton para agregar ciudad
//*************************************************************

// MENSAJES DE STATUS
const messages = {
    success: "Ciudad agregada con éxito",
    error: "Error: La ciudad ingresada no se encuenta en la API o se produjo un error al consultar",
    warning: "La ciudad ingresada ya se encuentra almacenada"
}

submitCityButton.onclick = async function(){
    sectionStatus.innerHTML = loader;  
    
    let cities = getCitiesFromLocalStorage();
    let newCity = addCity.value.toUpperCase();
    
    if(cities.includes(newCity)){
        poster = "warning";
    }else{
        if (await consultAPI(newCity)) {
            cities.push(newCity);
            localStorage.setItem("CITIES", JSON.stringify(cities));
            poster = "success";
        }
        else {
            poster = "error";
        };
    }
    showMessages(poster);
}

function showMessages(poster){
    const paragraph = document.createElement("p");
    paragraph.textContent = messages[poster];
    paragraph.classList.add("status", poster)

    setTimeout(function() {
        sectionStatus.innerHTML = "";
        sectionStatus.appendChild(paragraph); 
        },1500); 
}


