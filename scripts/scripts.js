const popup = document.querySelector('.popup');
const editButton = document.querySelector('.profile__edit-btn');
const closeButton = document.querySelector('.popup__close-btn');
const form = document.querySelector('.popup-form');
const formName = document.querySelector('.popup-form__name');
const formDescription = document.querySelector('.popup-form__description');
const userName = document.querySelector('.profile__title');

// ПОП-АП

// editButton.addEventListener('click', openPopup);
// closeButton.addEventListener('click', closePopup);

function openPopup() {
    popup.classList.remove('popup_opened');
}

function closePopup() {
    popup.classList.add('popup_opened');
}

// ФОРМА

function formSubmitHandler(evt) {
    evt.preventDefault();


    document.querySelector('.profile__title').textContent = formName;
    document.querySelector('.profile__subtitle').textContent = formDescription;
    closePopup();
}
form.addEventListener('submit', formSubmitHandler);
editButton.addEventListener('click', openPopup);
closeButton.addEventListener('click', closePopup);