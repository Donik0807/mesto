let popup = document.querySelector('.popup'); //переменная модального окна 
let editButton = document.querySelector('.profile__edit-button'); //переменная для кнопки редактирования
let closeButton = popup.querySelector('.popup__close-button'); //переменная для кнопки закрытия

let profileName = document.querySelector('.profile__name'); 
let profileAbout = document.querySelector('.profile__status'); 

let form = popup.querySelector('.popup__form');
let nameInput = popup.querySelector('.popup__text-input_type_name'); //переменная поля ввода имени
let aboutInput = popup.querySelector('.popup__text-input_type_about'); //переменная поля ввода статуса

function openPopup() {
    popup.classList.add('popup_opened');
    nameInput.value = profileName.textContent;
    aboutInput.value = profileAbout.textContent;
}

function closePopup() {
    popup.classList.remove('popup_opened');
}

editButton.addEventListener('click', openPopup);
closeButton.addEventListener('click', closePopup);

function formSubmitHandler(evt) {
    evt.preventDefault();
    profileName.textContent = nameInput.value;
    profileAbout.textContent = aboutInput.value;
    closePopup();
}

form.addEventListener('submit', formSubmitHandler);