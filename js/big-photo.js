import {picturesWrapper, generatePhoto} from './photo.js';
import {isEscapeKey} from './util.js';
import {clearComments, generateComments} from './generate-comments.js';
import {getData} from './api.js';
import {showLoadingDataError} from './alerts.js';

const bigPicture = document.querySelector('.big-picture');
const bigPhotoCloseButton = document.querySelector('.big-picture__cancel');
const bigPictureImg = bigPicture.querySelector('.big-picture__img img');
const likesCount = bigPicture.querySelector('.likes-count');
const commentDescription = bigPicture.querySelector('.social__caption');

let picturesArray = [];

const fillPictures = (photos) => {
  picturesArray = photos;
};

const onDocumentKeydown = (evt) => { //обработчик закрытия окна
  if (isEscapeKey(evt)) {
    evt.preventDefault();
    // eslint-disable-next-line no-use-before-define
    closeBigPhoto();
  }
};

const openBigPhoto = (pictureId) => {
  bigPicture.classList.remove('hidden');
  document.body.classList.add('modal-open');
  document.addEventListener('keydown', onDocumentKeydown);

  const currentPhoto = picturesArray.find((photo) => photo.id === Number(pictureId));

  bigPictureImg.src = currentPhoto.url;
  likesCount.textContent = currentPhoto.likes;
  commentDescription.textContent = currentPhoto.description;

  generateComments(currentPhoto.comments);
};

const closeBigPhoto = () => {
  clearComments();

  bigPicture.classList.add('hidden');
  document.body.classList.remove('modal-open');
  document.removeEventListener('keydown', onDocumentKeydown);
};

picturesWrapper.addEventListener('click', (evt) => {
  const currentPicture = evt.target.closest('.picture');

  if (currentPicture) {
    evt.preventDefault();
    openBigPhoto(currentPicture.dataset.pictureId);
  }
});

bigPhotoCloseButton.addEventListener('click', () => {
  closeBigPhoto ();
});

getData()
  .then((photos) => {
    fillPictures(photos);
    generatePhoto(photos);
  }
  )
  .catch(() => {
    showLoadingDataError();
  });

export {openBigPhoto};
