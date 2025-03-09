import {getRandomInteger} from './util.js';

const massageList = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!'
];

const nameList = [
  'Илларион',
  'Аглая',
  'Елисей',
  'Василиса',
  'Платон',
  'Серафима',
  'Тихон',
  'Лукерья',
  'Демид',
  'Фекла',
  'Арсений',
  'Алевтина',
  'Захар',
  'Доминика',
  'Прохор',
  'Евдокия',
  'Ефим',
  'Ангелина',
  'Макар',
  'Пелагея',
  'Родион',
  'Злата',
  'Дмитрий',
  'Мария',
  'Павел'
];

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
