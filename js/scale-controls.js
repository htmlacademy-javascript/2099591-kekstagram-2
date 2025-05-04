const imgUploadForm = document.querySelector('.img-upload__form');
const scaleControlValue = imgUploadForm.querySelector('.scale__control--value');
const imgUploadPreview = imgUploadForm.querySelector('.img-upload__preview img');

const scaleSmaller = imgUploadForm.querySelector('.scale__control--smaller');
const scaleBigger = imgUploadForm.querySelector('.scale__control--bigger');

const SCALE_STEP = 25;
const MAX_SCALE = 100;
let scale = 100;

const onScaleSmallerClick = () => {
  if (scale > SCALE_STEP) {
    scale -= SCALE_STEP;
    imgUploadPreview.style.transform = `scale(${scale / 100})`;
    scaleControlValue.value = `${scale}%`;
  }
};

const onScaleBiggerClick = () => {
  if (scale < MAX_SCALE) {
    scale += SCALE_STEP;
    imgUploadPreview.style.transform = `scale(${scale / 100})`;
    scaleControlValue.value = `${scale}%`;
  }
};

const pushScale = () => {
  scaleSmaller.addEventListener('click', onScaleSmallerClick);
  scaleBigger.addEventListener('click', onScaleBiggerClick);
};

const resetScale = () => {
  scaleControlValue.value = '100%';
  imgUploadPreview.style.transform = 'none';
  scaleSmaller.removeEventListener('click', onScaleSmallerClick);
  scaleBigger.removeEventListener('click', onScaleBiggerClick);
};

export {pushScale, resetScale};
