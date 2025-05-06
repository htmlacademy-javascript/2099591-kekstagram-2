import {isEscapeKey} from './util.js';
import {pushScale, resetScale} from './scale-controls.js';
import {getError, isHashtagsValid} from './hashtags-validity.js';
import {COMMENT_ERROR, isCommentValid} from './new-comment-validity.js';
import {createEffect, resetEffect} from './effects-slider.js';
import {sendData} from './api.js';
import {showUploadingError} from './alerts.js';
import {showSuccessNotification} from './success-upload.js';

const imgUploadForm = document.querySelector('.img-upload__form');
const uploadFile = imgUploadForm.querySelector('#upload-file');
const photoEditor = imgUploadForm.querySelector('.img-upload__overlay');
const uploadFormCancel = photoEditor.querySelector('.img-upload__cancel');

const hashtagInput = imgUploadForm.querySelector('.text__hashtags');
const commentInput = imgUploadForm.querySelector('.text__description');

const submitButton = imgUploadForm.querySelector('.img-upload__submit');

const onUploadFormCancelClick = () => {
  // eslint-disable-next-line no-use-before-define
  closePhotoEditor();
};

const onDocumentKeydown = (evt) => {
  if (isEscapeKey(evt)) {
    evt.preventDefault();
    if (document.activeElement === hashtagInput || document.activeElement === commentInput) { //отмена Esc при фокусе
      evt.stopPropagation();
    } else {
      // eslint-disable-next-line no-use-before-define
      closePhotoEditor();
    }
  }
};

const openPhotoEditor = () => {
  uploadFile.addEventListener('change', () => {
    photoEditor.classList.remove('hidden');
    document.body.classList.add('modal-open');
    uploadFormCancel.addEventListener('click', onUploadFormCancelClick);
    document.addEventListener('keydown', onDocumentKeydown);
    pushScale();
    createEffect ();
  });
};

const closePhotoEditor = () => {
  photoEditor.classList.add('hidden');
  document.body.classList.remove('modal-open');
  uploadFormCancel.removeEventListener('click', onUploadFormCancelClick);
  document.removeEventListener('keydown', onDocumentKeydown);
  resetScale();
  resetEffect();
  uploadFile.value = '';
};

const pristine = new Pristine(imgUploadForm, {
  classTo: 'img-upload__form',
  errorTextParent: 'img-upload__field-wrapper',
  errorTextClass: 'img-upload__field-wrapper--error',
});

pristine.addValidator(hashtagInput, isHashtagsValid, getError);
pristine.addValidator(commentInput, isCommentValid, COMMENT_ERROR);

const blockSubmitButton = () => {
  submitButton.disabled = true;
};

const unblockSubmitButton = () => {
  submitButton.disabled = false;
};

const setImgUploadFormSubmit = (onSuccess) => {
  imgUploadForm.addEventListener('submit', (evt) => {
    evt.preventDefault();
    if(!pristine.validate()) {
      return;
    }
    blockSubmitButton();

    sendData(new FormData(evt.target))
      .then(onSuccess)
      .then(showSuccessNotification)
      .catch(() => {
        showUploadingError();
      })
      .finally(unblockSubmitButton);
  });
};

setImgUploadFormSubmit(closePhotoEditor);

export {openPhotoEditor, hashtagInput, commentInput, imgUploadForm};
