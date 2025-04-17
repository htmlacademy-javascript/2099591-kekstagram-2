import {pictures, photos} from './photo.js';
import {isEscapeKey} from './util.js';

const bigPicture = document.querySelector('.big-picture');
const bigPhotoCloseButton = document.querySelector('.big-picture__cancel');
const bigPictureImg = bigPicture.querySelector('.big-picture__img img');
const likesCount = bigPicture.querySelector('.likes-count');
const socialComments = bigPicture.querySelector('.social__comments');
const socialCommentTemplate = socialComments.querySelector('.social__comment');
const commentDescription = bigPicture.querySelector('.social__caption');
const commentsCount = bigPicture.querySelector('.social__comment-count');
const commentsLoader = bigPicture.querySelector('.comments-loader');

const onDocumentKeydown = (evt) => { //обработчик закрытия окна
  if (isEscapeKey(evt)) {
    evt.preventDefault();
    // eslint-disable-next-line no-use-before-define
    closeBigPhoto();
  }
};

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
    socialComment.querySelector('.social__text').textContent = comment.message;

    socialCommentFragment.appendChild(socialComment);
  });

  socialComments.appendChild(socialCommentFragment);
  commentDescription.textContent = currentPhoto.description;
  commentsCount.classList.add('hidden');
  commentsLoader.classList.add('hidden');

  document.body.classList.add('modal-open');
};

const closeBigPhoto = () => {
  bigPicture.classList.add('hidden');
  document.removeEventListener('keydown', onDocumentKeydown);
};

pictures.addEventListener('click', (evt) => {
  const currentPicture = evt.target.closest('.picture');
  if (currentPicture) {
    openBigPhoto(currentPicture.dataset.pictureId);
  }
});

bigPhotoCloseButton.addEventListener('click', () => {
  closeBigPhoto ();
});

export {openBigPhoto};
