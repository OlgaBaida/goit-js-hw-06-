const categories = document.querySelector('#categories');
console.log ('Number of categories:', categories.children.length);

const itemsEl = document.querySelectorAll('#categories>li');
itemsEl.forEach (el => {
    console.log ('Category:', el.firstElementChild.textContent, 'Elements:', el.lastElementChild.children.length )
})


