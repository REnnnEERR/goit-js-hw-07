const chBtn = document.querySelector('.change-color');
chBtn.addEventListener("click", () => {
  const color = getRandomHexColor();
  document.body.style.backgroundColor = color;
  const colorSpan = document.querySelector('.color');
  colorSpan.textContent = color;
}); 

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}