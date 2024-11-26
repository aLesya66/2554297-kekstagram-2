import {renderFinalMas, clearFinalMas} from './createMiniature.js';

const elementBigPicture = document.querySelector('.big-picture');
const openPicture = document.querySelector('.big-picture__title').classList.remove('.visually-hidden');
const closePicture = document.querySelector('.big-picture__cancel  cancel');

function openPictureModal () {
  elementBigPicture.classList.remove('.hidden');
  renderFinalMas();
}

function closePictureModal () {
  elementBigPicture.classList.add('.hidden');
  clearFinalMas();
}

openPicture.addEventListener('click', () => {
  openPictureModal();
});

closePicture.addEventListener('click', () => {
  closePictureModal();
});


// <!-- Полноэкранный показ изображения -->
// <section class="big-picture  overlay  hidden">
//   <h2 class="big-picture__title  visually-hidden">Просмотр фотографии</h2>
//   <div class="big-picture__preview">

//     <!-- Просмотр изображения -->
//     <div class="big-picture__img">
//       <img src="img/logo-background-3.jpg" alt="Девушка в купальнике" width="600" height="600">
//     </div>

//     <!-- Информация об изображении. Подпись, комментарии, количество лайков -->
//     <div class="big-picture__social  social">
//       <div class="social__header">
//         <img class="social__picture" src="img/avatar-1.svg" alt="Аватар автора фотографии" width="35" height="35">
//         <p class="social__caption">Тестим новую камеру! =)</p>
//         <p class="social__likes">Нравится <span class="likes-count">356</span></p>
//       </div>

//       <!-- Кнопка для загрузки новой порции комментариев -->
//       <button type="button" class="social__comments-loader  comments-loader">Загрузить еще</button>

//       <!-- Форма для отправки комментария -->
//       <div class="social__footer">
//         <img class="social__picture" src="img/avatar-6.svg" alt="Аватар комментатора фотографии" width="35" height="35">
//         <input type="text" class="social__footer-text" placeholder="Ваш комментарий...">
//         <button type="button" class="social__footer-btn" name="button">Отправить</button>
//       </div>
//     </div>

//     <!-- Кнопка для выхода из полноэкранного просмотра изображения -->
//     <button type="reset" class="big-picture__cancel  cancel" id="picture-cancel">Закрыть</button>
//   </div>
// </section>
