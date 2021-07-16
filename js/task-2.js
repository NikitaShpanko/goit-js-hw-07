const ingredients = [
  "Картошка",
  "Грибы",
  "Чеснок",
  "Помидоры",
  "Зелень",
  "Приправы",
];

const ul = document.querySelector("ul#ingredients");

const liList = ingredients.map((ingredient) => {
  const li = document.createElement("li");
  li.innerText = ingredient;
  return li;
});

ul.append(...liList);
