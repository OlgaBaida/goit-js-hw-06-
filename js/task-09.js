function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
const changeBtn = document.querySelector('button.change-color')
const bodyEl = document.querySelector('body')
const colorValue = document.querySelector('span.color')


changeBtn.addEventListener('click', e => {
  let color = getRandomHexColor();
  bodyEl.style.backgroundColor = color;
  colorValue.textContent = color;
})