const imgUploadForm = document.querySelector('.img-upload__form');
const effectSlider = imgUploadForm.querySelector('.effect-level__slider');
const effectLevelValue = imgUploadForm.querySelector('.effect-level__value');
const effects = imgUploadForm.querySelectorAll('.effects__radio');
const chromeEffect = imgUploadForm.querySelector('#effect-chrome');
const sepiaEffect = imgUploadForm.querySelector('#effect-sepia');
const marvinEffect = imgUploadForm.querySelector('#effect-marvin');
const phobosEffect = imgUploadForm.querySelector('#effect-phobos');
const heatEffect = imgUploadForm.querySelector('#effect-heat');

noUiSlider.create(effectSlider, {
  start: 1,
  step: 0.1,
  connect: 'lower',
  range: {
    min: 0,
    max: 1,
  },
  format: {
    to: function (value) {
      if (Number.isInteger(value)) {
        return value.toFixed(0);
      }
      return value.toFixed(1);
    },
    from: function (value) {
      return parseFloat(value);
    },
  },
});

effectSlider.noUiSlider.on('update', () => {
  effectLevelValue.value = effectSlider.noUiSlider.get();
});
