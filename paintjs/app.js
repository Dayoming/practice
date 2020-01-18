const canvas = document.getElementById("jsCanvas");

let painting = false;

function stopPainting() {
    painting = false;
}

function onMouseMove(event) {
    // clientXY -> 전체 화면에서의 좌표
    // offsetXY -> 해당 div 안에서의 좌표
    const x = event.offsetX;
    const y = event.offsetY;
}

function onMouseDown(event) {
    painting = true;
}

function onMouseUp(event) {
    
}

if(canvas) {
    // 캔버스 위에서 마우스가 움직일 때
    canvas.addEventListener("mousemove", onMouseMove);
    // 캔버스 위를 클릭했을 때
    canvas.addEventListener("mousedown", onMouseDown);
    // 캔버스 위를 클릭하고 뗐을 때
    canvas.addEventListener("mouseup", onMouseUp);
    // 마우스가 캔버스를 떠나면
    canvas.addEventListener("mouseleave", stopPainting);
}

function init() {

}

init();