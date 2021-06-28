const input = document.querySelector('#validation-input');
const dataLen = input.getAttribute('data-length');
input.addEventListener('focusout', () => {
  if (input.value.length == dataLen) {
    input.classList.remove('invalid');
    input.classList.add('valid');
  } else {
    input.classList.remove('valid');
    input.classList.add('invalid');
  }
});
