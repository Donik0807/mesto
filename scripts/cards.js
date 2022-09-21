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

// Код для загрузки начальных изображений и их имен (также атрибут alt)
const galleryTemplate = document.querySelector('#photo-gallery__element').content;

initialCards.forEach(card => {
  const galleryItem = galleryTemplate.querySelector('.photo-gallery__element').cloneNode(true);
  const galleryPicture = galleryItem.querySelector('.photo-gallery__picture');
  galleryPicture.src = card.link;
  galleryPicture.alt = card.name;
  galleryItem.querySelector('.photo-gallery__text').textContent = card.name;
  document.querySelector('.photo-gallery').append(galleryItem);
})
// end

