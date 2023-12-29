async function fetchCategories() {
  const res = await fetch("https://dummyjson.com/products/categories");
  return await res.json();
}

// fetch and filter top rated products

async function topRatedProducts() {
  const res = await fetch("https://dummyjson.com/products?limit=100");
  const jsonData = await res.json();
  const filterData = jsonData.products.sort((a, b) => b.rating - a.rating);
  return filterData.slice(0, 5);
}

// fetch and filter top discount products

async function topDiscountProducts() {
  const res = await fetch("https://dummyjson.com/products?limit=100");
  const jsonData = await res.json();
  const filterData = jsonData.products.sort(
    (a, b) => b.discountPercentage - a.discountPercentage
  );
  return filterData.slice(0, 5);
}

// laptop

async function topLaptops() {
  const res = await fetch("https://dummyjson.com/products/category/laptops");
  const jsonData = await res.json();
  return jsonData.products;
}

// single product

async function singleProduct(id) {
  const res = await fetch(`https://dummyjson.com/products/${id}`);
  return await res.json();
}

// all product featch

async function allProducts(skip) {
  const res = await fetch(
    ` https://dummyjson.com/products?limit=12&skip=${skip}`
  );

  return await res.json();
}

export {
  fetchCategories,
  topRatedProducts,
  topDiscountProducts,
  topLaptops,
  singleProduct,
  allProducts,
};
