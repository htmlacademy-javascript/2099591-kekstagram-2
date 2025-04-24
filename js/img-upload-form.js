import {isEscapeKey} from './util';
import {getError, isHashtagsValid} from './hashtags-validity';

const imgUploadForm = document.querySelector('.img-upload__form');
const uploadFile = imgUploadForm.querySelector('#upload-file');
const photoEditor = imgUploadForm.querySelector('.img-upload__overlay');
const uploadFormCancel = photoEditor.querySelector('#img-upload__cancel');

const hashtagInput = imgUploadForm.querySelector('.text__hashtags');
const commentInput = imgUploadForm.querySelector('.text__description');

const MAX_COMMENT_SYMBOLS = 140;

const onUploadFormCancelClick = () => {
  closePhotoEditor();
};

const onDocumentKeydown = (evt) => {
  if (isEscapeKey(evt)) {
    evt.preventDefault();
    closePhotoEditor();
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

const isCommentValid = () => commentInput.value.length <= MAX_COMMENT_SYMBOLS;

new Pristine(imgUploadForm);

const pristine = new Pristine(imgUploadForm, {
  classTo: 'img-upload__form',
  errorTextParent: 'img-upload__field-wrapper',
  errorTextClass: 'img-upload__field-wrapper--error',
});

pristine.addValidator(hashtagInput, isHashtagsValid, getError);
pristine.addValidator(commentInput, isCommentValid, 'длина комментария не может составлять больше 140 символов');

export {openPhotoEditor, closePhotoEditor, hashtagInput};
