import { openPopup } from "./script.js";

export default class Card {
  constructor(name, link, templateSelector) {
    this._name = name;
    this._link = link;
    this._templateSelector = templateSelector;
  }

  _getCardTemplate() {
    const cardTemplate = document.querySelector(this._templateSelector).content.querySelector('.photo-gallery__element').cloneNode(true);
    return cardTemplate;
  }

  _likeBtnHandler(evt) {
    evt.target.classList.toggle('photo-gallery__like-button_active');
  }

  _deleteCardHandler(evt) {
    evt.target.closest('.photo-gallery__element').remove();
  }

  _clickImageHandler() {
    const picturePopup = document.querySelector('.popup_picture');
    const openedPicture = picturePopup.querySelector('.popup__image');
    const popupCaption = picturePopup.querySelector('.popup__caption');
    openedPicture.src = this._link;
    openedPicture.alt = this._name;
    popupCaption.textContent = this._name;

    openPopup(picturePopup);
  }

  _setEventListeners() {
    this._element.querySelector('.photo-gallery__delete').addEventListener('click', (evt) => {
      this._deleteCardHandler(evt);
    });
  
    this._element.querySelector('.photo-gallery__like-button').addEventListener('click', (evt) => {
      this._likeBtnHandler(evt);
    });
  
    this._element.querySelector('.photo-gallery__picture').addEventListener('click', () => {
      this._clickImageHandler();
    });
  }

  createCard() {
    this._element = this._getCardTemplate();

    this._setEventListeners();

    const galleryPicture = this._element.querySelector('.photo-gallery__picture');
    galleryPicture.src = this._link;
    galleryPicture.alt = this._name;
    this._element.querySelector('.photo-gallery__text').textContent = this._name;

    return this._element;
  }
}