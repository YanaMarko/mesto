const popup = document.querySelector('.popup');
const editButton = document.querySelector('.profile__edit-btn');
const closeButton = document.querySelector('.popup__close-btn');
const form = document.querySelector('.popup-form');
const formName = document.querySelector('.popup-form__user_type_name');
const formDescription = document.querySelector('.popup-form__user_type_description');
const userName = document.querySelector('.profile__title');
const userDescription = document.querySelector('.profile__subtitle');

const popupPlace = document.querySelector('.popup-place');
const openPlaceButton = document.querySelector('.profile__add-photo-btn');
const closePlaceButton = document.querySelector('.popup-place__close-btn');
const formPlace = document.querySelector('.popup-form-place');
const formPlaceName = document.querySelector('.popup-form__place_type_name');
const formPlacePhoto = document.querySelector('.popup-form__place_type_photo');
const placeName = document.querySelector('.content__title');
const placePhoto = document.querySelector('.content__img');

function openPopup() {
    formName.value = userName.textContent;
    formDescription.value = userDescription.textContent;
    popup.classList.add('popup_opened');
}

function closePopup() {
    popup.classList.remove('popup_opened');
}

function formSubmitHandler(evt) {
    evt.preventDefault();
    userName.textContent = formName.value;
    userDescription.textContent = formDescription.value;
    closePopup();
}
form.addEventListener('submit', formSubmitHandler);
editButton.addEventListener('click', openPopup);
closeButton.addEventListener('click', closePopup);



function openPlacePopup() {
    formPlaceName.value = placeName.textContent;
    formPlacePhoto.value = placePhoto.textContent;
    popupPlace.classList.add('popup_opened');
}

function closePlacePopup() {
    popupPlace.classList.remove('popup_opened');
}
openPlaceButton.addEventListener('click', openPlacePopup);
closePlaceButton.addEventListener('click', closePlacePopup);

function formPlaceSubmitHandler(evt) {
    evt.preventDefault();
    placeName.textContent = formPlaceName.value;
    placePhoto.textContent = formPlacePhoto.value;//должно менять src на ссылку
    closePlacePopup();
}