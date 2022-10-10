let popupForm = {
  formClass: 'popup__form',
  textInputClass: 'popup__text-input',
  inputErrorClass: 'popup__text-input_invalid',
  errorActiveClass: 'popup__text-input-error_active',
  saveButtonClass: 'popup__save-button',
  saveButtonInactiveClass: 'popup__save-button_inactive',
}

function showError(inputElement, formElement, formObj, errorMessage) {
  inputElement.classList.add(`${formObj.inputErrorClass}`);
  const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
  errorElement.classList.add(`${formObj.errorActiveClass}`);
  errorElement.textContent = errorMessage;
}

function hideError(inputElement, formElement, formObj) {
  inputElement.classList.remove(`${formObj.inputErrorClass}`);
  const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
  errorElement.classList.remove(`${formObj.errorActiveClass}`);
  errorElement.textContent = '';
}

function checkInputValidity(inputElement, formElement, formObj) {
  if (!inputElement.validity.valid) {
    showError(inputElement, formElement, formObj, inputElement.validationMessage);
  } else {
    hideError(inputElement, formElement, formObj);
  }
}

function hasInvalidInput(inputList) {
  return inputList.some(inputElement => {
    return !inputElement.validity.valid;
  })
}

function toggleButtonState(formElement, inputList, formObj) {
  const formButton = formElement.querySelector(`.${formObj.saveButtonClass}`);
  if (hasInvalidInput(inputList)) {
    formButton.classList.add(formObj.saveButtonInactiveClass);
    formButton.setAttribute('disabled', true);
  } else {
    formButton.classList.remove(formObj.saveButtonInactiveClass);
    formButton.removeAttribute('disabled');
  }
}

function setEventListeners(formElement, formObj) {
  const inputList = Array.from(formElement.querySelectorAll(`.${formObj.textInputClass}`));
  inputList.forEach((inputElement) => {
    inputElement.addEventListener('input', () => {
      checkInputValidity(inputElement, formElement, formObj);
      toggleButtonState(formElement, inputList, formObj);
    })
  })
  toggleButtonState(formElement, inputList, formObj);
}

function enableValidation(formObj) {
  const formList = Array.from(document.querySelectorAll(`.${formObj.formClass}`));
  formList.forEach(formElement => {
    setEventListeners(formElement, formObj);
  })
}

enableValidation(popupForm);

