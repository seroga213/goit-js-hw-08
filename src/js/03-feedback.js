import { throttle } from 'lodash';

const refs = {
  form: document.querySelector('.feedback-form'),
  email: document.querySelector('input[name="email"]'),
  message: document.querySelector('textarea[name="message"]'),
};
const LOCALSTORAGE_KEY = 'feedback-form-state';

refs.form.addEventListener(
  'input',
  throttle(evt => {
    const formData = {
      email: refs.email.value,
      message: refs.message.value,
    };
    localStorage.setItem(LOCALSTORAGE_KEY, JSON.stringify(formData));
  }, 500)
);

const load = key => {
  try {
    const serializedState = localStorage.getItem(key);
    return serializedState === null ? undefined : JSON.parse(serializedState);
  } catch (error) {
    'Get state error: ', error.message;
  }
};

const dataFromStorage = load(LOCALSTORAGE_KEY);
if (dataFromStorage) {
  refs.email.value = dataFromStorage.email;
  refs.message.value = dataFromStorage.message;
}

refs.form.addEventListener('submit', evt => {
  evt.preventDefault();
  console.log({ email: refs.email.value, message: refs.message.value });
  refs.form.reset();
  localStorage.removeItem(LOCALSTORAGE_KEY);
});
