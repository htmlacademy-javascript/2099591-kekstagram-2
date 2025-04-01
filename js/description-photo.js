import {getRandomInteger} from './util.js';
import {createComment} from './comments.js';
import {descriptionPhotoList} from './data.js';

const MIN_DESCRIPTION_INDEX = 1;

const MIN_LIKES = 15;
const MAX_LIKES = 200;

let id = 1;
let urlPhotoIndex = 1;

const MIN_COUNT_COMMENTS = 0;
const MAX_COUNT_COMMENTS = 30;

const COUNT_PHOTO = 25;

//функция генерации объектов-описаний фотографий
const createDescriptionPhoto = () => {
  const randomDescriptionIndex = getRandomInteger(MIN_DESCRIPTION_INDEX, descriptionPhotoList.length - 1);
  const randomLikesIndex = getRandomInteger(MIN_LIKES, MAX_LIKES);
  const randomCountComments = getRandomInteger(MIN_COUNT_COMMENTS, MAX_COUNT_COMMENTS);
  const сomments = Array.from({length: randomCountComments}, createComment);

  return {
    id: id++,
    url: `photos/${ urlPhotoIndex++ }.jpg`,
    description: descriptionPhotoList[randomDescriptionIndex],
    likes: randomLikesIndex,
    comments: сomments
  };
};

const generateDescriptionPhoto = () => Array.from({length: COUNT_PHOTO}, createDescriptionPhoto);

export {generateDescriptionPhoto};

