const numberCategories = document.querySelectorAll('.item');
console.log (`Number of categories: ${numberCategories.length}`);

numberCategories.forEach(category => {
    const title = category.querySelector('h2');

    const item = category.querySelectorAll('li');

    console.log(`Category: ${title.textContent}`);
    console.log(`Elements: ${item.length}`);
})
