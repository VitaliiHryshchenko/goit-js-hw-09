const sectionForm = document.querySelector('.feedback-form');
const inputUserEmail = document.querySelector('.js-input-form-email');
const textareaUserComent = document.querySelector('.js-textarea-form-massage');
const btn = document.querySelector('.js-form-btn');
const LS_KEY = 'feedback-form-state';
const formData = {
  email: '',
  messadge: '',
};

inputUserEmail.addEventListener('input', handlerInputForm);
sectionForm.addEventListener('submit', handlerSubmitForm);
function handlerInputForm(evt) {
  console.log(evt.currentTarget);
}
function handlerSubmitForm(evt) {
  evt.preventDefault();
  const current = evt.target.value;
  console.log(current);
}
const form = `<label>
    <span class="text-label">Email</span>
    <input class="js-input-form-email" type="email" name="email" autofocus />
  </label>
  <label>
    <span class="text-label">Message</span>
    <textarea class="js-textarea-form-massage" name="message" rows="8"></textarea>
  </label>
  <button class="js-form-btn" type="submit">Submit</button>`;
sectionForm.insertAdjacentHTML('beforeend', form);
