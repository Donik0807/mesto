let popup = document.querySelector('.popup');
let editButton = document.querySelector('.profile__edit-button');
let closeButton = popup.querySelector('.popup__close-button');

function openPopup() {
    popup.classList.add('popup_opened');
}

function closePopup() {
    popup.classList.remove('popup_opened');
}

editButton.addEventListener('click', openPopup);
closeButton.addEventListener('click', closePopup);

let form = popup.querySelector('.popup__container');
let nameInput = popup.querySelector('.popup__name');
let aboutInput = popup.querySelector('.popup__about')

function formSubmitHandler(evt) {
    evt.preventDefault();
    let nameValue = nameInput.value;
    let aboutValue = aboutInput.value;
    document.querySelector('.profile__name').textContent = nameValue;
    document.querySelector('.profile__status').textContent = aboutValue;
    closePopup();
}

form.addEventListener('submit', formSubmitHandler);