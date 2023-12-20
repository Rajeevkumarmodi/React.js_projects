async function fetchCategories() {
  const res = await fetch("https://dummyjson.com/products/categories");
  return await res.json();
}

// fetch and filter top rated products

async function topRatedProducts() {
  const res = await fetch("https://dummyjson.com/products");
  const jsonData = await res.json();
  const filterData = jsonData.products.sort((a, b) => b.rating - a.rating);
  return filterData.slice(0, 5);
}

export { fetchCategories, topRatedProducts };
