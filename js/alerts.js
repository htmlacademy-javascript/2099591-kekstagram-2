import {isEscapeKey} from './util.js';

const body = document.querySelector('body');
const dataLoadingError = document.querySelector('#data-error').content.querySelector('.data-error');
const error = document.querySelector('#error').content.querySelector('.error');
const errorButton = error.querySelector('.error__button');
const errorInner = error.querySelector('.error__inner');
const ALERT_SHOW_TIME = 5000;

const showLoadingDataError = () => {
  body.append(dataLoadingError);
  setTimeout(() => {
    dataLoadingError.remove();
  }, ALERT_SHOW_TIME);
};

const removeErrorMessage = () => {
  error.remove();
  errorButton.removeEventListener('click', onErrorButtonClick);
  body.removeEventListener('keydown', onDocumentKeydown);
  body.removeEventListener('click', onDocumentClick);
};

const onErrorButtonClick = () => {
  removeErrorMessage();
};

const onDocumentKeydown = (evt) => {
  if(isEscapeKey(evt)) {
    removeErrorMessage();
  }
};

const onDocumentClick = (evt) => {
  if(evt.target === errorInner) {
    return;
  }
  removeErrorMessage();
};

const showUploadingDataError = () => {
  document.body.append(error);
  errorButton.addEventListener('click', onErrorButtonClick);
  body.addEventListener('keydown', onDocumentKeydown);
  body.addEventListener('click', onDocumentClick);
};

export {showLoadingDataError, showUploadingDataError};
