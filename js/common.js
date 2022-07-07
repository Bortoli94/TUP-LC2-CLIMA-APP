const keyApi = "22718e9bd829f98423a40d7a5b44fa3d"; //Clave obtenida de la webAPI
const loader = '<div class="loader-animation"><div></div><div></div><div></div></div>'; //loader


function getCitiesFromLocalStorage() {
    let cities = localStorage.getItem("CITIES");

    if (cities) {
        cities = JSON.parse(cities);
    } else {
        cities = [];
    }
    return cities;
}

function consultAPI(city, flag=false) {
    let send = fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${keyApi}&units=metric&lang=es`)
    .then(response => {
        if (response.ok){ 
            return response.json();
        } else {
            throw Error();
        }})
    .then(data => {
        if (flag){
            return data
        }
        return true
    })
    .catch(err => {
        return false
    })

    return send;
}



