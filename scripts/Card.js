import { openPopup, openedPicture, popupCaption, picturePopup } from "./script.js";

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

  _likeBtnHandler() {
    this._buttonLike.classList.toggle('photo-gallery__like-button_active');
  }

  _deleteCardHandler() {
    this._element.remove();
    this._element = null;
  }

  _clickImageHandler() {
    openedPicture.src = this._link;
    openedPicture.alt = this._name;
    popupCaption.textContent = this._name;

    openPopup(picturePopup);
  }

  _setEventListeners() {
    this._buttonLike = this._element.querySelector('.photo-gallery__like-button');
    this._galleryPicture = this._element.querySelector('.photo-gallery__picture');
    this._buttonDelete = this._element.querySelector('.photo-gallery__delete');

    this._buttonDelete.addEventListener('click', () => {
      this._deleteCardHandler();
    });
  
    this._buttonLike.addEventListener('click', () => {
      this._likeBtnHandler();
    });
  
    this._galleryPicture.addEventListener('click', () => {
      this._clickImageHandler();
    });
  }

  createCard() {
    this._element = this._getCardTemplate();
    this._setEventListeners();

    this._galleryPicture.src = this._link;
    this._galleryPicture.alt = this._name;
    this._element.querySelector('.photo-gallery__text').textContent = this._name;

    return this._element;
  }
}