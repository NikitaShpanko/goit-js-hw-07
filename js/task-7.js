const range = document.querySelector('#font-size-control');
const span = document.querySelector('#text');
range.addEventListener('input', () => {
  span.setAttribute('style', `font-size: ${range.value}px;`);
});
