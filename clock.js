// 초보자를 위한 바닐라 자바스크립트 #3-1
const clockContainer = document.querySelector(".js-clock"),
    clockTitle = clockContainer.querySelector("h1");

function getTime() {
    const date = new Date();
    const minutes = date.getMinutes();
    const hours = date.getHours();
    const seconds = date.getSeconds();
    clockTitle.innerText = `${hours}:${minutes}:${seconds}`;
}

function init() {
    getTime();
}

init();