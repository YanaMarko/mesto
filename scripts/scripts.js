// ПОП-АП

const popupElement = document.querySelector('.pop-up');
const editButtonElement = document.querySelector('.profile__edit-btn');
const closeButtonElement = document.querySelector('.pop-up__close-btn');

editButtonElement.addEventListener('click', openPopup);
closeButtonElement.addEventListener('click', closePopup);

function openPopup() {
    popupElement.classList.remove('pop-up_opened');
}

function closePopup() {
    popupElement.classList.add('pop-up_opened');
}

// ФОРМА

const formElement = document.querySelector('.pop-up-form');

function formSubmitHandler(evt) {
    evt.preventDefault();
    const formName = document.querySelector('.pop-up-form__name').value;
    const formDescription = document.querySelector('.pop-up-form__description').value;

    document.querySelector('.profile__title').textContent = formName;
    document.querySelector('.profile__subtitle').textContent = formDescription;
    closePopup();
}
formElement.addEventListener('submit', formSubmitHandler);

// ЛАЙКИ

const like = document.querySelector('.content__like');
const activeLike = document.querySelector('.content__like_visited');

like.addEventListener('click', iLike);
activeLike.addEventListener('click', iDontLike);

function iLike() {
    like.classList.add('content__like_visited');
}

function iDontLike() {
    like.classList.remove('content__like_visited');
}
