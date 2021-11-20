const popup = document.querySelector('.popup');
const formName = document.querySelector('.popup-form__user_type_name');
const formDescription = document.querySelector('.popup-form__user_type_description');
const userName = document.querySelector('.profile__title');
const userDescription = document.querySelector('.profile__subtitle');
const popupTaskFormName = document.querySelector('.popup-form__task_type_name');
const popupTaskFormPhoto = document.querySelector('.popup-form__task_type_link');
const cardName = document.querySelector('.card__title');
const cardPhoto = document.querySelector('.card__img');
const popupTask = document.querySelector('.popup-task');
const cardContainer = document.querySelector('.template');

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

function openPopup() {
    formName.value = userName.textContent;
    formDescription.value = userDescription.textContent;
    popup.classList.add('popup_opened');
}
const editButton = document.querySelector('.profile__edit-btn').addEventListener('click', openPopup);

function closePopup() {
    popup.classList.remove('popup_opened');
}
const closeButton = document.querySelector('.popup__close-btn').addEventListener('click', closePopup);

function formSubmitHandler(evt) {
    evt.preventDefault();
    userName.textContent = formName.value;
    userDescription.textContent = formDescription.value;
    closePopup();
}
const form = document.querySelector('.popup-form').addEventListener('submit', formSubmitHandler);

function openTaskPopup() {
    // popupTaskFormName.value = cardName.textContent;
    // popupTaskFormPhoto.value = cardPhoto.src;
    popupTask.classList.add('popup_opened');
}
const openTaskButton = document.querySelector('.profile__add-photo-btn').addEventListener('click', openTaskPopup);

function closeTaskPopup() {
    popupTask.classList.remove('popup_opened');
}
const closeTaskButton = document.querySelector('.popup-task__close-btn').addEventListener('click', closeTaskPopup);

function formSubmitHandlerTask(evt) {
    evt.preventDefault();
    cardName.textContent = popupTaskFormName.value;
    cardPhoto.src = popupTaskFormPhoto.value;
    closeTaskPopup()
}
const popupTaskForm = document.querySelector('.task-form').addEventListener('click', formSubmitHandlerTask);



function createNewCard(item) {
    const cardTemplate = document.querySelector('#template').content;
    cardContainer.cloneNode(true);
    cardName.textContent = item.name;
    cardPhoto.src = item.link;
    cardPhoto.alt = item.name;
    return cardContainer;
}

initialCards.forEach(function (item) {
    addNewCard(item);
});

function deleteCard(evt) {
    evt.target.closest('.card__item').remove();
}
const deleteCardButton = document.querySelector('.card__delete').addEventListener('click', deleteCard);

function likeCard() {
    like.classList.toggle('.card__like_type_active');
}
const like = document.querySelector('.card__like').addEventListener('click', likeCard);

function addNewCard(item) {
    const cardContainer = createNewCard(item);
    document.querySelector('.cards').prepend(cardContainer);
    document.querySelector('.card__like').addEventListener('click', likeCard);
    document.querySelector('.card__delete').addEventListener('click', () => deleteCard(cardContainer));
    closeTaskPopup()
}
const savePopupTask = document.querySelector('.popup-save-task').addEventListener('click', addNewCard);