function createTaskElement(taskName) {
  const label = document.createElement("label");
  const input = document.createElement("input");
  const span = document.createElement("span");

  input.type = "checkbox";
  input.className = "checkbox__input";

  span.className = "checkbox__title";
  span.innerText = taskName;

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

let taskElement = taskList.map(function (task) {
  return createTaskElement(task.name);
});

const taskGroupElement = document.querySelector(".checkbox");

// taskGroupElement.append(...taskElement);

let today = taskList.filter((item) => item.date == "today");
let tomorrow = taskList.filter((item) => item.date == "tomorrow");
let thisWeek = taskList.filter((item) => item.date == "thisWeek");

const selectRadioGroupTask = document.querySelectorAll(".radio-group__tasks");

// if (selectRadioGroupTask.value == "today") {
//   // return today;
// }

// console.log(selectRadioGroupTask);

// const test = document.querySelector(".radio-group__input:checked");
// // test.checked = true;
const radioGroupTask = document.querySelectorAll(".radio-group__input");

radioGroupTask.forEach((radioButton) => {
  radioButton.onchange = () => createTaskList(radioButton.value);
});

function createTaskList(value) {
  // taskGroupElement.value = value;

  // if (radioGroupTask == null) {
  //   taskGroupElement.append(...taskElement);
  // } else {
  if (value == "today") {
    taskElement = today.map(function (task) {
      return createTaskElement(task.name);
    });

    taskGroupElement.append(...taskElement);
  }

  if (value == "tomorrow") {
    taskElement = tomorrow.map(function (task) {
      return createTaskElement(task.name);
    });

    taskGroupElement.append(...taskElement);
  }

  if (value == "thisWeek") {
    taskElement = thisWeek.map(function (task) {
      return createTaskElement(task.name);
    });

    taskGroupElement.append(...taskElement);
    console.log(radioGroupTask.value);
  }
}
// }

// console.log(taskElement);

// console.log(taskGroupElement, taskElement);

// console.log("today: ", today);
// console.log("tomorrrow: ", tomorrow);
// console.log("selectDate: ", selectDate);

// const radioButtons = document.querySelectorAll("radio-group__input");
// console.log(radioButtons)
