import {isEscapeKey} from './util.js';

const successWrapper = document.querySelector('#success').content;
const successNotification = successWrapper.querySelector('.success');
const successInner = successWrapper.querySelector('.success__inner');
const successButton = successWrapper.querySelector('.success__button');

const showSuccessNotification = () => {
  document.body.append(successNotification);
  successButton.addEventListener('click', onSuccessButtonClick);
  document.addEventListener('keydown', onDocumentKeydown);
  document.addEventListener('click', onDocumentClick);
};

const removeSuccessNotification = () => {
  successNotification.remove();
};

function onSuccessButtonClick () {
  removeSuccessNotification();
}

function onDocumentKeydown (evt) {
  if (!isEscapeKey(evt)) {
    return;
  }
  evt.preventDefault();
  evt.stopPropagation();
  removeSuccessNotification();
}

function onDocumentClick (evt) {
  if (evt.target === successInner) {
    return;
  }
  removeSuccessNotification();
}

export {showSuccessNotification};
