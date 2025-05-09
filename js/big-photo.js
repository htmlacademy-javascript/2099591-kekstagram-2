import {isEscapeKey} from './util.js';
import {clearComments, generateComments} from './generate-comments.js';

const bigPicture = document.querySelector('.big-picture');
const bigPhotoCloseButton = document.querySelector('.big-picture__cancel');
const bigPictureImg = bigPicture.querySelector('.big-picture__img img');
const likesCount = bigPicture.querySelector('.likes-count');
const commentDescription = bigPicture.querySelector('.social__caption');
const socialCommentTotalCount = document.querySelector('.social__comment-total-count');

let picturesArray = [];

const fillPictures = (photos) => {
  picturesArray = photos;
};

const onDocumentKeydown = (evt) => { //обработчик закрытия окна
  if (isEscapeKey(evt)) {
    evt.preventDefault();
    closeBigPhoto();
  }
};

const onBigPhotoCloseButtonClick = () => {
  closeBigPhoto();
};

const openBigPhoto = (pictureId) => {
  const currentPhoto = picturesArray.find((photo) => photo.id === Number(pictureId));

  bigPictureImg.src = currentPhoto.url;
  likesCount.textContent = currentPhoto.likes;
  commentDescription.textContent = currentPhoto.description;
  socialCommentTotalCount.textContent = currentPhoto.comments.length;
  clearComments();
  generateComments(currentPhoto.comments);
  bigPicture.classList.remove('hidden');
  document.body.classList.add('modal-open');
  bigPhotoCloseButton.addEventListener('click', onBigPhotoCloseButtonClick);
  document.addEventListener('keydown', onDocumentKeydown);
};

function closeBigPhoto () {
  clearComments();
  bigPicture.classList.add('hidden');
  document.body.classList.remove('modal-open');
  bigPhotoCloseButton.removeEventListener('click', onBigPhotoCloseButtonClick);
  document.removeEventListener('keydown', onDocumentKeydown);
}

export {openBigPhoto, fillPictures};
