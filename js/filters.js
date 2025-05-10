import {debounce} from './util.js';
import {generatePhoto} from './photo-template.js';

const RANDOM_PHOTOS_QUANTITY = 10;
const RERENDER_DELAY = 500;

const FILTERS = {
  DEFAULT: 'filter-default',
  RANDOM: 'filter-random',
  DISCUSSED: 'filter-discussed'
};

const imgFilters = document.querySelector('.img-filters');
//const imgFilterButtons = imgFilters.querySelectorAll('.img-filters__button');
// const filterDefaultButton = imgFilters.querySelector('#filter-default');
// const filterRandomButton = imgFilters.querySelector('#filter-random');
// const filterDiscussedButton = imgFilters.querySelector('#filter-discussed');

let currentPhotoFilter = 'filter-default';
let photoArray = [];

// const removeActiveClass = () => {
//   imgFilterButtons.forEach((button) => {
//     button.classList.remove('img-filters__button--active');
//   });
// };

// const addActiveClass = (button) => {
//   button.classList.add('img-filters__button--active');
// };

const sortCommentsQuantity = (photoA, photoB) => photoB.comments.length - photoA.comments.length;

// const onFilterDefaultButtonClick = (cb) => {
//   filterDefaultButton.addEventListener('click', () => {
//     removeActiveClass();
//     addActiveClass(filterDefaultButton);
//     cb();
//   });
// };

// const onFilterRandomButtonClick = (cb) => {
//   filterRandomButton.addEventListener('click', () => {
//     removeActiveClass();
//     addActiveClass(filterRandomButton);
//     cb();
//   });
// };

// const onFilterDiscussedButtonClick = (cb) => {
//   filterDiscussedButton.addEventListener('click', () => {
//     removeActiveClass();
//     addActiveClass(filterDiscussedButton);
//     cb();
//   });
// };

const generateRandomPhotos = (photos, count) => {
  const availablePhotos = [...photos];
  const randomPhotos = [];
  while (randomPhotos.length < count && availablePhotos.length > 0) {
    const randomIndex = Math.floor(Math.random() * availablePhotos.length);
    randomPhotos.push(availablePhotos.splice(randomIndex, 1)[0]);
  }
  return randomPhotos;
};

const getFilteredPhotos = (typeFilter) => {
  switch (typeFilter) {
    case FILTERS.RANDOM:
      return generateRandomPhotos(photoArray, RANDOM_PHOTOS_QUANTITY);
    case FILTERS.DISCUSSED:
      return photoArray.slice().sort(sortCommentsQuantity);
    case FILTERS.DEFAULT:
    default:
      return photoArray;
  }
};

const onFiltersClick = (evt) => {
  const activeButton = evt.target.closest('.img-filters__button');

  if (!activeButton || activeButton.id === currentPhotoFilter) {
    return;
  }

  const filteredPhotos = getFilteredPhotos(activeButton.id);
  currentPhotoFilter = activeButton.id;
  document.querySelector('.img-filters__button--active').classList.remove('img-filters__button--active');
  activeButton.classList.add('img-filters__button--active');

  generatePhoto(filteredPhotos);
};

const initPhotoFilters = (photos) => {
  photoArray = photos;
  imgFilters.addEventListener('click', debounce(onFiltersClick, RERENDER_DELAY));
  imgFilters.classList.remove('img-filters--inactive');
};

export {initPhotoFilters};
