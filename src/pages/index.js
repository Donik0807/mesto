import { popupValidate } from "../utils/constants.js";
import Card from "../components/Card.js";
import FormValidator from "../components/FormValidator.js";
import Popup from "../components/Popup.js";
import PopupWithForm from "../components/PopupWithForm.js"
import PopupWithImage from "../components/PopupWithImage.js"
import Section from "../components/Seciton.js";
import UserInfo from "../components/UserInfo.js";
import Api from "../components/Api.js";
import './index.css';
import PopupDelete from "../components/PopupDelete.js";

const api = new Api({
  baseUrl: 'https://mesto.nomoreparties.co/v1/cohort-54',
  headers: {
    authorization: '53cfd87d-4664-4b5c-8360-0fdacb6bc4ed'
}});

const avatarPopup = new PopupWithForm('.popup_avatar', 
  () => {
    avatarPopup.setMessage('Сохранение...');
    const formData = avatarPopup.getInputValues();
    api.updateProfilePicture(formData.link)
      .then(json => {
        userInfo.setUserAvatar(json.avatar);
        avatarPopup.close();
      }).catch(error => {
        console.log(error);
      }).finally(() => {
        avatarPopup.setMessage('Сохранить');
      })
  },
  () => {
    avatarFormValidator.resetForm();
  }
);

avatarPopup.setEventListeners();

const avatarFormValidator = new FormValidator(popupValidate, '.popup_avatar .popup__form');
avatarFormValidator.enableValidation();
avatarFormValidator.resetForm();

const userInfo = new UserInfo('.profile__name', '.profile__status', '.profile__avatar');
document.querySelector('.profile__avatar-container').addEventListener('click', () => {
  avatarPopup.open();
});

const editFormValidator = new FormValidator(popupValidate, '.popup_edit .popup__form');
editFormValidator.enableValidation();
editFormValidator.resetForm();

const editProfilePopup = new PopupWithForm('.popup_edit', 
  () => {
    editProfilePopup.setMessage('Сохранение...');
    const formData = editProfilePopup.getInputValues();
    api.editUser(formData)
      .then(json => {
        userInfo.setUserInfo(json["name"], json["about"]);
        editProfilePopup.close();
      }).catch(error => {
        console.log(error);
      }).finally(() => {
        editProfilePopup.setMessage('Сохранить');
      });
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

const popupDelete = new PopupDelete('.popup_delete', 
  () => {
    api.deleteCard(popupDelete.elementId)
      .then(res => {
        if (res.ok) {
          popupDelete.elementToDelete.remove();
          popupDelete.close();
          popupDelete.setElementToDelete(null, null);
        } else {
          return new Promise.reject(`Ошибка: ${res.status}`);
        }
      }).catch(error => {
        console.log(error);
      })
})

popupDelete.setEventListeners();

function createCard(card) {
  const cardElement = new Card(card, '#photo-gallery__element', 
  () => {
    picturePopup.open(card.link, card.name);
  }, 
  () => {
    popupDelete.open();
    popupDelete.setElementToDelete(cardElement._element, cardElement._cardInfo._id);
  }, 
  () => {
    if (!cardElement._buttonLike.classList.contains('photo-gallery__like-button_active')) {
      api.likeCard(cardElement._cardInfo._id)
        .then(json => {
          cardElement.likeCard(json);
        }).catch(error => {
          console.log(error);
        })
    } else {
      api.dislikeCard(cardElement._cardInfo._id)
        .then(json => {
          cardElement.dislikeCard(json);
        }).catch(error => {
          console.log(error);
        })
    }
  }, api.myId);
  return cardElement.createCard();
}

const picturePopup = new PopupWithImage('.popup_picture');
picturePopup.setEventListeners();

const cardSection = new Section({
  items: [],
  renderer: (card) => {
    cardSection.addItem(createCard(card));
  } 
}, '.photo-gallery');


const cardFormValidator = new FormValidator(popupValidate, '.popup_add-card .popup__form');
cardFormValidator.enableValidation();
cardFormValidator.resetForm();

const cardPopup = new PopupWithForm('.popup_add-card', 
  () => {
    cardPopup.setMessage('Создание...');
    const formData = cardPopup.getInputValues();
    api.postCard(formData)
      .then(json => {
        cardSection.addItem(createCard(json));
        cardPopup.close();
      }).catch(error => {
        console.log(error);
      }).finally(() => {
        cardPopup.setMessage('Создать');
      })
  },
  () => {
    cardFormValidator.resetForm();
  }
);

cardPopup.setEventListeners();

document.querySelector('.profile__add-button').addEventListener('click', () => {
  cardPopup.open();
});

Promise.all([api.getUser(), api.getInitialCards()])
  .then(([userData, initialCards]) => {
    api.myId = userData._id;
    userInfo.setUserInfo(userData.name, userData.about);
    userInfo.setUserAvatar(userData.avatar);
    cardSection.items = initialCards;
    cardSection.renderItems();
  }).catch(err => {
    console.log(err);
  })