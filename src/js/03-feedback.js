import throttle from 'lodash.throttle';

// // Змінні
const form = document.querySelector('.feedback-form');
const emailInput = document.querySelector("input[name='email']");
const messageInput = document.querySelector("textarea[name='message']");

const LOCAL_KEY = 'feedback-form-state';

let localData = JSON.parse(localStorage.getItem(LOCAL_KEY)) || {};

// // Прослуховувачі подій
form.addEventListener('submit', onSubmit);
emailInput.addEventListener('input', throttle(onEmailChange, 500));
messageInput.addEventListener('input', throttle(onMessageChange, 500));

onPageLoad();

// Функції

function onSubmit(event) {
  event.preventDefault();

  if (emailInput.value && messageInput.value) {
    event.currentTarget.reset();
    console.log(localData);
    localStorage.removeItem(LOCAL_KEY);
    localData = {};
  } else {
    alert('Заповніть всі поля!');
  }
}

function onEmailChange(event) {
  let email = event.target.value;
  localData.email = email;
  saveData();
}

function onMessageChange(event) {
  let message = event.target.value;
  localData.message = message;
  saveData();
}

function saveData() {
  const strData = JSON.stringify(localData);
  localStorage.setItem(LOCAL_KEY, strData);
}

function onPageLoad() {
  const localSavedData = localStorage.getItem(LOCAL_KEY);
  if (localSavedData) {
    const parsedData = JSON.parse(localSavedData);

    emailInput.value = parsedData.email || '';
    messageInput.value = parsedData.message || '';
  }
}
