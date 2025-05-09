const picturesWrapper = document.querySelector('.pictures');
const picturesTemplate = document.querySelector('#picture').content;
const differentPhotoFragment = document.createDocumentFragment();

const preparePictureTemplate = (picture) => {
  const pictureElement = picturesTemplate.cloneNode(true);
  pictureElement.querySelector('.picture').dataset.pictureId = picture.id;
  pictureElement.querySelector('.picture__img').src = picture.url;
  pictureElement.querySelector('.picture__img').alt = picture.description;
  pictureElement.querySelector('.picture__likes').textContent = picture.likes;
  pictureElement.querySelector('.picture__comments').textContent = picture.comments.length;

  return pictureElement;
};

const preparePhotoElement = (photos) => {
  photos.slice().forEach((photo) => {
    differentPhotoFragment.append(preparePictureTemplate(photo));
  });

  return differentPhotoFragment;
};

const clearPhoto = () => {
  const pictures = picturesWrapper.querySelectorAll('.picture');
  pictures.forEach((picture) => picture.remove());
};

const generatePhoto = (photosArray) => {
  clearPhoto();
  picturesWrapper.append(preparePhotoElement(photosArray));
};

export {generatePhoto};


