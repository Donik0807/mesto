import Popup from "./Popup.js";

export default class PopupWithForm extends Popup {
  constructor(popupSelector, submitFormHandler, openPopupHandler) {
    super(popupSelector);
    this._submitFormHandler = submitFormHandler;
    this._popupForm = this._popup.querySelector('.popup__form');
    this._inputsList = this._popup.querySelectorAll('.popup__text-input');
    this._openPopupHandler = openPopupHandler;
  }

  getInputValues() {
    this._formData = {};
    this._inputsList.forEach(inputElement => {
      this._formData[inputElement.name] = inputElement.value;
    })
    return this._formData;
  }

  setEventListeners() {
    super.setEventListeners();
    this._popupForm.addEventListener('submit', (evt) => {
      evt.preventDefault();
      this._submitFormHandler();
      this.close();
    })
  }

  close() {
    super.close();
    this._popupForm.reset();
  }

  open() {
    this._openPopupHandler();
    super.open();
  }
}