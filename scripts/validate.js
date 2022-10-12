const popupValidate = {
  formClass: 'popup__form',
  textInputClass: 'popup__text-input',
  inputErrorClass: 'popup__text-input_invalid',
  errorActiveClass: 'popup__text-input-error_active',
  saveButtonClass: 'popup__save-button',
  saveButtonInactiveClass: 'popup__save-button_inactive',
}

function showError(inputElement, formElement, objValidate, errorMessage) {
  inputElement.classList.add(`${objValidate.inputErrorClass}`);
  const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
  errorElement.classList.add(`${objValidate.errorActiveClass}`);
  errorElement.textContent = errorMessage;
}

function hideError(inputElement, formElement, objValidate) {
  inputElement.classList.remove(`${objValidate.inputErrorClass}`);
  const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
  errorElement.classList.remove(`${objValidate.errorActiveClass}`);
  errorElement.textContent = '';
}

function toggleInputErrorState(inputElement, formElement, objValidate) {
  if (!inputElement.validity.valid) {
    showError(inputElement, formElement, objValidate, inputElement.validationMessage);
  } else {
    hideError(inputElement, formElement, objValidate);
  }
}

function hasInvalidInput(inputList) {
  return inputList.some(inputElement => {
    return !inputElement.validity.valid;
  })
}

function disableButton(formButton, objValidate) {
  formButton.classList.add(objValidate.saveButtonInactiveClass);
  formButton.setAttribute('disabled', true);
}

function enableButton(formButton, objValidate) {
  formButton.classList.remove(objValidate.saveButtonInactiveClass);
  formButton.removeAttribute('disabled');
}

function toggleButtonState(formElement, inputList, objValidate) {
  const formButton = formElement.querySelector(`.${objValidate.saveButtonClass}`);
  if (hasInvalidInput(inputList)) {
    disableButton(formButton, objValidate);
  } else {
    enableButton(formButton, objValidate);
  }
}

function setEventListeners(formElement, objValidate) {
  const inputList = Array.from(formElement.querySelectorAll(`.${objValidate.textInputClass}`));
  inputList.forEach((inputElement) => {
    inputElement.addEventListener('input', () => {
      toggleInputErrorState(inputElement, formElement, objValidate);
      toggleButtonState(formElement, inputList, objValidate);
    })
  })
}

function enableValidation(objValidate) {
  const formList = Array.from(document.querySelectorAll(`.${objValidate.formClass}`));
  formList.forEach(formElement => {
    setEventListeners(formElement, objValidate);
  })
};

enableValidation(popupValidate);
