const nameInput = document.querySelector('#name-input');
const nameOutput = document.querySelector('#name-output');

nameInput.addEventListener('input', function () {
  const clearInput = nameInput.value.trim();

  if (clearInput === '') {
    nameOutput.textContent = 'Anonymus';
  } else {
    nameOutput.textContent = clearInput;
  }
});
