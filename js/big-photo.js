import {pictures, photos} from './photo.js';
import {isEscapeKey} from './util.js';

const bigPicture = document.querySelector('.big-picture');
const bigPhotoCloseButton = document.querySelector('.big-picture__cancel');
const bigPictureImg = bigPicture.querySelector('.big-picture__img').img;
const likesCount = bigPicture.querySelector('.likes-count');
const socialComments = bigPicture.querySelector('.social__comments');
const socialCommentTemplate = socialComments.querySelector('.social__comment');
const commentDescription = bigPicture.querySelector('.social__caption');

const onDocumentKeydown = (evt) => { //обработчик закрытия окна
  if (isEscapeKey(evt)) {
    evt.preventDefault();
    closeBigPhoto();
  }
};

// const openBigPhoto = () => {
//   bigPicture.classList.remove('hidden');
//   document.addEventListener('keydown', onDocumentKeydown);
// };

const openBigPhoto = (pictureId) => {
  bigPicture.classList.remove('hidden');
  document.addEventListener('keydown', onDocumentKeydown);

  const currentPhoto = photos.find((photo) => photo.id === Number(pictureId));
  const socialCommentFragment = document.createDocumentFragment();

  bigPictureImg.src = currentPhoto.url;
  likesCount.textContent = currentPhoto.likes;
  socialComments.innerHTML = '';

  currentPhoto.comments.forEach((comment) => {
    const socialComment = socialCommentTemplate.cloneNode(true);

    socialComment.querySelector('.social__picture').src = comment.avatar;
    socialComment.querySelector('.social__picture').alt = comment.name;
    socialComment.querySelector('.social__text').alt = comment.massage;

    socialCommentFragment.appendChild(socialComment);
  });
};

const closeBigPhoto = () => {
  bigPicture.classList.add('hidden');
  document.removeEventListener('keydown', onDocumentKeydown);
};

pictures.addEventListener('click', () => {
  openBigPhoto ();
});

bigPhotoCloseButton.addEventListener('click', () => {
  closeBigPhoto ();
});

export {openBigPhoto};
