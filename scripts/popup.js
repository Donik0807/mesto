const popupTemplate = document.querySelector('#popup').content; //содержимое шаблона

// start: Тут создается копия шаблона для формы редактирования профиля
const editPopup = popupTemplate.querySelector('.popup').cloneNode(true); //переменная для копии элемента 
const closeEdit = editPopup.querySelector('.popup__close-button'); //переменная для кнопки закрытия
const formEdit = editPopup.querySelector('.popup__form');
const nameInput = editPopup.querySelector('.popup__text-input_type_name'); //переменная поля ввода имени
nameInput.placeholder = "Имя";
const aboutInput = editPopup.querySelector('.popup__text-input_type_about'); //переменная поля ввода статуса
aboutInput.placeholder = "О себе";
editPopup.querySelector('.popup__text').textContent = 'Редактировать профиль';
editPopup.querySelector('.popup__save-button').textContent = 'Сохранить';
// end

const editButton = document.querySelector('.profile__edit-button'); //переменная для кнопки редактирования
const profileName = document.querySelector('.profile__name'); 
const profileAbout = document.querySelector('.profile__status');

function openPopup() {
    editPopup.classList.add('popup_opened');
}

function closePopup() {
    editPopup.classList.remove('popup_opened');
}

editButton.addEventListener('click', () => {
    openPopup();
    nameInput.value = profileName.textContent;
    aboutInput.value = profileAbout.textContent;
});

closeEdit.addEventListener('click', closePopup);

function editFormSubmit(evt) {
    evt.preventDefault();
    profileName.textContent = nameInput.value;
    profileAbout.textContent = aboutInput.value;
    closePopup();
}

formEdit.addEventListener('submit', editFormSubmit);

document.querySelector('body').append(editPopup);