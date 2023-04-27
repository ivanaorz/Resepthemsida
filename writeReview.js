
const submitBtn = document.querySelector('.submit-btn');
const reviewField = document.querySelector('.review-field');
const nameField = document.querySelector('.name-field');
const reviewList = document.querySelector('.review-list');

function createReviewElement(name, content) {
  const li = document.createElement("li");
  const header = document.createElement("header");
  header.textContent = name;
  li.append(header);
  const paragraph = document.createElement("p");
  paragraph.textContent = content;
  li.append(paragraph);
  return li;
}

function appendReview() {

  const name = nameField.value; 
  const content = reviewField.value;
  const element = createReviewElement(content);

  reviewList.append(element);
  nameField.value = '';
  reviewField.value = '';
}

submitBtn.addEventListener("click", appendReview);





























