//не могу продвинуться дальше

const popup = document.querySelector('.popup');
const formName = document.querySelector('.popup-form__user_type_name');
const formDescription = document.querySelector('.popup-form__user_type_description');
const userName = document.querySelector('.profile__title');
const userDescription = document.querySelector('.profile__subtitle');
let popupTaskFormName = document.querySelector('.popup-form__task_type_name');
let popupTaskFormPhoto = document.querySelector('.popup-form__task_type_link');
let cardName = document.querySelector('.card__title');
let cardPhoto = document.querySelector('.card__img');
const popupTask = document.querySelector('.popup-task');
let template = document.querySelector('.template');
const task = document.querySelector('.task');
const like = document.querySelector('.card__like');
const savePopupTask = document.querySelector('.popup-save-task');
const openTaskButton = document.querySelector('.profile__add-photo-btn');
const form = document.querySelector('.popup-form');
const editButton = document.querySelector('.profile__edit-btn');
const closeButton = document.querySelector('.popup__close-btn');
const closeTaskButton = document.querySelector('.popup-task__close-btn');
const popupTaskForm = document.querySelector('.task-form');
const deleteCardButton = document.querySelector('.card__delete');
const cards = document.querySelector('.cards');

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
//клонирование карточки
const createTaskDomNode = (item) => {
    const taskTemplate = template.content.querySelector('.task').cloneNode(true);
    taskTemplate.querySelector('.card__title').textContent = item.title;
    taskTemplate.querySelector('.card__img').src = item.link;
    return taskTemplate;
}
const result = initialCards.map((item) => {
    return createTaskDomNode(item);
});

savePopupTask.onclick = function () {
    addNewCard()
    closeTaskPopup()
}
//изменение данных через форму
function submitFormHandlerTask(evt) {
    evt.preventDefault();
    const cardNameValue = cardName.title;
    const cardPhotoValue = cardPhoto.link;
    const cardString = createTaskDomNode({ title: cardNameValue, link: cardPhotoValue });
    task.preppend(cardString);
    cardName.value = '';
    cardPhoto.value = '';
};
popupTaskForm.addEventListener('submit', submitFormHandlerTask);
task.append(...result)
//создание карточки
function createNewCard(item) {
    const card = template.content.querySelector('.task');
    template.cloneNode(true);
    cardName = item.name;
    cardPhoto.src = item.link;
    cardPhoto.alt = item.name;
}
initialCards.forEach(function (item) {
    addNewCard(item);
});
//добавление карточки
function addNewCard(item) {
    template = submitFormHandlerTask(item);
    cards.prepend(template);
    like.addEventListener('click', likeCard);
    deleteCardButton.addEventListener('click', () => deleteCard(template));
    template.insertAdjacentElement('beforebegin', cardName);
    template.insertAdjacentElement('beforebegin', cardPhoto);
    template.append(...result);
}
savePopupTask.addEventListener('click', addNewCard);

// function deleteCard(evt) {
//     evt.target.classList.closest('card__item').add('.card__delete');
// }
// deleteCardButton.addEventListener('click', deleteCard);

// function likeCard() {
//     evt.target.classList.toggle('content__like_type_active');
// }
// like.addEventListener('click', likeCard)