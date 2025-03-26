import {differentDescriptionFoto} from './description-foto.js';

const pictures = document.querySelector('.pictures');

const picturesTemplate = document.querySelector('#picture').content;

const differentFoto = differentDescriptionFoto();

const differentFotoFragment = document.createDocumentFragment();

differentFoto.forEach(({url, description, likes, comments}) => {
  const pictureElement = picturesTemplate.cloneNode(true);
  pictureElement.querySelector('src').textContent = url;
  pictureElement.querySelector('alt').textContent = description;
  pictureElement.querySelector('.picture__likes').textContent = likes;
  pictureElement.querySelector('.picture__comments').textContent = comments;
  differentFotoFragment.appendChild('pictureElement');
});

pictures.appendChild(differentFotoFragment);
