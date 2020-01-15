const API_KEY = '77dbe507f648f054bf1af23f91fbbf7c';
const weather = document.querySelector('.js-weather');
const COORDS = 'coords';

function getWeather(lat, lon) {
    // fetch는 해당 사이트에 request를 보냄
    // then은 fetch가 실행될때까지 기다렸다가 해당 함수를 실행함

    // api 서버에 요청을 보내고, 해당 요청이 끝나면 받아온 response 정보를 json으로 바꿈
    fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appId=${API_KEY}&units=metric`)
    .then(function(response) {
       return response.json();
    })
    .then(function(json) {
        const temp = json.main.temp;
        const place = json.name;
        weather.innerText = `${temp} @ ${place}`;
    });
}

function saveCoords(coordsObj) {
    localStorage.setItem(COORDS, JSON.stringify(coordsObj));
}

// 좌표를 가져오는데 성공했을 때를 처리하는 함수
function handleGeoSuccess(position) {
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;
    // 객체의 key와 value값의 이름이 같을땐 이렇게 작성할 수 있음
    // latitude = latitude, longitude = longitude
    const coordsObj = {
        latitude, longitude
    };

    saveCoords(coordsObj);
    getWeather(latitude, longitude);
}

function handleGeoError() {
    console.log("Cant access geo location");
}

function askForCoords() {
    navigator.geolocation.getCurrentPosition(handleGeoSuccess, handleGeoError);
}

function loadCoords() {
    const loadCoords = localStorage.getItem(COORDS);
    // local storage에 현재 위치가 존재하지 않으면
    if(loadCoords === null) {
        askForCoords();
    // 존재하면
    } else {
        const parsedCoords = JSON.parse(loadCoords);
        getWeather(parsedCoords.latitude, parsedCoords.longitude);
    }
}

function init() {
    loadCoords();
}

init();