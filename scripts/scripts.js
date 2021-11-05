const popup = document.querySelector('.popup');
const editButton = document.querySelector('.profile__edit-btn');
const closeButton = document.querySelector('.popup__close-btn');
const form = document.querySelector('.popup-form');
const formName = document.querySelector('.popup-form__user_name');
const formDescription = document.querySelector('.popup-form__user_description');
const userName = document.querySelector('.profile__title');
const userDescription = document.querySelector('.profile__subtitle');

function openPopup() {
    popup.classList.remove('popup_opened');
}

function closePopup() {
    popup.classList.add('popup_opened');
}

function formSubmitHandler(evt) {
    evt.preventDefault();

    let formName = document.querySelector('.popup-form__user_name').value;
    userName.textContent = formName;

    let formDescription = document.querySelector('.popup-form__user_description').value;
    userDescription.textContent = formDescription;
    closePopup();
}
form.addEventListener('submit', formSubmitHandler);
editButton.addEventListener('click', openPopup);
closeButton.addEventListener('click', closePopup);