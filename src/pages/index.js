import { popupValidate, initialCards } from "../utils/constants.js";
import Card from "../components/Card.js";
import FormValidator from "../components/FormValidator.js";
import Popup from "../components/Popup.js";
import PopupWithForm from "../components/PopupWithForm.js"
import PopupWithImage from "../components/PopupWithImage.js"
import Section from "../components/Seciton.js";
import UserInfo from "../components/UserInfo.js";
import './index.css';

const userInfo = new UserInfo('.profile__name', '.profile__status');

const editFormValidator = new FormValidator(popupValidate, '.popup_edit .popup__form');
editFormValidator.enableValidation();
editFormValidator.resetForm();

const editProfilePopup = new PopupWithForm('.popup_edit', 
  () => {
    const formData = editProfilePopup.getInputValues();
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

function createCard(card) {
  const cardElement = new Card(card.name, card.link, '#photo-gallery__element', 
  () => {
    picturePopup.open(card.link, card.name);
  });
  return cardElement.createCard();
}

const picturePopup = new PopupWithImage('.popup_picture');
picturePopup.setEventListeners();

const cardSection = new Section({
  items: initialCards,
  renderer: (card) => {
    cardSection.addItem(createCard(card));
  } 
}, '.photo-gallery');
cardSection.renderItems();

const cardFormValidator = new FormValidator(popupValidate, '.popup_add-card .popup__form');
cardFormValidator.enableValidation();
cardFormValidator.resetForm();

const cardPopup = new PopupWithForm('.popup_add-card', 
  () => {
    const formData = cardPopup.getInputValues();
    cardSection.addItem(createCard(formData));
  },
  () => {
    cardFormValidator.resetForm();
  }
);

cardPopup.setEventListeners();

document.querySelector('.profile__add-button').addEventListener('click', () => {
  cardPopup.open();
});
