async function fetchCategories() {
  const res = await fetch("https://dummyjson.com/products/categories");
  return await res.json();
}

export { fetchCategories };
