// canvas에는 width와 height를 지정해줘야함
const canvas = document.getElementById("jsCanvas");
const ctx = canvas.getContext("2d");
const colors = document.getElementsByClassName("jsColor");

canvas.width = 700;
canvas.height = 700;

// 우리가 그릴 선들이 모두 이 색을 갖는다
ctx.strokeStyle = "#2c2c2c";
// line의 너비
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
        // 현재의 sub-path에서 마지막 지점(path의 이전 지점)을 특정 좌표로 연결
        ctx.lineTo(x, y); 
        ctx.stroke();
    }
}

function onMouseUp(event) {
    stopPainting();
}

function handleColorClick(event) {
    const color = event.target.style.backgroundColor;
    // strokeStyle을 override하고 context의 색상을 클릭한 색상으로 바꿈
    ctx.strokeStyle = color;
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

// Array.from 메소드는 object로부터 array를 만든다.
Array.from(colors).forEach(color => 
    color.addEventListener("click", handleColorClick));