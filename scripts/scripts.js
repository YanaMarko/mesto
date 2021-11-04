const popupElement = document.querySelector('.popup');
const editButtonElement = document.querySelector('.profile__edit-btn');
const closeButtonElement = document.querySelector('.popup__close-btn');
const formElement = document.querySelector('.popup-form');


// ПОП-АП

editButtonElement.addEventListener('click', openPopup);
closeButtonElement.addEventListener('click', closePopup);

function openPopup() {
    popupElement.classList.remove('popup_opened');
}

function closePopup() {
    popupElement.classList.add('popup_opened');
}

// ФОРМА

function formSubmitHandler(evt) {
    evt.preventDefault();
    const formName = document.querySelector('.popup-form__name').value;
    const formDescription = document.querySelector('.popup-form__description').value;
    document.querySelector('.profile__title').textContent = formName;
    document.querySelector('.profile__subtitle').textContent = formDescription;
    closePopup();
}
formElement.addEventListener('submit', formSubmitHandler);
