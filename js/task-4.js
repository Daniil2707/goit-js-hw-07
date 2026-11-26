const form = document.querySelector('.login-form');

form.addEventListener('submit', e => {
  e.preventDefault();

  const formData = new FormData(e.target);

  const result = {
    email: formData.get('email').trim(),
    password: formData.get('password').trim(),
  };

  if (result.email === '' || result.password === '') {
    alert('All form fields must be filled in');
  } else {
    console.log(result);
    form.reset();
  }
});
