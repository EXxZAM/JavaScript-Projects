BASE_URL = "http://api.openweathermap.org/data/2.5/weather?q=london&units=metric&appid=6a4359a3d0e585ccbb6d11e0aa267278"

async function getAPI() {
    const response = await fetch(BASE_URL);
    const data = await response.json();
    
    tempMin(data);
}

function tempMin(data) {
    document.getElementById('demo').innerHTML = data['main']['temp']
console.log(data['coord']);
}

getAPI()