const ul = document.querySelector('ul#categories');
const categories = ul.querySelectorAll('li.item');
console.log(`В списке ${categories.length} категории.`);
for (const category of categories) {
  console.log('Категория: ' + category.querySelector('h2').innerText);
  console.log(
    'Количество элементов: ' + category.querySelectorAll('li').length,
  );
}
