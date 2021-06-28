const divBoxes = document.querySelector('#boxes');

function randomRGB() {
  const o = Math.round;
  const r = Math.random;
  return `rgb(${o(255 * r())}, ${o(255 * r())}, ${o(255 * r())})`;
}

function createBoxes(amount) {
  let dimension = 30;
  for (let i = 0; i < amount; i++) {
    const elem = document.createElement('div');
    elem.setAttribute(
      'style',
      `width: ${dimension}px;
       height: ${dimension}px;
       background-color: ${randomRGB()};`,
    );
    divBoxes.appendChild(elem);
    dimension += 10;
  }
}

function destroyBoxes() {
  while (divBoxes.firstChild) {
    divBoxes.removeChild(divBoxes.lastChild);
  }
}

const controls = document.querySelector('#controls');
const input = controls.querySelector('input');

document
  .querySelector('[data-action="render"]')
  .addEventListener('click', () => {
    destroyBoxes();
    createBoxes(input.value);
  });

document
  .querySelector('[data-action="destroy"]')
  .addEventListener('click', () => {
    destroyBoxes();
    //input.value = 0;
  });
