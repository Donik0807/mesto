export default class FormValidator {
  constructor(objValidate, formSelector) {
    this._objValidate = objValidate;
    this._form = document.querySelector(formSelector);
    this._formButton = this._form.querySelector(`.${this._objValidate.saveButtonClass}`);
    this._inputList = Array.from(this._form.querySelectorAll(`.${this._objValidate.textInputClass}`));
  }

  _showError(inputElement, errorMessage) {
    inputElement.classList.add(this._objValidate.inputErrorClass);
    const errorElement = this._form.querySelector(`.${inputElement.id}-error`);
    errorElement.classList.add(this._objValidate.errorActiveClass);
    errorElement.textContent = errorMessage;
  }

  _hideError(inputElement) {
    inputElement.classList.remove(this._objValidate.inputErrorClass);
    const errorElement = this._form.querySelector(`.${inputElement.id}-error`);
    errorElement.classList.remove(this._objValidate.errorActiveClass);
    errorElement.textContent = '';
  }

  _toggleInputErrorState(inputElement) {
    if (!inputElement.validity.valid) {
      this._showError(inputElement, inputElement.validationMessage);
    } else {
      this._hideError(inputElement);
    }
  }

  _hasInvalidInput() {
    return this._inputList.some(inputElement => {
      return !inputElement.validity.valid;
    })
  }

  _disableButton() {
    this._formButton.classList.add(this._objValidate.saveButtonInactiveClass);
    this._formButton.setAttribute('disabled', true);
  }

  _enableButton() {
    this._formButton.classList.remove(this._objValidate.saveButtonInactiveClass);
    this._formButton.removeAttribute('disabled');
  }

  _toggleButtonState() {
    if (this._hasInvalidInput()) {
      this._disableButton();
    } else {
      this._enableButton();
    }
  }
  
  resetForm() {
    this._toggleButtonState();
    this._inputList.forEach((inputElement) => {
      this._hideError(inputElement);
    })
  }
  
  enableValidation() {
    this._inputList.forEach((inputElement) => {
      inputElement.addEventListener('input', () => {
        this._toggleInputErrorState(inputElement);
        this._toggleButtonState();
      })
    })
  }
} 