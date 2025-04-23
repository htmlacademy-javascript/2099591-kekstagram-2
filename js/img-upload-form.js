import {isEscapeKey} from './util';

const imgUploadForm = document.querySelector('.img-upload__form');
const uploadFile = imgUploadForm.querySelector('#upload-file');
const photoEditor = imgUploadForm.querySelector('.img-upload__overlay');
const uploadFormCancel = photoEditor.querySelector('#img-upload__cancel');

const hashtagInput = imgUploadForm.querySelector('.text__hashtags');
const commentInput = imgUploadForm.querySelector('.text__description');

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

new Pristine(imgUploadForm);
const pristine = new Pristine(imgUploadForm, {
  classTo: 'img-upload__field-wrapper',
  errorClass: 'img-upload__field-wrapper--error',
});
pristine.addValidator(hashtagInput, (value) => {}, '');

export {openPhotoEditor, closePhotoEditor};
