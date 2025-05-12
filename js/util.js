//Функция проверки нажатой клавиши (escape или нет)
const isEscapeKey = (evt) => evt.key === 'Escape';

//Для устранения дребезга
const debounce = (callback, timeoutDelay) => {
  let timeoutId;
  return (...rest) => {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => callback.apply(this, rest), timeoutDelay);
  };
};

export {isEscapeKey, debounce};
