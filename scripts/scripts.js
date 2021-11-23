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
let template = document.querySelector('.template');
let task = document.querySelector('.task');
const like = document.querySelector('.content__like');
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
    template.insertAdjacentHTML('beforebegin', newCard);
    closeTaskPopup()
};
template.insertAdjacentHTML('beforebegin', result.join(''));
popupTaskForm.addEventListener('submit', addNewTemplate);

// //клонирование карточки
// const createTaskDomNode = (item) => {
//     const taskTemplate = template.content.querySelector('.task').cloneNode(true);
//     taskTemplate.querySelector('.card__title').textContent = item.title;
//     taskTemplate.querySelector('.card__img').src = item.link;
//     return taskTemplate;
// }

// const result = initialCards.map((item) => {
//     return createTaskDomNode(item);
// });

// //изменение данных через форму
// function submitFormHandlerTask(evt) {
//     evt.preventDefault();
//     popupTaskFormName = cardName.value;
//     popupTaskFormPhoto = cardPhoto.value;
//     taskTemplate = createTaskDomNode({ title: popupTaskFormName, link: popupTaskFormPhoto });
//     task.prepend(taskTemplate);
//     cardName.value = '';
//     cardPhoto.value = '';
// };
// popupTaskForm.addEventListener('submit', submitFormHandlerTask);
// task.append(...result)

// //создание карточки 
// function createNewCard(initialCards) {
//     const card = template.content.querySelector('.task');
//     template.cloneNode(true);
//     cardName = initialCards.name;
//     cardPhoto.src = initialCards.link;
//     closeTaskPopup()
// }
// savePopupTask.addEventListener('submit', createNewCard);

// //добавление карточки
// function addNewCard(item) {
//     template = submitFormHandlerTask(item);
//     cards.prepend(template);
//     like.addEventListener('click', likeCard);
//     deleteCardButton.addEventListener('click', () => deleteCard(template));
//     template.insertAdjacentElement('beforebegin', cardName);
//     template.insertAdjacentElement('beforebegin', cardPhoto);
// }
// savePopupTask.addEventListener('click', addNewCard);

// // перебор массива
// initialCards.forEach(function (item) {
//     addNewCard(item);
// });

// //удаление карточки
// function deleteCard(evt) {
//     evt.target.classList.closest('card__item').add('.card__delete');
// }
// deleteCardButton.addEventListener('click', deleteCard);

// //лайк
// function likeCard() {
//     evt.target.classList.toggle('content__like_type_active');
// }
// like.addEventListener('click', likeCard)