function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

document.addEventListener('DOMContentLoaded', function () {
  const bodyElem = document.body;
  const spanColor = document.querySelector('.color');
  const changeColorButton = document.querySelector('.change-color');

  changeColorButton.addEventListener('click', function () {
    const randColor = getRandomHexColor();

    bodyElem.style.backgroundColor = randColor;

    spanColor.textContent = randColor;

    spanColor.style.color = getRandomHexColor(randColor);
  });
});
