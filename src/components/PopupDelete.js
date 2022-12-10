import Popup from "./Popup.js";

export default class PopupDelete extends Popup {
  constructor(popupSelector, deleteHandler) {
    super(popupSelector);
    this._deleteHandler = deleteHandler;
  }

  setEventListeners() {
    super.setEventListeners();
    this._deleteButton = this._popup.querySelector('.popup__save-button');
    this._deleteButton.addEventListener('click', () => {
      this._deleteHandler();
    })
  }

  setElementToDelete(elementToDelete, elementId) {
    this.elementToDelete = elementToDelete;
    this.elementId = elementId;
  }
}