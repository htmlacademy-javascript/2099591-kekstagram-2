import {pictures, photos, generatePhoto} from './photo.js';
import {openBigPhoto} from './big-photo.js';

generatePhoto(photos);

pictures.addEventListener('click', (evt) => {
  const currentPicture = evt.target.closest('.picture');
  if (currentPicture) {
    openBigPhoto(currentPicture.dataset.pictureId);
  }
});
