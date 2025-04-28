import {commentInput} from './img-upload-form.js';

const MAX_COMMENT_SYMBOLS = 140;
const COMMENT_ERROR = `длина комментария не может составлять больше ${MAX_COMMENT_SYMBOLS} символов`;

const isCommentValid = () => commentInput.value.length <= MAX_COMMENT_SYMBOLS;

export {COMMENT_ERROR, isCommentValid};
