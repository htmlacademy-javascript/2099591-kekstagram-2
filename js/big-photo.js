import {pictures} from './photo.js';
import {isEscapeKey} from './util.js';

const bigPicture = document.querySelector('.big-picture');
const bigPhotoCloseButton = document.querySelector('.big-picture__cancel');

const onDocumentKeydown = (evt) => { //обработчик закрытия окна
  if (isEscapeKey(evt)) {
    evt.preventDefault();
    closeBigPhoto();
  }
};

function openBigPhoto () {
  bigPicture.classList.remove('hidden');
  document.addEventListener('keydown', onDocumentKeydown);
}

function closeBigPhoto () {
  bigPicture.classList.add('hidden');
  document.removeEventListener('keydown', onDocumentKeydown);
}

pictures.addEventListener('click', () => {
  openBigPhoto ();
});

bigPhotoCloseButton.addEventListener('click', () => {
  closeBigPhoto ();
});
