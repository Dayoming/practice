// canvas에는 width와 height를 지정해줘야함
const canvas = document.getElementById("jsCanvas");
const ctx = canvas.getContext("2d");

canvas.width = 700;
canvas.height = 700;

ctx.strokeStyle = "#2c2c2c";
ctx.lineWidth = 2.5;

let painting = false;

function stopPainting() {
    painting = false;
}

function startPainting() {
    painting = true;
}

function onMouseMove(event) {
    // clientXY -> 전체 화면에서의 좌표
    // offsetXY -> 해당 div 안에서의 좌표
    const x = event.offsetX;
    const y = event.offsetY;

    if(!painting) {
        ctx.beginPath();
        ctx.moveTo(x, y);
    } else {
        ctx.lineTo(x, y); 
        ctx.stroke();
    }
}

function onMouseDown(event) {
    painting = true;
}

function onMouseUp(event) {
    stopPainting();
}

if(canvas) {
    // 캔버스 위에서 마우스가 움직일 때
    canvas.addEventListener("mousemove", onMouseMove);
    // 캔버스 위를 클릭했을 때
    canvas.addEventListener("mousedown", startPainting);
    // 캔버스 위를 클릭하고 뗐을 때
    canvas.addEventListener("mouseup", stopPainting);
    // 마우스가 캔버스를 떠나면
    canvas.addEventListener("mouseleave", stopPainting);
}

function init() {

}

init();