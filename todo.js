const toDoForm = document.querySelector(".js-toDoForm"),
toDoInput = toDoForm.querySelector("input"),
toDoList = document.querySelector(".js-toDoList");

const TODOS_LS = 'toDos';

function paintToDo(text) {
    // element를 추가하고 싶을 때 createElement
    const li = document.createElement("li");
    const delBtn = document.createElement("button");
    delBtn.innerHTML = "🗑️";
    const span = document.createElement("span");
    span.innerHTML = text;

    // 뭔가를 li의 father element에 넣는다(li안에 span과 delBtn을 넣음)
    // 최종적으로 ul안에 만든 li를 넣는다
    li.appendChild(span);
    li.appendChild(delBtn);
    toDoList.appendChild(li);

}

function handleSubmit(event) {
    event.preventDefault();
    const currentValue = toDoInput.value;
    paintToDo(currentValue);
    toDoInput.value = "";
}

function loadToDos() {
    const toDos = localStorage.getItem(TODOS_LS);
    if(toDos !== null) {

    }
}

function init() {
    loadToDos();
    toDoForm.addEventListener("submit", handleSubmit);
}

init();