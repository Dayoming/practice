const body = document.querySelector("body");

const IMG_NUMBER = 4;

// function handleImgLoad() {
//     console.log("finished loading");
// }

function paintImage(imgNumber) {
    // image 안에 새로운 object를 만듬
    const image = new Image();
    image.src = `/todo/images/${imgNumber}.jpg`;
    // image element class 안에 bgImage 추가
    image.classList.add("bgImage");
    body.appendChild(image);
    // API를 사용할 때
    // image.addEventListener("loadend", handleImgLoad);
}

function getRandom() {
    const number = Math.floor(Math.random() * IMG_NUMBER + 1);
    return number;
}

function init() {
    const randomNumber = getRandom();
    console.log(randomNumber);
    paintImage(randomNumber);
}

init();