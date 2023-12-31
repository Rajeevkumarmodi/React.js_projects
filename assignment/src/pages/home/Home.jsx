import React, { useContext, useEffect, useState } from "react";
import ProductCard from "../../components/productCard/ProductCard";
import { myContex } from "../../App";
function Home() {
  const [allProducts, setAllProducts] = useState([]);
  const [filter, setFilter] = useState("All");
  const { searchText } = useContext(myContex);

  // console.log(filter);
  function searchProduct() {
    const data = allProducts.filter((product) =>
      product.title.toLowerCase().includes(searchText.toLowerCase())
    );

    if (searchText) {
      setAllProducts(data);
    }
  }

  useEffect(() => {
    if (!searchText) {
      fetchProducts();
    }
    searchProduct();
  }, [searchText, filter]);

  async function fetchProducts() {
    try {
      const res = await fetch("https://dummyjson.com/products");
      const jsonData = await res.json();

      // filter
      if (filter === "All") {
        setAllProducts(jsonData.products);
      } else if (filter === "0-500") {
        const filterData = jsonData.products.filter(
          (data) => data.price > 0 && data.price < 500
        );
        setAllProducts(filterData);
      } else if (filter === "500-1000") {
        const filterData = jsonData.products.filter(
          (data) => data.price >= 500 && data.price < 1000
        );
        setAllProducts(filterData);
      } else if (filter === "1000-1500") {
        const filterData = jsonData.products.filter(
          (data) => data.price >= 1000 && data.price < 1500
        );
        setAllProducts(filterData);
      } else if (filter === "1500-2000") {
        const filterData = jsonData.products.filter(
          (data) => data.price >= 1500 && data.price < 2000
        );
        setAllProducts(filterData);
        console.log("2000");
      }
    } catch (error) {
      alert(error.message);
    }
  }
  return (
    <div>
      <div style={{ display: "flex", gap: "10px", alignItems: "center" }}>
        <h2 style={{ padding: "20px" }}>All Products</h2>
        <label htmlFor="filter">Filter by Price</label>
        <select onChange={(e) => setFilter(e.target.value)} name="" id="filter">
          <option value="All">All</option>
          <option value="0-500">$0 to $500</option>
          <option value="500-1000">$500 to $1000</option>
          <option value="1000-1500">$1000 to $1500</option>
          <option value="1500-2000">$1500 to $2000</option>
        </select>
      </div>
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: "30px",
          justifyContent: "center",
        }}
      >
        {allProducts.length === 0 ? (
          <h2>Product not found</h2>
        ) : (
          allProducts &&
          allProducts.map((product) => {
            return (
              <div key={product.id}>
                <ProductCard
                  thumbnail={product.thumbnail}
                  price={product.price}
                  title={product.title}
                  discountPercentage={product.discountPercentage}
                />
              </div>
            );
          })
        )}
      </div>
    </div>
  );
}

export default Home;
