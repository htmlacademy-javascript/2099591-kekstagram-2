//import {imgUploadForm} from './img-upload-form.js';

const imgUploadForm = document.querySelector('.img-upload__form');
const scaleControlValue = imgUploadForm.querySelector('.scale__control--value');
const imgPreview = imgUploadForm.querySelector('.img-upload__preview').querySelector('img');

const SCALE_STEP = 25;
const MAX_SCALE = 100;
let scale = 100;

const onScaleSmallerClick = () => {
  if (scale > SCALE_STEP) {
    scale -= SCALE_STEP;
    imgPreview.style.transform = `scale(${scale / 100})`;
    scaleControlValue.value = `${scale}%`;
  }
};

const onScaleBiggerClick = () => {
  if (scale < MAX_SCALE) {
    scale += SCALE_STEP;
    imgPreview.style.transform = `scale(${scale / 100})`;
    scaleControlValue.value = `${scale}%`;
  }
};

export {onScaleSmallerClick, onScaleBiggerClick};
