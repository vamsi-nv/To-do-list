

const inputField = document.getElementById("input-field");
const addBtn = document.getElementById("add-btn");
const todoList = document.getElementById("todo-list");

addBtn.addEventListener('click', () => {
    if (inputField.value !== "") {
        addTask(inputField.value);
    } else {
        alert("You must write something");
    }
});

function addTask(taskText) {
    const div = document.createElement("div");
    div.classList.add("list-item");

    const li = document.createElement("li");
    li.textContent = taskText;

    const removeBtn = document.createElement("button");
    removeBtn.innerHTML = "&times;";
    removeBtn.classList.add("rm-btn");

    removeBtn.addEventListener('click', () => {
        div.remove();
        saveTasks();
    });


    div.appendChild(li);
    div.appendChild(removeBtn);
    todoList.appendChild(div);

    saveTasks();
    inputField.value = "";
}

function saveTasks() {
    const tasks = [];
    document.querySelectorAll(".list-item li").forEach(li => {
        tasks.push(li.textContent);
    });
    localStorage.setItem("todoListTasks", JSON.stringify(tasks));
}

function loadTasks() {
    const storedTasks = JSON.parse(localStorage.getItem("todoListTasks")) || [];
    storedTasks.forEach(task => addTask(task));
}

loadTasks();
