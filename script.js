const container = document.querySelector('.container');
const search = document.querySelector('.search-box button');
const weatherBox = document.querySelector('.weather-box');
const details = document.querySelector('.weather-details');

search.addEventListener('click', () => {
    const APIKey = '4c5427391ad44a62c304e459e663f7f4';
    const city = document.querySelector('.search-box input').value;

    if (city == '')
        return;

    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${APIKey}`).then(response => response.json()).then(json => {
        const image = document.querySelector('.weather-box img');
        const temperature = document.querySelector('.weather-box .temp');
        const description = document.querySelector('.weather-box .desc');
        const humidity = document.querySelector('.weather-details .humidity span');
        const wind = document.querySelector('.weather-details .wind span');

        switch (json.weather[0].main) {
            case 'Clear':
                image.src = 'sunny.png';
                break;

            case 'Clouds':
                image.src = 'partly.png';
                break;

            case 'Mist':
                image.src = 'cloudy.png';
                break;

            case 'Haze':
                image.src = 'cloudy.png';
                break;

            case 'Rain':
                image.src = 'rainy.png';
                break;

            case 'Snow':
                image.src = 'snowy.png';
                break;
        
            default:
                image.src = 'partly.png';
        }

        temperature.innerHTML = `${parseInt(json.main.temp)}<span>°C</span>`;
        description.innerHTML = `${json.weather[0].description}`;
        humidity.innerHTML = `${json.main.humidity}%`;
        wind.innerHTML = `${parseInt(json.wind.speed)}Km/h`;
    });
});