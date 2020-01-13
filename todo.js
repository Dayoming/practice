const toDoForm = document.querySelector(".js-toDoForm"),
toDoInput = toDoForm.querySelector("input"),
toDoList = document.querySelector(".js-toDoList");

const TODOS_LS = 'toDos';

const toDos = [];

function saveToDos() {
    // local storage에는 자바스크립트의 data를 저장할 수 없음. 오직 string
    // JSON.stringify가 자바스크립트 object를 string으로 바꿔줌
    // JSON -> Javascript Object Notation(데이터를 전달할 때, 자바스크립트가
    // 그걸 다룰 수 있도록 object로 바꾸어주는 기능)
    localStorage.setItem(TODOS_LS, JSON.stringify(toDos));
}

function paintToDo(text) {
    // element를 추가하고 싶을 때 createElement
    const li = document.createElement("li");
    const delBtn = document.createElement("button");
    const span = document.createElement("span");
    const newId = toDos.length + 1;
    const toDoObj = {
        text: text,
        id: newId
    };

    delBtn.innerHTML = "🗑️";
    span.innerHTML = text;

    toDos.push(toDoObj);
    saveToDos();

    // 뭔가를 li의 father element에 넣는다(li안에 span과 delBtn을 넣음)
    // 최종적으로 ul안에 만든 li를 넣는다
    li.appendChild(span);
    li.appendChild(delBtn);
    li.id = newId;
    toDoList.appendChild(li);

}

function handleSubmit(event) {
    event.preventDefault();
    const currentValue = toDoInput.value;
    paintToDo(currentValue);
    toDoInput.value = "";
}

// forEach 테스트 함수
function something(toDo) {
    console.log(toDo);
}

function loadToDos() {
    const loadToDos = localStorage.getItem(TODOS_LS);
    if(loadToDos !== null) {
        // 가져온 것을 자바스크립트 object로 변환
        const parsedToDos = JSON.parse(loadToDos);
        
        // Array는 forEach를 가지는데, array에 담겨있는 것들 각각에 한번씩 함수 실행
        // 바깥에 있는 함수도 실행 가능
        // parsedToDos.forEach(something);

        // local storage에서 가져온 toDoList를 li에 추가함
        parsedToDos.forEach(function(toDo) {
            paintToDo(toDo.text);
        });
    }
}

function init() {
    loadToDos();
    toDoForm.addEventListener("submit", handleSubmit);
}

init();