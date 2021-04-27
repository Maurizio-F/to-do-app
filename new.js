const taskNameInput = document.querySelector(".form__input");

const formElement = document.querySelector(".form");

formElement.onsubmit = function (event) {
  event.preventDefault();

  const checkDateInput = document.querySelector(".radio-group__input:checked");

  console.log(taskNameInput.value, checkDateInput.value);
};
