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

const popupTemplate = document.querySelector('#popup').content; //содержимое шаблона попапа

function openPopup(popupArg) {
  popupArg.classList.add('popup_opened');
}

function closePopup(popupArg) {
  popupArg.classList.remove('popup_opened');
}

//Создание попапа для картинки
const picturePopup = popupTemplate.querySelector('.popup').cloneNode(true);

const openedPicture = document.createElement('img'); //картинка, которая будет просматриваться
openedPicture.classList.add('photo-gallery__picture_opened');
picturePopup.querySelector('.popup__form').replaceWith(openedPicture);

const pictureTitle = document.createElement('p'); //название картинки
pictureTitle.setAttribute('style', `
font-family: 'Inter', sanf-serif;
font-style: normal;
font-weight: 400;
font-size: 12px;
line-height: 15px;
color: #FFFFFF;
margin: 0;
margin-top: 10px;`);
picturePopup.querySelector('.popup__container').append(pictureTitle);

picturePopup.querySelector('.popup__close-button').addEventListener('click', function() {
  closePopup(picturePopup);
});

//функция для просмотра картинки (в качестве аргумента передается картинка, по которой произошел клик)
function openPicture(picture) {
  openedPicture.src = picture.src;
  openedPicture.alt = picture.alt;
  pictureTitle.textContent = picture.alt;
  openPopup(picturePopup);
}

document.querySelector('body').append(picturePopup);
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
const editPopup = popupTemplate.querySelector('.popup').cloneNode(true); 

const closeEdit = editPopup.querySelector('.popup__close-button'); //переменная для кнопки закрытия

editPopup.querySelector('.popup__container').classList.add('popup__container_modal');

const formEdit = editPopup.querySelector('.popup__form'); //форма редактирования профиля
formEdit.name = "personal-info";

const nameInput = editPopup.querySelector('.popup__text-input_type_name'); //переменная поля ввода имени
nameInput.placeholder = "Имя";
nameInput.name = "name";

const aboutInput = editPopup.querySelector('.popup__text-input_type_about'); //переменная поля ввода статуса
aboutInput.placeholder = "О себе";
aboutInput.name = "about";

editPopup.querySelector('.popup__text').textContent = 'Редактировать профиль';

const saveButton = editPopup.querySelector('.popup__save-button'); //кнопка сохранения профиля
saveButton.textContent = 'Сохранить';
saveButton.arialabel = 'Сохранить';
// end

const editButton = document.querySelector('.profile__edit-button'); //переменная для кнопки редактирования
const profileName = document.querySelector('.profile__name'); 
const profileAbout = document.querySelector('.profile__status');

editButton.addEventListener('click', () => {
    openPopup(editPopup);
    nameInput.value = profileName.textContent;
    aboutInput.value = profileAbout.textContent;
});

closeEdit.addEventListener('click', function() {
    closePopup(editPopup);
});

function editFormSubmit(evt) {
    evt.preventDefault();
    profileName.textContent = nameInput.value;
    profileAbout.textContent = aboutInput.value;
    closePopup(editPopup);
}

formEdit.addEventListener('submit', editFormSubmit);

document.querySelector('body').append(editPopup);


// Модальное окно добавления карточки
const cardPopup = popupTemplate.querySelector('.popup').cloneNode(true);

const closeCardPopup = cardPopup.querySelector('.popup__close-button'); //кнопка закрытия 

cardPopup.querySelector('.popup__container').classList.add('popup__container_modal');

const cardForm = cardPopup.querySelector('.popup__form'); // форма добавления карточки
cardForm.name = "card-info";

const cardNameInput = cardPopup.querySelector('.popup__text-input_type_name'); //поле ввода названия карточки
cardNameInput.placeholder = "Название";
cardNameInput.name = "title";

const cardLinkInput = cardPopup.querySelector('.popup__text-input_type_about'); //поле ввода ссылки картинки
cardLinkInput.placeholder = "Ссылка на картинку";
cardLinkInput.name = "link";

cardPopup.querySelector('.popup__text').textContent = 'Новое место';

const cardSave = cardPopup.querySelector('.popup__save-button'); // кнопка создания карточки
cardSave.textContent = 'Создать';
cardSave.arialabel = 'Создать';

const addButton = document.querySelector('.profile__add-button');

addButton.addEventListener('click', function() {
    openPopup(cardPopup);
    cardNameInput.value = '';
    cardLinkInput.value = '';
});

closeCardPopup.addEventListener('click', function() {
    closePopup(cardPopup);
});

cardForm.addEventListener('submit', function(evt) {
    evt.preventDefault();
    photoGallery.prepend(createCard(cardNameInput.value, cardLinkInput.value));
    closePopup(cardPopup);
})

document.querySelector('body').append(cardPopup);
