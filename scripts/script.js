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
  
const photoGallery = document.querySelector('.photo-gallery');

const galleryTemplate = document.querySelector('#photo-gallery__element').content; //содержимое шаблона карточки

// функция для закрытия окна по кнопке Esc
function setEsc(evt) {
  if (evt.key == 'Escape') {
    closePopup(document.querySelector('.popup_opened'));
  }
}

function openPopup(popup) {
  popup.classList.add('popup_opened');
  document.addEventListener('keydown', setEsc);
}

function closePopup(popup) {
  popup.classList.remove('popup_opened');
  document.removeEventListener('keydown', setEsc);
}

//Создание попапа для картинки
const picturePopup = document.querySelector('.popup_picture');

const openedPicture = picturePopup.querySelector('.popup__image');

const popupCaption = picturePopup.querySelector('.popup__caption');

//функция для просмотра картинки (в качестве аргумента передается картинка, по которой произошел клик)
function openPicture(picture) {
  openedPicture.src = picture.src;
  openedPicture.alt = picture.alt;
  popupCaption.textContent = picture.alt;
  openPopup(picturePopup);
}
// END

// функция создания карточки
function createCard(cardName, cardLink) {
  const galleryItem = galleryTemplate.querySelector('.photo-gallery__element').cloneNode(true);
  const galleryPicture = galleryItem.querySelector('.photo-gallery__picture');
  galleryPicture.src = cardLink;
  galleryPicture.alt = cardName;
  galleryItem.querySelector('.photo-gallery__text').textContent = cardName;

  // Функция удаления картинки
  galleryItem.querySelector('.photo-gallery__delete').addEventListener('click', (evt) => {
    evt.target.closest('.photo-gallery__element').remove();
  });

  // Функция кнопки лайка
  galleryItem.querySelector('.photo-gallery__like-button').addEventListener('click', (evt) => {
    evt.target.classList.toggle('photo-gallery__like-button_active');
  });

  galleryPicture.addEventListener('click', (evt) => {
    openPicture(evt.target);
  })

  return galleryItem;
}

// Добавляем начальные карточки
initialCards.forEach(function(card) {
  photoGallery.append(createCard(card.name, card.link));
});


// Модальное окно редактирования профиля
const popupEditProfile = document.querySelector('.popup_edit');

const formEditProfile = popupEditProfile.querySelector('.popup__form'); //форма редактирования профиля

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
  const editInputs = Array.from(formEditProfile.querySelectorAll('.popup__text-input'));
  editInputs.forEach(editInput => {
    if (editInput.classList.contains('popup__text-input_invalid')) {
        hideError(editInput, formEditProfile, popupValidate);
    }
  })
  openPopup(popupEditProfile);
  setProfilePopupInputs();
  toggleButtonState(formEditProfile, editInputs, popupValidate);
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

const cardNameInput = cardPopup.querySelector('.popup__text-input_type_name'); //поле ввода названия карточки

const cardLinkInput = cardPopup.querySelector('.popup__text-input_type_about'); //поле ввода ссылки картинки

const cardSave = cardPopup.querySelector('.popup__save-button'); // кнопка создания карточки

const btnOpenCardPopup = document.querySelector('.profile__add-button');

btnOpenCardPopup.addEventListener('click', function() {
    const cardInputs = Array.from(cardForm.querySelectorAll('.popup__text-input'));
    cardInputs.forEach(cardInput => {
      if (cardInput.classList.contains('popup__text-input_invalid')) {
        hideError(cardInput, cardForm, popupValidate);
      }
    })
    openPopup(cardPopup);
    cardForm.reset();
    toggleButtonState(cardForm, cardInputs, popupValidate);
});

cardForm.addEventListener('submit', function(evt) {
    evt.preventDefault();
    photoGallery.prepend(createCard(cardNameInput.value, cardLinkInput.value));
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



