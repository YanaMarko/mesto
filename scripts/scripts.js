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
const userName = document.querySelector('.profile__title');
const userDescription = document.querySelector('.profile__subtitle');
const formName = document.querySelector('.pop-up-form__name');
const formDescription = document.querySelector('.pop-up-form__description');
const saveButton = document.querySelector('.pop-up__save');

function changeName() {
    const newName = formName.value;
    userName.textContent = newName;
}
saveButton.addEventListener('click', changeName);

function changeDescription() {
    const newDescription = formDescription.value;
    userDescription.textContent = newDescription;
}
saveButton.addEventListener('click', changeDescription);

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


