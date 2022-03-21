'use strict'
const popup = document.querySelector('.popup');
const formName = document.querySelector('.popup-form__user_type_name');
const formDescription = document.querySelector('.popup-form__user_type_description');
const userName = document.querySelector('.profile__title');
const userDescription = document.querySelector('.profile__subtitle');
const popupTaskFormName = document.querySelector('.popup-form__task_type_name');
const popupTaskFormPhoto = document.querySelector('.popup-form__task_type_link');
let cardName = document.querySelector('.content__title');
let cardPhoto = document.querySelector('.content__img');
const popupTask = document.querySelector('.popup-task');
const template = document.querySelector('.template');
const task = document.querySelector('.task');
const saveTaskButton = document.querySelector('.popup-save-task');
const openTaskButton = document.querySelector('.profile__add-photo-btn');
const form = document.querySelector('.popup-form');
const editProfileButton = document.querySelector('.profile__edit-btn');
const closePopupButton = document.querySelector('.popup__close-btn');
const closeTaskButton = document.querySelector('.popup-task__close-btn');
const popupTaskForm = document.querySelector('.task-form');
const cards = document.querySelector('.content');
const popupPictureCloseButton = document.querySelector('.popup-picture__close-btn');
const popupPictureImg = document.querySelector('.popup-picture__img');
const popupPictureTitle = document.querySelector('.popup-picture__title');
const popupPicture = document.querySelector('.popup-picture');
const likeCardButton = document.querySelector('.content__like');
const deleteCardButton = document.getElementsByClassName('content__delete');
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
editProfileButton.addEventListener('click', openPopup);

function closePopup() {
    popup.classList.remove('popup_opened');
}
closePopupButton.addEventListener('click', closePopup);

//обработка формы
function submitFormHandler(evt) {
    evt.preventDefault();
    userName.textContent = formName.value;
    userDescription.textContent = formDescription.value;
    closePopup();
}
form.addEventListener('submit', submitFormHandler);

function openTaskPopup() {
    popupTask.classList.add('popup_opened');
}
openTaskButton.addEventListener('click', openTaskPopup);

function closeTaskPopup() {
    popupTask.classList.remove('popup_opened');
}
closeTaskButton.addEventListener('click', closeTaskPopup);

//шаблон новой карточки
const createTaskDomNode = (item) => {
    const taskTemplate = template.content.querySelector('.task').cloneNode(true);
    taskTemplate.querySelector('.content__title').textContent = item.name;
    taskTemplate.querySelector('.content__img').src = item.link;
    return taskTemplate;
};

const result = initialCards.map((item) => {
    return createTaskDomNode(item);
});

//меняю данные в форме и создаю новую карточку
const submitFormHandlerTask = (evt) => {
    evt.preventDefault();
    const newCard = createTaskDomNode({ name: popupTaskFormName.value, link: popupTaskFormPhoto.value });
    cards.prepend(newCard)
    closeTaskPopup();
    popupTaskFormName.value = '';
    popupTaskFormPhoto.value = '';
    return newCard;
};
popupTaskForm.addEventListener('submit', submitFormHandlerTask);
cards.append(...result);
