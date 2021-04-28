const taskNameInput = document.querySelector(".form__input");

const formElement = document.querySelector(".form");

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
  console.log(task);
};
