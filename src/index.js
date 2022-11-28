import { popupValidate, initialCards } from "./utils/constants.js";
import Card from "./components/Card.js";
import FormValidator from "./components/FormValidator.js";
import Popup from "./components/Popup.js";
import PopupWithForm from "./components/PopupWithForm.js"
import PopupWithImage from "./components/PopupWithImage.js"
import Section from "./components/Seciton.js";
import UserInfo from "./components/UserInfo.js";
import './pages/index.css';

//////////////////////////////////////////////////////////////////////////////////////////////
const userInfo = new UserInfo('.profile__name', '.profile__status');

const editFormValidator = new FormValidator(popupValidate, '.popup_edit .popup__form');
editFormValidator.enableValidation();
editFormValidator.resetForm();

const editProfilePopup = new PopupWithForm('.popup_edit', 
  () => {
    const formData = editProfilePopup._getInputValues();
    userInfo.setUserInfo(formData["name"], formData["about"]);
  }, 
  () => {
    const userData = userInfo.getUserInfo();
    editProfilePopup._popupForm.elements.name.value = userData.name;
    editProfilePopup._popupForm.elements.about.value = userData.status;
    editFormValidator.resetForm();
  }
);

editProfilePopup.setEventListeners();

document.querySelector('.profile__edit-button').addEventListener('click', () => {
  editProfilePopup.open();
});
//////////////////////////////////////////////////////////////////////////////////////////////

//////////////////////////////////////////////////////////////////////////////////////////////
const picturePopup = new PopupWithImage('.popup_picture');
picturePopup.setEventListeners();

const cardSection = new Section({
  items: initialCards,
  renderer: (card) => {
    const cardElement = new Card(card.name, card.link, '#photo-gallery__element', 
      () => {
        picturePopup.open(card.link, card.name);
      }
    );
    cardSection.addItem(cardElement.createCard());
  } 
}, '.photo-gallery');

cardSection.renderItems();
//////////////////////////////////////////////////////////////////////////////////////////////

//////////////////////////////////////////////////////////////////////////////////////////////
const cardFormValidator = new FormValidator(popupValidate, '.popup_add-card .popup__form');
cardFormValidator.enableValidation();
cardFormValidator.resetForm();

const cardPopup = new PopupWithForm('.popup_add-card', 
  () => {
    const formData = cardPopup._getInputValues();
    const cardElement = new Card(formData["title"], formData["link"], '#photo-gallery__element', () => {
      picturePopup.open(formData["link"], formData["title"]);
    });
    cardSection.addItem(cardElement.createCard());
  },
  () => {
    cardPopup._popupForm.reset();
    cardFormValidator.resetForm();
  }
);

cardPopup.setEventListeners();

document.querySelector('.profile__add-button').addEventListener('click', () => {
  cardPopup.open();
});
//////////////////////////////////////////////////////////////////////////////////////////////