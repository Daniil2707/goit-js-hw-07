const nameInput = document.querySelector('#name-input');
const nameOutput = document.querySelector('#name-output');

nameInput.addEventListener('input', e => {
  if (e.target.value.trim()) {
    nameOutput.textContent = e.target.value.trim();
  } else {
    nameOutput.textContent = 'Anonymous';
  }
});
