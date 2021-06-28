let counterValue;

function increment() {
  counterValue += 1;
  updateSpan();
}

function decrement() {
  counterValue -= 1;
  updateSpan();
}

const spanValue = document.querySelector('#value');
counterValue = parseInt(spanValue.innerHTML);

function updateSpan() {
  spanValue.innerHTML = counterValue;
}

document
  .querySelector('[data-action="decrement"]')
  .addEventListener('click', decrement);
document
  .querySelector('[data-action="increment"]')
  .addEventListener('click', increment);
