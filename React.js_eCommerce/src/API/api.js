const BASE_URL = "https://dummyjson.com/products";

async function fetchCategories() {
  const res = await fetch(`${BASE_URL}/categories`);
  return await res.json();
}

// fetch and filter top rated products

async function topRatedProducts() {
  const res = await fetch(`${BASE_URL}?limit=100`);
  const jsonData = await res.json();
  const filterData = jsonData.products.sort((a, b) => b.rating - a.rating);
  return filterData.slice(0, 5);
}

// fetch and filter top discount products

async function topDiscountProducts() {
  const res = await fetch(`${BASE_URL}?limit=100`);
  const jsonData = await res.json();
  const filterData = jsonData.products.sort(
    (a, b) => b.discountPercentage - a.discountPercentage
  );
  return filterData.slice(0, 5);
}

// laptop

async function topLaptops() {
  const res = await fetch(`${BASE_URL}/category/laptops`);
  const jsonData = await res.json();
  return jsonData.products;
}

// single product

async function singleProduct(id) {
  const res = await fetch(`${BASE_URL}/${id}`);
  return await res.json();
}

// all product featch

async function allProducts(skip, filter) {
  if (filter === "All") {
    const res = await fetch(` ${BASE_URL}?limit=12&skip=${skip}`);
    return await res.json();
  } else {
    const res = await fetch(`${BASE_URL}/category/${filter}`);
    return await res.json();
  }
}

async function categoryProducts(category) {
  try {
    const res = await fetch(`${BASE_URL}/category/${category}`);
    return await res.json();
  } catch (error) {
    return error.message;
  }
}

async function searchProduct(productName) {
  const res = await fetch(`${BASE_URL}/search?q=${productName}`);
  return res.json();
}

export {
  fetchCategories,
  topRatedProducts,
  topDiscountProducts,
  topLaptops,
  singleProduct,
  allProducts,
  categoryProducts,
  searchProduct,
};
