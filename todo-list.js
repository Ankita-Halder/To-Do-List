const addBtn = document.querySelector("#add-btn");
const newTask = document.querySelector("#new-task");
const taskList = document.querySelector("#task-List");
const deleteAllBtn = document.querySelector("#delete-all");
const resetBtn = document.querySelector("#reset");

addBtn.addEventListener("click", () => {
  const taskText = newTask.value;
  if (taskText !== "") {
    const li = document.createElement("li");
    li.textContent = taskText;

    li.addEventListener("click", () => {
      if (!li.classList.contains("completed")) {
        li.classList.add("completed");
      } else {
        li.classList.remove("completed");
      }
    });

    taskList.appendChild(li);
    newTask.value = "";
  }
});

newTask.addEventListener("keypress", (e) => {
  if (e.key === "Enter") {
    e.preventDefault();
    addBtn.click();
  }
});

deleteAllBtn.addEventListener("click", () => {
  taskList.innerHTML = "";
});

resetBtn.addEventListener("click", () => {
  newTask.value = "";
});
