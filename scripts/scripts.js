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
const likeButton = document.querySelector('.content__like');
const savePopupTask = document.querySelector('.popup-save-task');
const openTaskButton = document.querySelector('.profile__add-photo-btn');
const form = document.querySelector('.popup-form');
const editButton = document.querySelector('.profile__edit-btn');
const closeButton = document.querySelector('.popup__close-btn');
const closeTaskButton = document.querySelector('.popup-task__close-btn');
const popupTaskForm = document.querySelector('.task-form');
const deleteCardButton = document.querySelector('.content__delete');
const cards = document.querySelector('.content');

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
editButton.addEventListener('click', openPopup);

function closePopup() {
    popup.classList.remove('popup_opened');
}
closeButton.addEventListener('click', closePopup);


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

const createHTMLString = (item) => {
    return `<div class="task">
                <button class="content__delete" type="button"></button>
                <img class="content__img" src="${item.link}" alt="">
                <div class="content__info">
                    <h2 class="content__title">${item.name}</h2>
                    <button class="content__like" type="button"></button>
                </div>
            </div>`
};

const result = initialCards.map((item) => {
    return createHTMLString(item);
});

function addNewTemplate(evt) {
    evt.preventDefault();
    closeTaskPopup;
    const placeElement = document.querySelector('.template').cloneNode(true);
    cardName = popupTaskFormName.value;
    cardPhoto = popupTaskFormPhoto.value;
    const newCard = createHTMLString({ name: cardName, link: cardPhoto });
    template.insertAdjacentHTML('afterend', newCard);
    popupTaskFormName.value = '';
    popupTaskFormPhoto.value = '';
    closeTaskPopup()
};
template.insertAdjacentHTML('afterend', result.join(''));
popupTaskForm.addEventListener('submit', addNewTemplate);

// function deleteCard(evt) {
//     evt.target.closest('.template').remove();
// }
// deleteCardButton.addEventListener('click', deleteCard);

// function likeCard(evt) {
//     evt.classList.toggle('content__like_type_active');
// }
// likeButton.addEventListener('click', likeCard)