/*
<script>
    let ul = document.createElement('ul');
    document.body.append(ul);

    while (true) {

      let data = prompt("Введите текст для элемента списка", "");

      let li = document.createElement('li');
      li.textContent = data;
      ul.append(li);
    }
  </script>

var div = document.getElementById('list');
	var ul = document.createElement('ul');
	div.appendChild(ul);
	var data = ["Первая строка", "Вторая строка", "n строка"];
	for (var i = 0, ln = data.length; i < ln; i++) {
	  var li = document.createElement('li');
	  li.innerHTML = data[i];
	  ul.appendChild(li);
	}


Напиши скрипт, который выполнит следующие операции.

Посчитает и выведет в консоль количество категорий в ul#categories, то есть элементов li.item. Получится 'В списке 3 категории.'.

Для каждого элемента li.item в списке ul#categories, найдет и выведет в консоль текст заголовка элемента (тега h2) и количество элементов в категории
 (всех вложенных в него элементов li).

Например для первой категории получится:

Категория: Животные
Количество элементов: 4
*/
const categories = ["Животные", "Продукты", "Технологии"];
const animals = ["Кот", "Хомяк", "Лошадь", "Попугай"];
const products = ["Хлеб", "Петрушка", "Творог"];
const technology = ["HTML", "CSS", "JavaScript", "React", "Node"];

const listCategoriesRef = document.createElement("ul");
listCategoriesRef.setAttribute("id", "categories");

const itemRef = document.createElement("li");
itemRef.classList.add("item");
const headingRef = document.createElement("h2");
headingRef.textContent = categories[0];

const listAnimalsRef = document.createElement("ul");
const itemAnimalRef = document.createElement("li");
itemAnimalRef.textContent = animals[0];
const itemAnimalRef1 = document.createElement("li");
itemAnimalRef1.textContent = animals[1];
const itemAnimalRef2 = document.createElement("li");
itemAnimalRef2.textContent = animals[2];
const itemAnimalRef3 = document.createElement("li");
itemAnimalRef3.textContent = animals[3];

const listProductsRef = document.createElement("ul");
const itemRef1 = document.createElement("li");
itemRef1.classList.add("item");
const headingRef1 = document.createElement("h2");
headingRef1.textContent = categories[1];

const itemProductsRef = document.createElement("li");
itemProductsRef.textContent = products[0];
const itemProductsRef1 = document.createElement("li");
itemProductsRef1.textContent = products[1];
const itemProductsRef2 = document.createElement("li");
itemProductsRef2.textContent = products[2];

const listTechnologyRef = document.createElement("ul");
const itemRef2 = document.createElement("li");
itemRef2.classList.add("item");
const headingRef2 = document.createElement("h2");
headingRef2.textContent = categories[1];

const itemTechnologyRef = document.createElement("li");
itemTechnologyRef.textContent = technology[0];
const itemTechnologyRef1 = document.createElement("li");
itemTechnologyRef1.textContent = technology[1];
const itemTechnologyRef2 = document.createElement("li");
itemTechnologyRef2.textContent = technology[2];
const itemTechnologyRef3 = document.createElement("li");
itemTechnologyRef3.textContent = technology[3];
const itemTechnologyRef4 = document.createElement("li");
itemTechnologyRef4.textContent = technology[4];

document.body.appendChild(listCategoriesRef);
listCategoriesRef.append(itemRef, itemRef1, itemRef2);
itemRef.append(headingRef, listAnimalsRef);
listAnimalsRef.append(
  itemAnimalRef,
  itemAnimalRef1,
  itemAnimalRef2,
  itemAnimalRef3
);
itemRef1.append(headingRef1, listProductsRef);
listProductsRef.append(itemProductsRef, itemProductsRef1, itemProductsRef2);

itemRef2.append(headingRef2, listTechnologyRef);
listTechnologyRef.append(
  itemTechnologyRef,
  itemTechnologyRef1,
  itemTechnologyRef2,
  itemTechnologyRef3,
  itemTechnologyRef4
);

// console.log(listCategoriesRef);
