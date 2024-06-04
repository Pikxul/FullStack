document.getElementById('searchButton').addEventListener('click', getWeather);

const apiKey = 'your_openweathermap_api_key';
const weatherUrl = 'https://api.openweathermap.org/data/2.5/weather';
const forecastUrl = 'https://api.openweathermap.org/data/2.5/forecast';

function getWeather() {
    const city = document.getElementById('cityInput').value;
    fetch(`${weatherUrl}?q=${city}&appid=${apiKey}&units=metric`)
        .then(response => response.json())
        .then(data => {
            displayWeather(data);
            getForecast(city);
        })
        .catch(error => console.error('Error fetching the weather data:', error));
}

function getForecast(city) {
    fetch(`${forecastUrl}?q=${city}&appid=${apiKey}&units=metric`)
        .then(response => response.json())
        .then(data => displayForecast(data))
        .catch(error => console.error('Error fetching the forecast data:', error));
}
function displayWeather(data) {
    const weatherDisplay = document.getElementById('weatherDisplay');
    const { name, main, weather } = data;
    weatherDisplay.innerHTML = `
        <h2>Current Weather in ${name}</h2>
        <p>Temperature: ${main.temp} °C</p>
        <p>Humidity: ${main.humidity}%</p>
        <p>${weather[0].description}</p>
    `;
}
function displayForecast(data) {
    const forecastDisplay = document.getElementById('forecastDisplay');
    forecastDisplay.innerHTML = '<h2>5-Day Forecast</h2>';

    const forecastList = data.list.filter(item => item.dt_txt.includes('12:00:00'));
    forecastList.forEach(item => {
        const date = new Date(item.dt_txt);
        forecastDisplay.innerHTML += `
            <div>
                <p><strong>${date.toDateString()}</strong></p>
                <p>Temp: ${item.main.temp} °C</p>
                <p>${item.weather[0].description}</p>
            </div>
        `;
    });
}
