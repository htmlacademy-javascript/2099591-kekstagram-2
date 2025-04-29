import {isEscapeKey} from './util.js';
import {onScaleSmallerClick, onScaleBiggerClick} from './scale-controls.js';
import {getError, isHashtagsValid} from './hashtags-validity.js';
import {COMMENT_ERROR, isCommentValid} from './new-comment-validity.js';
import {onEffectsListChange} from './effects-slider.js';

const imgUploadForm = document.querySelector('.img-upload__form');
const uploadFile = imgUploadForm.querySelector('#upload-file');
const photoEditor = imgUploadForm.querySelector('.img-upload__overlay');
const uploadFormCancel = photoEditor.querySelector('.img-upload__cancel');

const scaleSmaller = imgUploadForm.querySelector('.scale__control--smaller');
const scaleBigger = imgUploadForm.querySelector('.scale__control--bigger');

const effectsList = imgUploadForm.querySelector('.effects__list');

const hashtagInput = imgUploadForm.querySelector('.text__hashtags');
const commentInput = imgUploadForm.querySelector('.text__description');

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
  });
};

const closePhotoEditor = () => {
  photoEditor.classList.add('hidden');
  document.body.classList.remove('modal-open');
  uploadFormCancel.removeEventListener('click', onUploadFormCancelClick);
  document.removeEventListener('keydown', onDocumentKeydown);
  uploadFile.value = '';
};

scaleSmaller.addEventListener('click', onScaleSmallerClick);
scaleBigger.addEventListener('click', onScaleBiggerClick);

const pristine = new Pristine(imgUploadForm, {
  classTo: 'img-upload__form',
  errorTextParent: 'img-upload__field-wrapper',
  errorTextClass: 'img-upload__field-wrapper--error',
});

pristine.addValidator(hashtagInput, isHashtagsValid, getError);
pristine.addValidator(commentInput, isCommentValid, COMMENT_ERROR);

imgUploadForm.addEventListener('submit', (evt) => {
  evt.preventDefault();
  if (pristine.validate()) {
    imgUploadForm.submit();
  }
});

effectsList.addEventListener('change', onEffectsListChange);

export {openPhotoEditor, hashtagInput, commentInput, imgUploadForm};
