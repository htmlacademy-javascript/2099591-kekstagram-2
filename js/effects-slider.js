const imgUploadSection = document.querySelector('.img-upload');
const imgUploadPreview = document.querySelector('.img-upload__preview img');

const effectSlider = imgUploadSection.querySelector('.effect-level__slider');
const effectLevel = imgUploadSection.querySelector('.effect-level__value');
const noneEffect = imgUploadSection.querySelector('#effect-none');
const effectsList = imgUploadSection.querySelector('.effects__list');
const sliderWrapper = imgUploadSection.querySelector('.img-upload__effect-level');

const effectsConfig = {
  none: {
    hidden: true,
  },
  chrome: {
    range: {
      min: 0,
      max: 1,
    },
    start: 1,
    step: 0.1,
    filter: (value) => `grayscale(${value})`,
  },
  sepia: {
    range: {
      min: 0,
      max: 1,
    },
    start: 1,
    step: 0.1,
    filter: (value) => `sepia(${value})`,
  },
  marvin: {
    range: {
      min: 0,
      max: 100,
    },
    start: 100,
    step: 1,
    filter: (value) => `invert(${value}%)`,
  },
  phobos: {
    range: {
      min: 0,
      max: 3,
    },
    start: 3,
    step: 0.1,
    filter: (value) => `blur(${value}px)`,
  },
  heat: {
    range: {
      min: 1,
      max: 3,
    },
    start: 3,
    step: 0.1,
    filter: (value) => `brightness(${value})`,
  },
};

const createSlider = () => {
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
};

const onEffectsListChange = (evt) => {
  const effect = evt.target.value;
  const filterConfig = effectsConfig[effect];

  if (effect === 'none') {
    resetEffect();
  } else {
    sliderWrapper.classList.remove('hidden');

    effectSlider.noUiSlider.updateOptions({
      range: filterConfig.range,
      start: filterConfig.start,
      step: filterConfig.step,
    });

    effectSlider.noUiSlider.on('update', () => {
      effectLevel.value = effectSlider.noUiSlider.get();
      imgUploadPreview.style.filter = filterConfig.filter(effectLevel.value);
    });
  }
};

const createEffect = () => {
  effectsList.addEventListener('change', onEffectsListChange);
  sliderWrapper.classList.add('hidden');
};

function resetEffect () {
  sliderWrapper.classList.add('hidden');
  imgUploadPreview.style.filter = 'none';
  effectLevel.value = 0;
  noneEffect.checked = true;
}

export {createSlider, createEffect, resetEffect};
