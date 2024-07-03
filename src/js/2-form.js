const sectionForm = document.querySelector('.feedback-form');

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
const formData = {
  email: '',
  message: '',
};

sectionForm.addEventListener('input', handlerInput);

function handlerInput(event) {
  event.preventDefault();

  if (event.target.name === 'email') {
    formData.email = event.target.value.trim();
  }

  if (event.target.name === 'message') {
    formData.message = event.target.value.trim();
  }

  localStorage.setItem('feedback-form-state', JSON.stringify(formData));
}

const emailInput = document.getElementsByName('email');
const messageInput = document.getElementsByName('message');
const savedData = localStorage.getItem('feedback-form-state');

function fillForm() {
  if (savedData) {
    const parsedData = JSON.parse(savedData);
    formData.email = parsedData.email;
    formData.message = parsedData.message;
    emailInput[0].value = formData.email;
    messageInput[0].value = formData.message;
  }
}

fillForm();

sectionForm.addEventListener('submit', handlerSubmit);

function handlerSubmit(event) {
  event.preventDefault();

  if (!formData.email || !formData.message) {
    alert('Fill please all fields');
    return;
  }

  console.log(formData);
  localStorage.removeItem('feedback-form-state');
  formData.email = '';
  formData.message = '';
  sectionForm.reset();
}
