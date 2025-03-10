import {getRandomInteger} from './util.js';
import {createComment} from './comments.js';

const descriptionList = [
  'Просто наслаждаюсь моментом.',
  'Солнечные дни и счастливые улыбки.',
  'Ловлю лучи солнца на лице.',
  'Жизнь прекрасна, когда рядом лучшие друзья.',
  'В поисках приключений в каждом уголке мира.',
  'Вдохновляюсь красотой вокруг.',
  'Воспоминания, которые останутся навсегда.',
  'Счастье в простых вещах.',
  'Мечтаю, исследую, открываю.',
  'Наслаждаюсь вкусом жизни.',
  'Мой уютный уголок счастья.',
  'Просто я и мои мысли.',
  'Живу здесь и сейчас.',
  'Моменты, которые хочется остановить.',
  'Позитивные вибрации каждый день.',
  'Делюсь своим маленьким миром.',
  'Путешествую по волнам вдохновения.',
  'Совершенство в несовершенстве.',
  'Жизнь слишком коротка, чтобы быть несчастным.',
  'Наслаждаюсь каждым закатом.',
  'Мои маленькие победы каждый день.',
  'Пусть мир увидит мою улыбку.',
  'В гармонии с собой и природой.',
  'Мой день в ярких красках.',
  'Просто люблю жизнь.'
];

const MIN_DESCRIPTION_INDEX = 1;

const MIN_LIKES = 15;
const MAX_LIKES = 200;

let id = 1;
let urlFotoIndex = 1;

const MIN_COUNT_COMMENTS = 0;
const MAX_COUNT_COMMENTS = 30;

const COUNT_FOTO = 25;

//функция генерации объектов-описаний фотографий
const createDescriptionFoto = () => {
  const randomDescriptionIndex = getRandomInteger(MIN_DESCRIPTION_INDEX, descriptionList.length - 1);
  const randomLikesIndex = getRandomInteger(MIN_LIKES, MAX_LIKES);
  const randomCountComments = getRandomInteger(MIN_COUNT_COMMENTS, MAX_COUNT_COMMENTS);
  const сomments = Array.from({length: randomCountComments}, createComment);

  return {
    id: id++,
    url: `photos/${ urlFotoIndex++ }.jpg`,
    description: descriptionList[randomDescriptionIndex],
    likes: randomLikesIndex,
    comments: сomments
  };
};

const differentDescriptionFoto = Array.from({length: COUNT_FOTO}, createDescriptionFoto);

export {differentDescriptionFoto};

