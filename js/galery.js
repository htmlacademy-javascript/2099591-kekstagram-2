import {openBigPhoto} from './big-photo.js';

const picturesWrapper = document.querySelector('.pictures');

const openPhotoGalery = () => {
  picturesWrapper.addEventListener('click', (evt) => {
    const currentPicture = evt.target.closest('.picture');

    if (currentPicture) {
      evt.preventDefault();
      openBigPhoto(currentPicture.dataset.pictureId);
    }
  });
};

export {openPhotoGalery};
