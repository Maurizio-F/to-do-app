function createTaskElement(task) {
  const label = document.createElement("label");
  const input = document.createElement("input");
  const span = document.createElement("span");

  input.type = "checkbox";
  input.className = "checkbox__input";
  input.checked = task.completed;
  input.onchange = function () {
    completeTask(task.name, input.checked);
  };

  span.className = "checkbox__title";
  span.innerText = task.name;

  label.append(input, span);
  return label;
}

function parseJSONFromLocalStorage(key, defaultValue) {
  const json = localStorage.getItem(key);
  if (json === null) {
    return defaultValue;
  }
  const data = JSON.parse(json);
  return data;
}

const taskList = parseJSONFromLocalStorage("taskList", []);

let taskElementList = taskList.map(function (task) {
  return createTaskElement(task);
});

const taskGroupElement = document.querySelector(".checkbox");

const taskListToday = taskList.filter((item) => item.date === "today");
const taskListTomorrow = taskList.filter((item) => item.date === "tomorrow");
const taskListThisWeek = taskList.filter((item) => item.date === "thisWeek");

const selectRadioGroupTask = document.querySelectorAll(".radio-group__tasks");

const radioGroupTask = document.querySelectorAll(".radio-group__input");

radioGroupTask.forEach((radioButton) => {
  radioButton.onchange = () => createTaskList(radioButton.value);
});

function createTaskList(value) {
  taskGroupElement.innerHTML = "";
  if (value === "today") {
    taskElementList = taskListToday.map(createTaskElement);

    taskGroupElement.append(...taskElementList);
  }

  if (value === "tomorrow") {
    taskElementList = taskListTomorrow.map(createTaskElement);

    taskGroupElement.append(...taskElementList);
  }

  if (value === "thisWeek") {
    taskElementList = taskListThisWeek.map(createTaskElement);

    taskGroupElement.append(...taskElementList);
    console.log(radioGroupTask.value);
  }
}

// function completeTask(task, completed) {
//   const taskList = parseJSONFromLocalStorage("taskList", []);
//   const task = taskList.find(function (task) {
//     return task.name === task;
//   });
//   task.completed = completed;
//   stringifyJSONToLocalStorage("taskList", taskList);
// }

function stringifyJSONToLocalStorage(key, value) {
  const json = JSON.stringify(value);
  localStorage.setItem(key, json);
}
