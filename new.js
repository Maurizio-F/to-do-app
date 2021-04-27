const taskNameInput = document.querySelector(".form__input");

const formElement = document.querySelector(".form");

formElement.onsubmit = function (event) {
  event.preventDefault();

  const checkDateInput = document.querySelector(".radio-group__input:checked");

  if (!taskNameInput.value) {
    alert("Please enter task");
  } else if (!checkDateInput) {
    alert("Please choose date");
  } else {
    console.log(taskNameInput.value, checkDateInput.value);
  }
};
