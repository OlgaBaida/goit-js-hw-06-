const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];
const list = document.querySelector('#ingredients');

const newList = ingredients.map(newEl => 
  {let elementLi = document.createElement("li");
    elementLi.className = "item";
    elementLi.textContent = newEl;
    return (elementLi)});

list.append(...newList);
console.log (...newList)



