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

const MIN_ID = 1;
const MAX_ID = 25;

const MIN_LIKES = 15;
const MAX_LIKES = 200;

//функция генерации случайного целого числа
const getRandomInteger = (a, b) => {
  const lower = Math.ceil(Math.min(a, b));
  const upper = Math.floor(Math.max(a, b));
  const result = Math.random() * (upper - lower + 1) + lower;
  return Math.floor(result);
};

//функция формирования массива-описания фотографий
const createDescriptionFoto = () => {
  const randomIdIndex = getRandomInteger(MIN_ID, MAX_ID);
  const randomDescriptionIndex = getRandomInteger(1, descriptionList.length - 1);
  const randomUrlFotoIndex = getRandomInteger(1, 25);
  const randomLikesIndex = getRandomInteger(MIN_LIKES, MAX_LIKES);

  const randomIdCommentIndex = getRandomInteger(1, 1000);
  const randomAvatarIndex = getRandomInteger(1, 6);
  const randomMassageIndex = getRandomInteger(1, massageList.length - 1);
  const randomNameList = getRandomInteger(1, nameList.length - 1);

  return {
    id: randomIdIndex,
    url: 'photos/' + randomUrlFotoIndex + '.jpg',
    description: descriptionList[randomDescriptionIndex],
    likes: randomLikesIndex,
    comments: {
      id: randomIdCommentIndex,
      avatar: 'img/avatar-' + randomAvatarIndex + '.svg',
      message: massageList[randomMassageIndex],
      name: nameList[randomNameList]
    }
  }
};

const differentDescriptionFoto = Array.from({length: 25}, createDescriptionFoto);
console.log(differentDescriptionFoto);
