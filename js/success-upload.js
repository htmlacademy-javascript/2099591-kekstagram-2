import {isEscapeKey} from './util.js';

const successWrapper = document.querySelector('#success').content;
const successNotification = successWrapper.querySelector('.success');
const successInner = successWrapper.querySelector('.success__inner');
const successButton = successWrapper.querySelector('.success__button');

const showSuccessNotification = () => {
  document.body.append(successNotification);
  // eslint-disable-next-line no-use-before-define
  successButton.addEventListener('click', onSuccessButtonClick);
  // eslint-disable-next-line no-use-before-define
  document.addEventListener('keydown', onDocumentKeydown);
  // eslint-disable-next-line no-use-before-define
  document.addEventListener('click', onDocumentClick);
};

const removeSuccessNotification = () => {
  successNotification.remove();
};

const onSuccessButtonClick = () => {
  removeSuccessNotification();
};

const onDocumentKeydown = (evt) => {
  if (!isEscapeKey(evt)) {
    return;
  }
  evt.preventDefault();
  evt.stopPropagation();
  removeSuccessNotification();
};

const onDocumentClick = (evt) => {
  if (evt.target === successInner) {
    return;
  }
  removeSuccessNotification();
};

export {showSuccessNotification};
