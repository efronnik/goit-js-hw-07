const nameInput = document.querySelector('#name-input');
const nameOutput = document.querySelector('#name-output');

nameInput.addEventListener('input', function () {
  const clearInput = nameInput.value.trim();

  if (clearInput === '') {
    nameOutput.textContent = 'Anonym';
  } else {
    nameOutput.textContent = clearInput;
  }
});
