const myElement = document.querySelectorAll('.item');
console.log(`Number of categories: ${myElement.length}`);

myElement.forEach(function (item) {
  const categoryName = item.querySelector('h2').textContent;
  const categoryCount = item.querySelectorAll('li').length;

  console.log(`Category: ${categoryName}
  Elements: ${categoryCount}`);
});
