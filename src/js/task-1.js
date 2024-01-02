const items = document.querySelectorAll("li.item");
console.log("Categories:", items.length);
for (const item of items) {
  const headText = item.querySelector("h2").textContent;

  const liItems = item.querySelectorAll("ul > li");
  console.log(`Categories: ${headText}`);
  console.log(`Elements of categories"${headText}": ${liItems.length}`);
}
