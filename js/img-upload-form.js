import {isEscapeKey} from './util.js';
import {pushScale, resetScale} from './scale-controls.js';
import {getError, isHashtagsValid} from './hashtags-validity.js';
import {COMMENT_ERROR, isCommentValid} from './new-comment-validity.js';
import {createEffect, resetEffect} from './effects-slider.js';
import {sendData} from './api.js';
import {showUploadingError} from './alerts.js';
import {showSuccessNotification} from './success-upload.js';

const FILE_TYPES = ['jpg', 'jpeg', 'png'];

const imgUploadForm = document.querySelector('.img-upload__form');
const imgUploadInput = document.querySelector('.img-upload__input');
const uploadFile = imgUploadForm.querySelector('#upload-file');
const photoEditor = imgUploadForm.querySelector('.img-upload__overlay');
const uploadFormCancel = photoEditor.querySelector('.img-upload__cancel');
const uploadPreview = document.querySelector('.img-upload__preview img');
const uploadPreviewEffects = document.querySelectorAll('.effects__preview');
const submitButton = imgUploadForm.querySelector('.img-upload__submit');

const hashtagInput = imgUploadForm.querySelector('.text__hashtags');
const commentInput = imgUploadForm.querySelector('.text__description');

const onDocumentKeydown = (evt) => {
  if (isEscapeKey(evt)) {
    evt.preventDefault();
    if (document.activeElement === hashtagInput || document.activeElement === commentInput) { //отмена Esc при фокусе
      evt.stopPropagation();
    } else {
      closePhotoEditor();
    }
  }
};

const onFileInputChange = () => {
  const file = imgUploadInput.files[0];
  const fileName = file.name.toLowerCase();
  const fileExt = fileName.split('.').pop();
  const matches = FILE_TYPES.includes(fileExt);

  if (matches) {
    const url = URL.createObjectURL(file);
    uploadPreview.src = url;
    uploadPreviewEffects.forEach((item) => {
      item.style.backgroundImage = `url(${url})`;
    });
  } else {
    return;
  }

  openPhotoEditor();
};

function openPhotoEditor () {
  uploadFile.addEventListener('change', () => {
    onFileInputChange();
    photoEditor.classList.remove('hidden');
    document.body.classList.add('modal-open');
    uploadFormCancel.addEventListener('click', onUploadFormCancelClick);
    document.addEventListener('keydown', onDocumentKeydown);
    pushScale();
    createEffect ();
  });
}

function closePhotoEditor () {
  photoEditor.classList.add('hidden');
  document.body.classList.remove('modal-open');
  uploadFormCancel.removeEventListener('click', onUploadFormCancelClick);
  document.removeEventListener('keydown', onDocumentKeydown);
  resetScale();
  resetEffect();
  uploadFile.value = '';
  hashtagInput.value = '';
  commentInput.value = '';
}

function onUploadFormCancelClick () {
  closePhotoEditor();
}

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
