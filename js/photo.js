import {generateDescriptionPhoto} from './description-photo.js';

const pictures = document.querySelector('.pictures');

const picturesTemplate = document.querySelector('#picture').content;

const photos = generateDescriptionPhoto();

const generatePhoto = () => {
  const differentPhotoFragment = document.createDocumentFragment();

  photos.forEach(({url, description, likes, comments}) => {
    const pictureElement = picturesTemplate.cloneNode(true);
    pictureElement.querySelector('.picture__img').src = url;
    pictureElement.querySelector('.picture__img').alt = description;
    pictureElement.querySelector('.picture__likes').textContent = likes;
    pictureElement.querySelector('.picture__comments').textContent = comments.length;
    differentPhotoFragment.appendChild(pictureElement);
  });
  pictures.appendChild(differentPhotoFragment);
};

export {photos, generatePhoto};


