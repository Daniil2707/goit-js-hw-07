function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const btn = document.querySelector('.change-color');
const color = document.querySelector('.color');

btn.addEventListener('click', () => {
  const getColor = getRandomHexColor();

  color.textContent = getColor;

  document.body.style.backgroundColor = getColor;
});
