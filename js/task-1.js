const items = document.querySelectorAll('.item');

console.log(items.length);

items.forEach(item => {
  const title = item.querySelector('h2');
  console.log(title.textContent);

  const list = item.querySelectorAll('li');
  console.log(list.length);
});
