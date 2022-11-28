import Popup from "./Popup.js";

export default class PopupWithImage extends Popup {
  constructor(popupSelector) {
    super(popupSelector);
    this._openedPicture = this._popup.querySelector('.popup__image');
    this._popupCaption = this._popup.querySelector('.popup__caption');
  }

  open(src, description) {
    super.open();
    this._openedPicture.src = src;
    this._openedPicture.alt = description;
    this._popupCaption.textContent = description;
  }
}