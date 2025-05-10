import {generatePhoto} from './photo-template.js';
import {openPhotoGalery} from './galery.js';
import {fillPictures} from './big-photo.js';
import {openPhotoEditor} from './img-upload-form.js';
import {createSlider} from './effects-slider.js';
import {getData} from './api.js';
import {showLoadingError} from './alerts.js';
import {initPhotoFilters} from './filters.js';

getData()
  .then((photos) => {
    fillPictures(photos);
    generatePhoto(photos);
    initPhotoFilters(photos);
  }
  )
  .catch(() => {
    showLoadingError();
  });

openPhotoGalery();
openPhotoEditor();
createSlider();

