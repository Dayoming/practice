const COORDS = 'coords';

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
}

function handleGeoError() {
    console.log("Cant access geo location");
}

function askForCoords() {
    navigator.geolocation.getCurrentPosition(handleGeoSuccess, handleGeoError);
}

function loadCoords() {
    const loadCords = localStorage.getItem(COORDS);
    if(loadCords === null) {
        askForCoords();
    } else {
        // getWeather
    }
}

function init() {
    loadCoords();
}

init();