import {getRandomInteger} from './util.js';
import {massageList, nameList} from './data.js';

const MIN_ID_COMMENT = 1;
const MAX_ID_COMMENT = 1000;

const MIN_AVATAR_INDEX = 1;
const MAX_AVATAR_INDEX = 6;

const MIN_MASSAGE_INDEX = 1;

const MIN_NAME_INDEX = 1;

//Функция генерации комментариев
const createComment = () => {
  const randomIdCommentIndex = getRandomInteger(MIN_ID_COMMENT, MAX_ID_COMMENT);
  const randomAvatarIndex = getRandomInteger(MIN_AVATAR_INDEX, MAX_AVATAR_INDEX);
  const randomMassageIndex = getRandomInteger(MIN_MASSAGE_INDEX, massageList.length - 1);
  const randomNameList = getRandomInteger(MIN_NAME_INDEX, nameList.length - 1);

  return {
    id: randomIdCommentIndex,
    avatar: `img/avatar-${ randomAvatarIndex }.svg`,
    message: massageList[randomMassageIndex],
    name: nameList[randomNameList]
  };
};

export {createComment};
