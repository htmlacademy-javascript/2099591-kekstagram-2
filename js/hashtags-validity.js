import {hashtagInput} from './img-upload-form';

const MAX_SYMBOLS = 20;
const MAX_HASHTAGS = 5;

const getError = () => errorMessage;

const isHashtagsValid () => {
  let errorMessage = '';

  const hashtags = hashtagInput.value.toLocaleLowerCase().trim().split(/\s+/);

  const rules = [
    {
      check: hashtags.some((item) => item[0] !== '#'),
      errorMessage: 'Хэштэг должен начинаться с решётки'
    },
    {
      check: hashtags.some((item) => !/^#[a-zа-яё0-9]{1,19}$/i.test(item)),
      errorMessage: 'Хэштэг содержит недопустимые символы'
    },
    {
      check: hashtags.some((item) => item === '#'),
      errorMessage: 'Хэштэг не может состоять только из одной решётки'
    },
    {
      check: hashtags.some((item) => item.length > MAX_SYMBOLS),
      errorMessage: `Хэштэг не может быть длинее ${MAX_SYMBOLS} символов, включая решётку`
    },
    {
      check: hashtags.some((item) => item.slice(1).includes('#')),
      errorMessage: 'Хэштэги должны разделяться пробелами'
    },
    {
      check: hashtags.length > MAX_HASHTAGS,
      errorMessage: `Хэштэгов не может быть больше ${MAX_HASHTAGS}`
    }];

    return rules.every((rule) => {
      const isInvalid = rule.check;
      if (isInvalid) {
        errorMessage = rule.errorMessage;
      }
      return !isInvalid;
    });
  }

  export {getError, isHashtagsValid};
