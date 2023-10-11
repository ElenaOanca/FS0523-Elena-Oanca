

document.addEventListener("DOMContentLoaded", function() {
    const inputTask = document.getElementById("inputTask");
    const addButton = document.querySelector(".bottoneAggiungi");
    const taskList = document.querySelector(".lista");

    addButton.addEventListener("click", function() {
        const taskText = inputTask.value.trim();
        if (taskText !== "") {
            addTask(taskText);
            inputTask.value = "";
        }
    });

    inputTask.addEventListener("keydown", function(event) {
        if (event.key === "Enter") {
            const taskText = inputTask.value.trim();
            if (taskText !== "") {
                addTask(taskText);
                inputTask.value = "";
            }
        }
    });

    taskList.addEventListener("click", function(event) {
        if (event.target.classList.contains("delete-task")) {
            removeTask(event.target.parentElement);
        } else if (event.target.tagName === "LI") {
            toggleComplete(event.target);
        }
    });

    //addButtonComplete.addEventListener("click", function() {  
    if('click'){
        bottonComplete.onclick = function () {
            newTask.style.textDecoration = "line-through";
        }});

    function addTask(taskText) {
        const li = document.createElement("li");
        li.textContent = taskText;

        li.innerHTML += '<button class="delete-task">Elimina</button> <button class="complete-task">Complete</button>';
        
        taskList.appendChild(li);
    }

    function removeTask(taskElement) {
        taskElement.remove();
    }

    function toggleComplete(taskElement) {
        taskElement.classList.toggle("completato");
    }
});



