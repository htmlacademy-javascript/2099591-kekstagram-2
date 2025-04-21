const COUNT_STEP = 5;
let currentCount = 0;
let comments = [];

const bigPicture = document.querySelector('.big-picture');
const socialComments = bigPicture.querySelector('.social__comments');
const socialCommentTemplate = socialComments.querySelector('.social__comment');
const commentsCount = bigPicture.querySelector('.social__comment-count');
const commentsLoader = bigPicture.querySelector('.comments-loader');

socialComments.innerHTML = '';

const showNextComments = () => {
  const socialCommentFragment = document.createDocumentFragment();
  const shownComments = comments.slice(currentCount, currentCount + COUNT_STEP);
  const shownCommentsQuantity = shownComments.length + currentCount;

  shownComments.forEach((comment) => {
    const socialComment = socialCommentTemplate.cloneNode(true);

    socialComment.querySelector('.social__picture').src = comment.avatar;
    socialComment.querySelector('.social__picture').alt = comment.name;
    socialComment.querySelector('.social__text').textContent = comment.message;

    socialCommentFragment.appendChild(socialComment);
  });

  socialComments.appendChild(socialCommentFragment);
  commentsCount.firstChild.textContent = shownCommentsQuantity;
  commentsCount.querySelector('.social__comment-total-count').textContent = comments.length;

  if (shownCommentsQuantity >= comments.length) {
    commentsLoader.classList.add('hidden');
  }
  currentCount += COUNT_STEP;
};

const clearComments = () => {
  currentCount = 0;
  socialComments.innerHTML = '';
  commentsLoader.classList.remove('hidden');
  commentsLoader.removeEventListener('click', showNextComments);
};

const generateComments = (currentPhotoComments) => {
  comments = currentPhotoComments;
  showNextComments();

  commentsLoader.addEventListener('click', showNextComments);
};

export {clearComments, generateComments};
