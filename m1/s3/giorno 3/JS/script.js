
const inputTask = document.getElementById("inputTask");
const addButton = document.querySelector(".bottoneAggiungi");
const taskList = document.querySelector(".lista");


function createNewTask(text) {
  const li = document.createElement("li");
  const taskText = document.createElement("span");
  taskText.textContent = text;
  const deleteButton = document.createElement("button");
  deleteButton.textContent = "Elimina";
  li.appendChild(taskText);
  li.appendChild(deleteButton);
  taskList.appendChild(li);

 
  li.addEventListener("click", function () {
    li.classList.toggle("completato");
  });

  deleteButton.addEventListener("click", function () {
    taskList.removeChild(li);
  });


  inputTask.value = "";
}

addButton.addEventListener("click", function () {
  const taskText = inputTask.value.trim();
  if (taskText !== "") {
    createNewTask(taskText);
  }
});


inputTask.addEventListener("keyup", function (event) {
  if (event.key === "Enter") {
    const taskText = inputTask.value.trim();
    if (taskText !== "") {
      createNewTask(taskText);
    }
  }
});


