const taskNameInput = document.querySelector(".form__input");

const formElement = document.querySelector(".form");

// FORM CHECK & NEW TASK

formElement.onsubmit = function (event) {
  event.preventDefault();

  const checkDateInput = document.querySelector(".radio-group__input:checked");

  if (!taskNameInput.value) {
    alert("Please enter task");
    return;
  }

  if (!checkDateInput) {
    alert("Please choose date");
    return;
  }

  const task = {
    name: taskNameInput.value,
    date: checkDateInput.value,
  };

  const taskList = parseJSONFromLocalStorage("taskList", []);
  const newTaskList = appendToArray(task, taskList);
  stringifyJSONToLocalStorage("taskList", newTaskList);
  goToPage("/tasks.html");
};

// FUNCTIONS

function goToPage(href) {
  location.href = href;
}

function parseJSONFromLocalStorage(key, defaultValue) {
  const json = localStorage.getItem(key);
  if (json === null) {
    return defaultValue;
  }
  const data = JSON.parse(json);
  return data;
}

function appendToArray(item, array) {
  return [...array, item];
}

function stringifyJSONToLocalStorage(key, value) {
  const json = JSON.stringify(value);
  localStorage.setItem(key, json);
}
