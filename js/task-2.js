const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];

const ul = document.querySelector('ul#ingredients');

for (const ingredient of ingredients) {
  const li = document.createElement('li');
  li.innerText = ingredient;
  ul.appendChild(li);
}
