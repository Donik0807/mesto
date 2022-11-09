import Card from "./Card.js";
import FormValidator from "./FormValidator.js";

const popupValidate = {
  formClass: 'popup__form',
  textInputClass: 'popup__text-input',
  inputErrorClass: 'popup__text-input_invalid',
  errorActiveClass: 'popup__text-input-error_active',
  saveButtonClass: 'popup__save-button',
  saveButtonInactiveClass: 'popup__save-button_inactive',
};

const initialCards = [
    {
      name: 'Архыз',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
    },
    {
      name: 'Челябинская область',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
    },
    {
      name: 'Иваново',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
    },
    {
      name: 'Камчатка',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
    },
    {
      name: 'Холмогорский район',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
    },
    {
      name: 'Байкал',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
    }
];
  
// функция для закрытия окна по кнопке Esc
function setEsc(evt) {
  if (evt.key == 'Escape') {
    closePopup(document.querySelector('.popup_opened'));
  }
}

export function openPopup(popup) {
  popup.classList.add('popup_opened');
  document.addEventListener('keydown', setEsc);
}

function closePopup(popup) {
  popup.classList.remove('popup_opened');
  document.removeEventListener('keydown', setEsc);
}

export const picturePopup = document.querySelector('.popup_picture');
export const openedPicture = picturePopup.querySelector('.popup__image');
export const popupCaption = picturePopup.querySelector('.popup__caption');

const photoGallery = document.querySelector('.photo-gallery');

function generateCard(cardName, cardLink, templateSelector) {
  const cardObj = new Card(cardName, cardLink, templateSelector);
  return cardObj.createCard();
}

// Добавляем начальные карточки
initialCards.forEach(function(card) {
  photoGallery.append(generateCard(card.name, card.link, '#photo-gallery__element'));
});


// Модальное окно редактирования профиля
const popupEditProfile = document.querySelector('.popup_edit');

const formEditProfile = popupEditProfile.querySelector('.popup__form'); //форма редактирования профиля
const profileValidator = new FormValidator(popupValidate, formEditProfile);
profileValidator.enableValidation();

const nameInput = popupEditProfile.querySelector('.popup__text-input_type_name'); //переменная поля ввода имени

const aboutInput = popupEditProfile.querySelector('.popup__text-input_type_about'); //переменная поля ввода статуса
// end

const btnOpenEditProfilePopup = document.querySelector('.profile__edit-button'); //переменная для кнопки редактирования
const profileName = document.querySelector('.profile__name'); 
const profileAbout = document.querySelector('.profile__status');

function setProfilePopupInputs() {
  nameInput.value = profileName.textContent;
  aboutInput.value = profileAbout.textContent;
}

btnOpenEditProfilePopup.addEventListener('click', () => {
  setProfilePopupInputs();
  profileValidator.resetForm();
  openPopup(popupEditProfile);
});

function editFormSubmit(evt) {
    evt.preventDefault();
    profileName.textContent = nameInput.value;
    profileAbout.textContent = aboutInput.value;
    closePopup(popupEditProfile);
}

formEditProfile.addEventListener('submit', editFormSubmit);

// Модальное окно добавления карточки
const cardPopup = document.querySelector('.popup_add-card');

const cardForm = cardPopup.querySelector('.popup__form'); // форма добавления карточки
const cardValidator = new FormValidator(popupValidate, cardForm);
cardValidator.enableValidation();

const cardNameInput = cardPopup.querySelector('.popup__text-input_type_name'); //поле ввода названия карточки
const cardLinkInput = cardPopup.querySelector('.popup__text-input_type_about'); //поле ввода ссылки картинки

const btnOpenCardPopup = document.querySelector('.profile__add-button');

btnOpenCardPopup.addEventListener('click', function() {
    cardForm.reset();
    cardValidator.resetForm();
    openPopup(cardPopup);
});

cardForm.addEventListener('submit', function(evt) {
    evt.preventDefault();
    photoGallery.prepend(generateCard(cardNameInput.value, cardLinkInput.value, '#photo-gallery__element'));
    closePopup(cardPopup);
})

// Функция, устанавливающая слушатели для закрытия попапов
function setClosePopupsListeners() {
  const popupsList = Array.from(document.querySelectorAll('.popup'));
  popupsList.forEach(popup => {
    popup.addEventListener('click', evt => {
      if (evt.target.classList.contains('popup') || evt.target.classList.contains('popup__close-button')) {
        closePopup(popup);
      }
    })
  })
}

setClosePopupsListeners();



