// обратимся к блоку
const popupElement = document.querySelector('.pop-up');
// обратимся к вызывающей поп-ап кнопке
const editButtonElement = document.querySelector('.profile__edit-btn');
// обратимся к закрывающей поп-ап кнопке
const closeButtonElement = document.querySelector('.pop-up__close-btn');
// пропишем условие вызова поп-апа
editButtonElement.addEventListener('click', openPopup);
// пропишем условие закрытия поп-апа
closeButtonElement.addEventListener('click', closePopup);

// вызовем поп-ап
function openPopup() {
    popupElement.classList.remove('pop-up_opened');
}
// закроем поп-ап
function closePopup() {
    popupElement.classList.add('pop-up_opened');
}



// обратимся к белому лайку
const like = document.querySelector('.content__like');
// обратимся к чёрному лайку
const activeLike = document.querySelector('.content__like_visited');
// пропишем условие отметки лайка
like.addEventListener('click', iLike);
// пропишем условие отметы лайка
activeLike.addEventListener('click', iDontLike);
// отметим лайк
function iLike() {
    like.classList.add('content__like_visited');
}
// отменим лайк
function iDontLike() {
    like.classList.remove('content__like_visited');
}

// // обратимся к блоку 
// const formElement = document.querySelector('.pop-up-form');
// // обратимся к имени пользователя
// const userName = userName.getAttribute('value');
// // обратимся к описанию профиля
// const userdescription = userdescription.getAttribute('value');
// // изменение имени пользователя в профиле

// // измение описания профиля


// // сохраним изменения



// // onchange = "onchangeName()"
// // onchange = "onchangeDescription()"
