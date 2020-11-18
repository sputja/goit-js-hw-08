/*
В HTML есть пустой список ul#ingredients.

<ul id="ingredients"></ul>
В JS есть массив строк.


Напиши скрипт, который для каждого элемента массива ingredients создаст отдельный li, после чего вставит все li
за одну операцию в список ul.ingredients. Для создания DOM-узлов используй document.createElement().
*/
const ingredients = [
  "Картошка",
  "Грибы",
  "Чеснок",
  "Помидоры",
  "Зелень",
  "Приправы",
];

const ul_ingredients = document.querySelector("#ingredients");
const createlist = (item) => {
  const itemCreate = document.createElement("li");
  itemCreate.textContent = item;
  return itemCreate;
};
const listElement = ingredients.map(createlist);
ul_ingredients.append(...listElement);
