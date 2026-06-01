function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const buttonClick = document.querySelector('button.change-color')

const spanFind = document.querySelector('span.color')

const bodyColor = document.querySelector('body')

buttonClick.addEventListener('click', () => {
  const newColor = getRandomHexColor();
  spanFind.textContent = newColor
  bodyColor.style.backgroundColor = newColor
})