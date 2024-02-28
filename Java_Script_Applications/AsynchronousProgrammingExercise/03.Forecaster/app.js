function attachEvents() {
    const locationRef = document.getElementById('location');
    const submitRef = document.getElementById('submit');
    const currentRef = document.getElementById('current');
    const upcomingRef = document.getElementById('upcoming');
    const forecastRef = document.getElementById('forecast');
    const locationsUrl = 'http://localhost:3030/jsonstore/forecaster/locations';
    const currentConditionUrl = 'http://localhost:3030/jsonstore/forecaster/today/';
    const threeDayUrl = 'http://localhost:3030/jsonstore/forecaster/upcoming/';

    const sym = { 'Sunny': '&#x2600', 'Partly sunny': '&#x26C5', 'Overcast': '&#x2601', 'Rain': '&#x2614', 'g': '&#176' };

    submitRef.addEventListener('click', submitHandler);

    async function submitHandler() {
        forecastRef.style.display = 'block';
        try {
            const respond = await fetch(locationsUrl);
            const data = await respond.json();
            let [result] = data.filter(destination => destination.name == locationRef.value);
            const conditionRespond = await fetch(currentConditionUrl + result.code);
            const conditionData = await conditionRespond.json();
            const threeDayRespond = await fetch(threeDayUrl + result.code);
            const threeDayData = await threeDayRespond.json();

            currentRef.innerHTML = '<div class="label">Current conditions</div>' + currentCondition(conditionData);
            upcomingRef.innerHTML = '<div class="label">Three-day forecast</div>' + threeDayCondition(threeDayData);
        } catch {
            forecastRef.textContent = 'Error';
        }
        locationRef.value = '';
    }

    function currentCondition(data) {
        let cast = data.forecast;
        let inner = '<div class="forecast">';
        inner += `<span class="condition symbol">${sym[cast.condition]}</span>`;
        inner += '<span class = "condition">';
        inner += `<span class = "forecast-data">${data.name}</span>`;
        inner += `<span class = "forecast-data">${cast.low}${sym.g}/${cast.high}${sym.g}</span>`;
        inner += `<span class = "forecast-data">${cast.condition}</span>`;
        return inner + '</div>';
    }

    function threeDayCondition(data) {
        let inner = '<div class="forecast-info">';
        data.forecast.forEach(day => {
            inner += '<span class= "upcoming">';
            inner += `<span class = "symbol">${sym[day.condition]}</span>`;
            inner += `<span class = "forecast-data">${day.low}${sym.g}/${day.high}${sym.g}</span>`;
            inner += `<span class = "forecast-data">${day.condition}</span>`;
            inner += '</span>';
        });
        return inner + '</div>';
    }
}

attachEvents();