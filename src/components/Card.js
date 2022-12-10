export default class Card {
  constructor(cardInfo, templateSelector, handleCardClick, deleteCardHandler, likeHandler, myId) {
    this._cardInfo = cardInfo;
    this._templateSelector = templateSelector;
    this._handleCardClick = handleCardClick;
    this._deleteCardHandler = deleteCardHandler;
    this._likeHandler = likeHandler;
    this._myId = myId;
  }

  _getCardTemplate() {
    const cardTemplate = document.querySelector(this._templateSelector).content.querySelector('.photo-gallery__element').cloneNode(true);
    return cardTemplate;
  }

  _setEventListeners() {
    if (this._cardInfo.owner._id === this._myId) {
      this._buttonDelete.addEventListener('click', () => {
        this._deleteCardHandler();
      });
    } else {
      this._buttonDelete.hidden = true;
    }
    
    this._buttonLike.addEventListener('click', () => {
      this._likeHandler();
    });
  
    this._galleryPicture.addEventListener('click', () => {
      this._handleCardClick();
    });
  }

  _checkLike() {
    return this._cardInfo.likes.find(user => {
      if (user._id === this._myId) {
        return true;
      } else return false;
    })
  }

  likeCard(json) {
    this._buttonLike.classList.add('photo-gallery__like-button_active');
    this._likesCount.textContent = json.likes.length;
  }

  dislikeCard(json) {
    this._buttonLike.classList.remove('photo-gallery__like-button_active');
    this._likesCount.textContent = json.likes.length;
  }

  createCard() {
    this._element = this._getCardTemplate();
    this._buttonLike = this._element.querySelector('.photo-gallery__like-button');
    
    if (this._checkLike()) {
      this._buttonLike.classList.add('photo-gallery__like-button_active');
    }

    this._galleryPicture = this._element.querySelector('.photo-gallery__picture');
    this._buttonDelete = this._element.querySelector('.photo-gallery__delete');
    this._likesCount = this._element.querySelector('.photo-gallery__like-count');
    this._setEventListeners();

    this._galleryPicture.src = this._cardInfo.link;
    this._galleryPicture.alt = this._cardInfo.name;
    this._element.querySelector('.photo-gallery__text').textContent = this._cardInfo.name;
    this._likesCount.textContent = this._cardInfo.likes.length;

    return this._element;
  }
}